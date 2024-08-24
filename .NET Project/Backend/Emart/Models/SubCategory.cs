namespace Emart.Models
{
    public class SubCategory
    {
        public int subcategoryid { get; set; }
        public int categoryid { get; set; }
        public string? subcategoryname { get; set; }
        

        public string? imagepath { get; set; }
        public Category? category { get; set; }
        public List<Product>? products { get; set; }

       
    }
}
