
namespace Domain
{
    public class Order
    {
        public Guid Id{ get; set; }
        public int CustomerID{ get; set; }
         public ICollection<OrderDetail> OrderDetails {get;set;}
        
      
    }
}