using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Orders
{
    public class Edit
    {
        public class Command:IRequest
        {
            public int Id { get; set; }
            public int Operation{ get; set; }
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
                var orderDetail = context.OrderDetails.Include(x =>x.product)
                .Where(x =>x.Id == request.Id).FirstOrDefault();

                  if(request.Operation == 1){
                     orderDetail.quantity ++;
                     orderDetail.Total += orderDetail.product.Price;
                  }
                  else if (request.Operation == 2){
                    if(orderDetail.quantity!=0)
                    {
                        orderDetail.quantity--;
                        orderDetail.Total -= orderDetail.product.Price;

                    }
                  }
               


                context.Update(orderDetail);

                await context.SaveChangesAsync();
            }
        }
    }
}