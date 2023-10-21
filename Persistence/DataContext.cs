using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext:DbContext
    {

        public DataContext(DbContextOptions options):base(options)
        {
            
        }

        DbSet<Customer> Customers { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<OrderDetail> OrderDetails { get; set; }
        DbSet<Product> Products { get; set; }
        
    }
}