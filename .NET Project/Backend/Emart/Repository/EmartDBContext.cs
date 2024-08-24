using Emart.Models;
using Microsoft.EntityFrameworkCore;


namespace Emart.Repository
{
    public class EmartDBContext:DbContext
    {
        public EmartDBContext(DbContextOptions<EmartDBContext> options) : base(options)
        {
        }

        //EmartDBContext: This is your database context, allowing you to perform operations on your database using EF Core.
        //It represents a session with the database.

        public DbSet<Category> categories { get; set; }
        public DbSet<SubCategory> subcategories { get; set; }
        public DbSet<Product> products { get; set; }
       
        public DbSet<Invoice> invoices { get; set; }
       
        public DbSet<User> users { get; set; }

        //DbSet<TEntity>: Each DbSet property represents a table in your database.

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //OnModelCreating: Configures relationships between the entities, such as defining foreign keys
            //and one-to-many relationships between the entities.

            base.OnModelCreating(modelBuilder);

            // Define relationships and constraints here if needed
           

            modelBuilder.Entity<SubCategory>()
                .HasOne(s => s.category)
                .WithMany(c => c.subcategories)
                .HasForeignKey(s => s.categoryid);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.subcategory)
                .WithMany(sc => sc.products)
                .HasForeignKey(p => p.subcategoryid);


            modelBuilder.Entity<Invoice>()
                .HasOne(i => i.user)
                .WithMany(u => u.invoices)
                .HasForeignKey(i => i.userid);
        }
    }
}
