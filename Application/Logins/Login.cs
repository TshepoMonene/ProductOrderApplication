using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Logins
{
    public class Login
    {
        public class Query:IRequest<Customer>{

            public LoginDto UserDetails{ get; set;}
        }

        public class Handler : IRequestHandler<Query, Customer>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {

              this.context = context;

            }

            public async Task<Customer> Handle(Query request, CancellationToken cancellationToken)
            {
                var customer = await context.Customers
                .Where(x => x.Email == request.UserDetails.Email
                 && x.Password ==request.UserDetails.Password)
                 .FirstOrDefaultAsync();

                 return customer;
                 
            }
        }
    }
}