
using Domain;

namespace ProductOrderApi.Dtos
{
    public class OrderDto
    {
         public int Id{ get; set; }
        public int CustomerID{ get; set; }
        public ICollection<OrderDetail> OrderDetails {get;set;}  
    }
}