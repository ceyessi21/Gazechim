using GraphQL;
using GraphQL.Client.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using GazeChim.Data.Models;
using GraphQL.Client.Http;
using Microsoft.AspNetCore.Http;

namespace GazeChim.Services.impl
{



    public class UserService : BaseTrackDechetService<UserResult>, IUserService
    {
        public UserService(GraphQLHttpClient client, IHttpContextAccessor httpContextAccessor) : base(client, httpContextAccessor)
        {
        }

        public Task<UserResult> Get()
        {
            var query = new GraphQLRequest
            {
                Query = @"
                   query {
                        me {
                            id
                            email
                            name
                            isAdmin
                            phone
                        }
                    }"
            };
            return base.Get(query);
        }
    }
}

