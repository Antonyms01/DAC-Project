namespace Emart.Models
{
    public class User
    {
        public int userid { get; set; }
        public string? username { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public int? usertype { get; set; }
        public int? epoints { get; set; }
    

        public List<Invoice>? invoices { get; set; }
    }
}
