using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using ProductOrderApi.Dtos;

namespace ProductOrderApi.Controllers
{
     [ApiController]
    [Route("[controller]")] 
    public class CheckoutController:ControllerBase
    {
        private readonly DataContext context;
        public CheckoutController(DataContext context){
            this.context = context;
        }

        [HttpDelete]
        public async Task<IActionResult> ClearCart( OrderDtos order){
             var customer = context.Customers
            .Where(p=>p.FirstName == order.customer.FirstName && p.LastName == order.customer.LastName)
            .FirstOrDefault();

            var oderR = context.Orders.Where(x =>x.CustomerID ==customer.Id).ToList();
            context.RemoveRange(oderR);

            return Ok(await context.SaveChangesAsync());
    
        }
            
    }
}