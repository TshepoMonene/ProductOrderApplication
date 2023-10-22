namespace ProductOrderApi.Dtos
{
    public class ProductDto
    {
      public string Description{ get; set; }
        public decimal Price{ get; set; }
        public string Name{ get; set; }
        public string imageUrl{ get; set; }
        public int Quantity{ get; set; }   
    }
}