using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Order
    {
        public Guid Id{ get; set; }
        public int CustomerID{ get; set; }
         public ICollection<OrderDetail> OrderDetails {get;set;}
         public  DateTime CreatedOn{ get; set; }
      
    }
}