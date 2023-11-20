using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Customers
{
    public class Create
    {
        public class Command:IRequest
        {
            public Customer Customer { get; set; }
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
              
               context.Customers.Add(request.Customer);
               await context.SaveChangesAsync();
             
            }
        }
    }
}