
using Domain;

namespace ProductOrderApi.Dtos
{
    public class OrderDtos
    {
        public Guid Id{ get; set; }
        public int CustomerID{ get; set; }
         public ICollection<OrderDetail> OrderDetails {get;set;}
         public  DateTime CreatedOn{ get; set; }
    }
}