using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Customers
{
    public class List
    {
        public class Query:IRequest<List<Customer>>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Customer>>
        {
           private readonly DataContext context;
            public Handler(DataContext context){
            this.context = context;
                
            }

            public async Task<List<Customer>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Customers.Where(x =>x.Id == request.Id).ToListAsync();
            }
        }

    }
}
 