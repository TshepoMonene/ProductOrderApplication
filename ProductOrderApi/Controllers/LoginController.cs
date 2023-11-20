using Application.Logins;
using Application.Products;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductOrderApi.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class LoginController:ControllerBase
    {
    
        private readonly IMediator mediator;
    
        public LoginController(IMediator mediator){
            this.mediator = mediator;
          
           
        }
        [HttpPost]
        public async Task<ActionResult<List<Product>>> Login(LoginDto login){

            var user =  await mediator.Send(new Login.Query{ UserDetails = login});

              if(user != null){
                return Ok(user);
              }

              else{
                return NotFound();
              }

        }
    }
}