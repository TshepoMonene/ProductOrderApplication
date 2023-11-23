using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class OrderDetail
    {
        public int Id{ get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }

        [ForeignKey("Order")]
        public int OrderId{ get; set; }
        

        public Product product { get; set; }

        public int quantity{ get; set; }

        public decimal Total{ get; set; }

         public  DateTime CreatedOn{ get; set; }
      
    }
}