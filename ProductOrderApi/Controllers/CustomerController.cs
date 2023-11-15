using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Customers;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace ProductOrderApi.Controllers
{

     [ApiController]
     [Route("[controller]")]
    public class CustomerController:ControllerBase
    {
        private readonly IMediator mediator;
        
        public CustomerController(IMediator mediator){
            this.mediator = mediator;
            
        }

        [HttpPost]
        public  async Task<IActionResult> AddCustomer(Customer customer){
          
           await mediator.Send(new Create.Command{Customer = customer});

           return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Customer>>> GetCustomer(int id)
        {
           return await mediator.Send(new List.Query{Id = id});
        }

        
    }
}