using Application.Orders;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace ProductOrderApi.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class CheckoutController:ControllerBase
    {
        private readonly IMediator mediator;

        public CheckoutController(IMediator mediator){
            this.mediator = mediator;
        }
     
       [HttpDelete("{id}")]
        public async Task<IActionResult> CheckOut(int id)
        {
          await mediator.Send(new checkout.Command{Id = id});

          return Ok();
        }
            
    }
}