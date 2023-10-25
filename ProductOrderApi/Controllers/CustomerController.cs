using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace ProductOrderApi.Controllers
{

     [ApiController]
     [Route("[controller]")]
    public class CustomerController:ControllerBase
    {
        public readonly DataContext Context;
        public CustomerController(DataContext context){
            this.Context = context;
        }

        [HttpPost]
        public  async Task<IActionResult> addCustomer(Customer customer){
          
          Context.Customers.Add(customer);

          return Ok(await Context.SaveChangesAsync());
        }
    }
}