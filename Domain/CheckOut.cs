namespace Domain
{
    public class CheckOut
    {
        public int Id {get; set;}

        public int CustomerId {get; set;}

        public ICollection<Order> orders {get; set;}
    }
}