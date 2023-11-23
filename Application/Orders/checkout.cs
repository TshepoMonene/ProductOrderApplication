using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Orders
{
    public class checkout
    {
        public class Command:IRequest
        {
            public int Id{get;set;}
        }

        public class Handler:IRequestHandler<Command>
        {
        private readonly DataContext context;
            public Handler (DataContext context)
            {
            this.context = context;
                
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var orders =  context.Orders.Where(x => x.CustomerID == request.Id).ToList();

                context.RemoveRange(orders);

                await context.SaveChangesAsync();

            }

        }
    }
}