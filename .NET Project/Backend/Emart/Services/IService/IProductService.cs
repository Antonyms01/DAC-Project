using Emart.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IProductService
{
   Task<IEnumerable<Product>> GetAllProductsAsync();
    Task<Product?> GetProductByIdAsync(int productId);
    Task<Product> CreateProductAsync(Product product);
    Task<Product> UpdateProductAsync(Product product);
    Task<bool> DeleteProductAsync(int id);
    Task<List<Product>> GetProductsBySubCategoryIdAsync(int subcategoryid);
}
