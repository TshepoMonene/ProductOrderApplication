using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProductOrderApi.Controllers
{

    [ApiController]
        [Route("[controller]")] 
    public class OderController:ControllerBase
    {
        
        private readonly IMediator mediator;

        public OderController(IMediator mediator)
        {
          this.mediator = mediator;     
        }

        [HttpPost]
        public async Task<IActionResult> AddOrder(Order order){
       
          await mediator.Send(new Create.Command{Order = order});

          return Ok();
        }

        [HttpGet("{id}")]
        public  async Task<ActionResult<List<Order>>> GetOrders(int id)
        {
          return await mediator.Send(new List.Query{Id = id});
                     
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
          await mediator.Send(new Delete.Command{Id = id});

          return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> AddQuantity(int id,int operation)
        {
          await mediator.Send(new Edit.Command{Id = id,Operation =operation});

          return Ok();
        }

    
    
}

}