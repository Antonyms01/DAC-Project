    namespace Emart.Controllers
    {
        using Emart.Models;
        using Emart.Services.IService;
        using Microsoft.AspNetCore.Authorization;
        using Microsoft.AspNetCore.Mvc;
        using System.Collections.Generic;
        using System.Threading.Tasks;

        [ApiController]
        [Route("api/[controller]")]
        public class UserController : ControllerBase
        {
            private readonly IUserService _userService;

            public UserController(IUserService userService)
            {
                _userService = userService;
            }

            // POST: api/User/signin
            [HttpPost("signin")]

            public async Task<IActionResult> SignIn([FromBody] SignInModel model)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

            var user = await _userService.GetUserByEmailAsync(model.useremail);

            if (user == null)
            {
                Console.WriteLine($"User with email {model.useremail} does not exist in the database.");
                return Unauthorized("User does not exist.");
            }
            if (user.email == model.useremail && user.password == model.password)
            {
                // Generate the JWT token
                var token = await _userService.GenerateJwtTokenAsync(user);
                var userData = new
                {
                    token,
                    user = new
                    {
                        user.userid,
                        user.username,
                        user.usertype,
                        user.epoints,
                        user.email
                    }
                };
                return Ok(userData);
            }
            return Unauthorized("Invalid credentials. Email or password does not match.");

        }
       
                // This is a protected endpoint
                [Authorize]
                [HttpGet("endpoint")]
                public IActionResult GetProtectedData()
                {
                    return Ok("This is protected data.");
                }

                // SignInModel class for binding the user email and password
                public class SignInModel
            {
                public string useremail { get; set; }
                public string password { get; set; }
            }

            // GET: api/User
            [HttpGet]
            public async Task<IActionResult> GetAllUsers()
            {
                var users = await _userService.GetAllUsersAsync();
                return Ok(users);
            }

            // GET: api/User/{id}
            [HttpGet("{id}")]
            public async Task<IActionResult> GetUserById(int id)
            {
                var user = await _userService.GetUserByIdAsync(id);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }

            // POST: api/User
            [HttpPost]
            public async Task<IActionResult> CreateUser([FromBody] User user)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var createdUser = await _userService.CreateUserAsync(user);
                return CreatedAtAction(nameof(GetUserById), new { id = createdUser.userid }, createdUser);
            }

            // PUT: api/User/{id}
            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
            {
                if (id != user.userid)
                {
                    return BadRequest("User ID mismatch");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _userService.UpdateUserAsync(user);
                return NoContent();
            }

            // DELETE: api/User/{id}
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteUser(int id)
            {
                var success = await _userService.DeleteUserAsync(id);
                if (!success)
                {
                    return NotFound();
                }

                return NoContent();
            }
        }
    }
