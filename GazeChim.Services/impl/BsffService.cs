using GazeChim.Data.Models;
using GraphQL;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using Microsoft.AspNetCore.Http;

namespace GazeChim.Services.impl
{
    public class BsffService : BaseTrackDechetService<BsffCollectionType>, IBsffService
    {
        public BsffService(GraphQLHttpClient client, IHttpContextAccessor httpContextAccessor) : base(client, httpContextAccessor)
        {
        }

        public Task<BsffCollectionType> Get()
        {
            var query = new GraphQLRequest
            {
                Query = @"
                    query {
                        bsffs{
                            edges{
                                node{
                                    id
                                    createdAt
                                    status
                                    transporter { company { name siret }}
                                    destination { company { name siret}}
                                    emitter { company { name siret }}
                                    waste { code description }
                                }
                            }
                        }
                    }"
            };

            return base.Get(query);
        }
        public async Task<BsffResult> GetById(string bsffId)
        {
            var query = new GraphQLRequest
            {
                Query = @"
                     query($id: ID!) {
                        bsff(id: $id){
                          id
                          createdAt
                          status
                          transporter { company { name siret }}
                          destination { company { name }}
                          emitter { company { name }}
                          waste { code description }     
                        }
                    }",
                Variables = new { id = bsffId }
            };

            var response = await _client.SendQueryAsync<BsffResult>(query);
            return response.Data;
        }


        //get packaging info
        //bsffPackaging


        //get all packaging info
        //bsffPackagings

        //get pdf
        //bsffPdf

    }
}


