using Emart.Models;

namespace Emart.Services.IService
{
    public interface ISubCategoryService
    {
        Task<IEnumerable<SubCategory>> GetAllSubCategoriesAsync();
        Task<SubCategory?> GetSubCategoryByIdAsync(int id);
        Task<SubCategory> CreateSubCategoryAsync(SubCategory subcategory);
        Task<SubCategory> UpdateSubCategoryAsync(SubCategory subcategory);
        Task<bool> DeleteSubCategoryAsync(int id);

        Task<List<SubCategory>> GetSubCategoriesByCategoryIdAsync(int categoryId);


    }
}
