using Emart.Models;
using Emart.Repository;
using Emart.Services.IService;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

public class UserService : IUserService
{
    private readonly EmartDBContext _context;
    private readonly IConfiguration _configuration;

    public UserService(EmartDBContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public async Task<User> GetUserByEmailAsync(string email)
    {
        // Ensure that this lookup is case-sensitive
        return await _context.users.SingleOrDefaultAsync(u => u.email == email);
    }

    public async Task<string> GenerateJwtTokenAsync(User user)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }


    public async Task<IEnumerable<User>> GetAllUsersAsync()
    {
        return await _context.users.ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        return await _context.users.FindAsync(id);
    }

    public async Task<User> CreateUserAsync(User user)
    {
        _context.users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<User> UpdateUserAsync(User user)
    {
        _context.users.Update(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await _context.users.FindAsync(id);
        if (user == null)
        {
            return false;
        }

        _context.users.Remove(user);
        await _context.SaveChangesAsync();
        return true;
    }

   
}
