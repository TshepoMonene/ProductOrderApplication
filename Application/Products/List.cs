using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Products
{
    public class List
    {
        public class Query:IRequest<List<Product>>{}

        public class Handler : IRequestHandler<Query, List<Product>>
        {
           private readonly DataContext context;
            public Handler(DataContext context){
            this.context = context;
                
            }
            public async Task<List<Product>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Products.ToListAsync();
            }

        }
    }
}