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
         
           byte[] bytes = customer.Id.ToByteArray();
           
           Order order1 = new Order();
           order1.CustomerID = BitConverter.ToInt32(bytes,0);
          // order1.OrderDetails.Add(new OrderDetail{ ProductId = order.product,CreatedOn = DateTime.UtcNow});
         
         Context.Orders.Add(order1);
           return Ok( await Context.SaveChangesAsync());
    }
}

}