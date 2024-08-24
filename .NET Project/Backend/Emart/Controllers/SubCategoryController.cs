using Emart.Models;
using Emart.Services.IService;
using Microsoft.AspNetCore.Mvc;

namespace Emart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubCategoryController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;

        public SubCategoryController(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSubCategories()
        {
            var subcategories = await _subCategoryService.GetAllSubCategoriesAsync();
            return Ok(subcategories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubCategoryById(int id)
        {
            var subcategory = await _subCategoryService.GetSubCategoryByIdAsync(id);
            if (subcategory == null)
            {
                return NotFound();
            }
            return Ok(subcategory);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSubCategory([FromBody] SubCategory subcategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdSubCategory = await _subCategoryService.CreateSubCategoryAsync(subcategory);
            return CreatedAtAction(nameof(GetSubCategoryById), new { id = createdSubCategory.subcategoryid }, createdSubCategory);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSubCategory(int id, [FromBody] SubCategory subcategory)
        {
            if (id != subcategory.subcategoryid)
            {
                return BadRequest("SubCategory ID mismatch");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _subCategoryService.UpdateSubCategoryAsync(subcategory);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubCategory(int id)
        {
            var success = await _subCategoryService.DeleteSubCategoryAsync(id);
            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }

        // GET: api/SubCategory/category/{categoryId}
        [HttpGet("category/{categoryId}")]
        public async Task<IActionResult> GetSubCategoriesByCategoryId(int categoryId)
        {
            var subcategories = await _subCategoryService.GetSubCategoriesByCategoryIdAsync(categoryId);

            if (subcategories == null || subcategories.Count == 0)
            {
                return NotFound($"No subcategories found for category ID {categoryId}.");
            }

            return Ok(subcategories);
        }
    }

}
