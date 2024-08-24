using Emart.Models;
using Emart.Repository;
using Microsoft.EntityFrameworkCore;

namespace Emart.Services.IServiceImpl
{
    public class ProductService:IProductService
    {
        private readonly EmartDBContext _context;

        public ProductService(EmartDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _context.products
                                 .Include(p => p.subcategory)
                                 .ToListAsync();
        }

        public async Task<Product?> GetProductByIdAsync(int productId)
        {
            return await _context.products
                                 .Include(p => p.subcategory)
                                 .FirstOrDefaultAsync(p => p.productid == productId);
        }

        public async Task<Product> CreateProductAsync(Product product)
        {
            _context.products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<Product> UpdateProductAsync(Product product)
        {
            _context.products.Update(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<bool> DeleteProductAsync(int id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return false;
            }

            _context.products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<Product>> GetProductsBySubCategoryIdAsync(int subcategoryid)
        {
            return await _context.products
                                 .Where(p => p.subcategoryid == subcategoryid)
                                 .ToListAsync();
        }
    }
}
