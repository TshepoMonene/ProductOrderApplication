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
       
         var customer = Context.Customers.      
           return Ok( );
    }
}

}