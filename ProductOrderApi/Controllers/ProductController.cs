using Application.Products;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductOrderApi.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class ProductController:ControllerBase
    {
    
        private readonly IMediator mediator;
    
        public ProductController(IMediator mediator){
            this.mediator = mediator;
          
           
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){

            return await mediator.Send(new List.Query());

        }
    }
}