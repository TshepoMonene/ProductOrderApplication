using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Create
    {
        public class Command:IRequest
        {
            public Order Order {get;set;}
        }

        public class Handler:IRequestHandler<Command>
        {
          private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;

            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                 context.Orders.Add(request.Order);

                 await context.SaveChangesAsync();

            }
        }
    }
}