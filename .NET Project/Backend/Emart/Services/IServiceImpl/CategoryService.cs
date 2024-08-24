using Emart.Models;
using Emart.Repository;
using Emart.Services.IService;
using Microsoft.EntityFrameworkCore;

namespace Emart.Services.IServiceImpl
{
    public class CategoryService:ICategoryService
    {
        private readonly EmartDBContext _context;

        public CategoryService(EmartDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _context.categories.ToListAsync();
        }

        public async Task<Category?> GetCategoryByIdAsync(int id)
        {
            return await _context.categories.FindAsync(id);
        }

        public async Task<Category> CreateCategoryAsync(Category category)
        {
            _context.categories.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Category> UpdateCategoryAsync(Category category)
        {
            _context.categories.Update(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<bool> DeleteCategoryAsync(int id)
        {
            var category = await _context.categories.FindAsync(id);
            if (category == null)
            {
                return false;
            }

            _context.categories.Remove(category);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
