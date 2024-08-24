using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Emart.Models
{
    public class Invoice
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int invoiceid { get; set; }
        public int userid { get; set; }
        public decimal? totalamount { get; set; }

        public DateTime date { get; set; } = DateTime.Now;

        public double tax { get; set; }
        public User? user { get; set; }

        
        //public List<ProductInvoice>? productinvoices { get; set; }
    }
}
