namespace Domain
{
    public class OrderDetail
    {
        public Guid Id{ get; set; }

        public ICollection<Product> Products{ get; set; }

        public int Quantity{ get; set; }

        public decimal Total{ get; set; }
    }
}