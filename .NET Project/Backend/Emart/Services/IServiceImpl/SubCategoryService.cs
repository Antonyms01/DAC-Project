using Emart.Models;
using Emart.Repository;
using Emart.Services.IService;
using Microsoft.EntityFrameworkCore;

public class SubCategoryService : ISubCategoryService
{
    private readonly EmartDBContext _context;

    public SubCategoryService(EmartDBContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<SubCategory>> GetAllSubCategoriesAsync()
    {
        return await _context.subcategories.Include(sc => sc.category).ToListAsync();
    }

    public async Task<SubCategory?> GetSubCategoryByIdAsync(int id)
    {
        return await _context.subcategories
                             .Include(sc => sc.category)
        .FirstOrDefaultAsync(sc => sc.subcategoryid == id);
    }

    public async Task<SubCategory> CreateSubCategoryAsync(SubCategory subcategory)
    {
        _context.subcategories.Add(subcategory);
        await _context.SaveChangesAsync();
        return subcategory;
    }

    public async Task<SubCategory> UpdateSubCategoryAsync(SubCategory subcategory)
    {
        _context.subcategories.Update(subcategory);
        await _context.SaveChangesAsync();
        return subcategory;
    }

    public async Task<bool> DeleteSubCategoryAsync(int id)
    {
        var subcategory = await _context.subcategories.FindAsync(id);
        if (subcategory == null)
        {
            return false;
        }

        _context.subcategories.Remove(subcategory);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<List<SubCategory>> GetSubCategoriesByCategoryIdAsync(int categoryId)
    {
        return await _context.subcategories
                             .Where(sc => sc.categoryid == categoryId)
                             .ToListAsync();
    }
}
