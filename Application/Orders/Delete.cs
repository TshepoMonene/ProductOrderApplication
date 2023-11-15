using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Delete
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
                var order = context.Orders.Where(x =>x.Id == request.Id).FirstOrDefault();

                context.Orders.Remove(order); 

                await context.SaveChangesAsync();

                
            }
        }
    }
}