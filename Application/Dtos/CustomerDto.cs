namespace ProductOrderApi.Dtos
{
    public class CustomerDto
    {
       public int Id{ get; set; }
        public string FirstName{ get; set; }
        public string LastName{ get; set; }
        public string AddressType{ get; set; }
        public string City{ get; set; }
        public string Surburb{ get; set; }
        public string StreetName{ get; set; }
        public int PostalCode{ get; set; }
    }
}