using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using ProductOrderApi.Dtos;

namespace ProductOrderApi.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class ProductController:ControllerBase
    {
    
        private readonly DataContext context;
        public ProductController(DataContext context){
            this.context = context;
           
        }
        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> getProducts(){

            var products = await context.Products.ToListAsync();
            var productsDto = new List<ProductDto>();
             foreach(Product product in products){
                productsDto.Add(
                    new ProductDto {
                        Id = product.Id,
                        Description = product.Description,
                        Price = product.Price,
                        Name = product.Name,
                        imageUrl = product.imageUrl,
                        Quantity = product.Quantity

                    }
                );
             }

            return Ok(productsDto);

        }
    }
}