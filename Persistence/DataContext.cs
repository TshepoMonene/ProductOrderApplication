using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext:DbContext
    {

        public DataContext(DbContextOptions options):base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 
          
        }
        
        public DbSet<Customer> Customers { get; set; }
         public  DbSet<Order> Orders { get; set; }
         public DbSet<OrderDetail> OrderDetails { get; set; }
       public DbSet<Product> Products { get; set; }
        
    }
}