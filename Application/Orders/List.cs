using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Orders
{
    public class List
    {
        public class Query:IRequest<List<Order>>
        {
            public int Id{get;set;}
        }

        public class Handler : IRequestHandler<Query, List<Order>>
        {
             private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;
                
            }
            public async Task<List<Order>> Handle(Query request, CancellationToken cancellationToken)
            {
              return await context.Orders.Include(x =>x.OrderDetails).ThenInclude(p =>p.product).
              Where(x => x.CustomerID == request.Id).ToListAsync();
            }
        }
    }
}