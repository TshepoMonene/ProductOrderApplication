using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Edit
    {
        public class Command:IRequest
        {
            public int Id { get; set; }
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
                var orderDetail = context.OrderDetails.Where(x =>x.Id == request.Id).FirstOrDefault();

                orderDetail.quantity ++;

                context.Update(orderDetail);

                await context.SaveChangesAsync();
            }
        }
    }
}