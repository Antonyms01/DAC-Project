using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Emart.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int productid { get; set; }
        public string? productname { get; set; }

        public string? brandname { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? productprice { get; set; }
        public int? rating { get; set; }
        public int subcategoryid { get; set; }
        public int? stockquantity { get; set; }
        public int? isdiscounted { get; set; }
        public string? longdesc { get; set; }

        public string? shortdesc { get; set; }

      

        public int? ispromoted { get; set; }
        public string? imagepath { get; set; }

        [JsonIgnore]
        public SubCategory? subcategory { get; set; }
        
    }
}
