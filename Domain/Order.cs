
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Order
    {
        public int Id{ get; set; }
        [ForeignKey("Customer")]
        public int CustomerID{ get; set; }
        public OrderDetail OrderDetails {get;set;} 
        
      
    }
}