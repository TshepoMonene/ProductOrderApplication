
using Domain;

namespace ProductOrderApi.Dtos
{
    public class OrderDtos
    {
        public CustomerDto customer{ get; set; }
          public int productId{ get; set; }
    }
}