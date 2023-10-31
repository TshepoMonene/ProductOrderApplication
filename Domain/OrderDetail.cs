using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class OrderDetail
    {
        public int Id{ get; set; }
        [ForeignKey("Product")]
        public int  ProductId { get; set; } 

         public  DateTime CreatedOn{ get; set; }
      
    }
}