using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using ProductOrderApi.Dtos;

namespace ProductOrderApi.Controllers
{

        [ApiController]
        [Route("[controller]")] 
    public class OderController:ControllerBase
    {
        public readonly DataContext Context;

        public OderController(DataContext context){
            this.Context = context;

        }
        [HttpPost]
        public async Task<IActionResult> addOrder([FromBody] OrderDtos order){
       
         var customer = Context.Customers.Where(p=>p.FirstName == order.customer.FirstName && p.LastName == order.customer.LastName).FirstOrDefault(); 
                  

            var order1 = new Order
            {
                CustomerID =  customer.Id ,
               OrderDetails = new OrderDetail{
                ProductId = Convert.ToInt32(order.productId),
                CreatedOn = DateTime.Now
               }

               };
                
         Context.Orders.Add(order1);
           return Ok( await Context.SaveChangesAsync());
    }

    [HttpGet]
    public  IActionResult GetCartProducts(Customer customer){
        
              var customers = Context.Customers.Where(x =>x.FirstName == customer.FirstName && x.LastName == customer.LastName).FirstOrDefault();
              var order = Context.Orders.Where( x =>x.CustomerID == customers.Id);
              var details = new List<OrderDetail>();
              foreach(Order order1 in order){
                details.Add(Context.OrderDetails.Where(x => x.Id == order1.OrderDetails.Id).FirstOrDefault() );
              }
              
              var products = new List<Product>();
              foreach(OrderDetail products1 in details)
              {
                products.Add(Context.Products.Where( x => x.Id == products1.ProductId).FirstOrDefault());
              }
              return Ok(products);
              
    }
}

}