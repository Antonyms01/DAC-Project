namespace Emart.Models
{
    public class Category
    {
       
            public int categoryid { get; set; }
            public string? categoryname { get; set; }
            
        public string? imagepath {  get; set; }
            public List<SubCategory>? subcategories { get; set; }
    }
}
