using System;
using System.Collections.Generic;
using GraphQL;
using GraphQL.Client.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Threading;
using GraphQL.Client.Http;
using System.Linq;
using GazeChim.Data.Models;

namespace GazeChim.Services
{
    public abstract class BaseTrackDechetService<T> where T: ITrackDechetModel
    {
        protected readonly GraphQLHttpClient _client;
        private readonly IHttpContextAccessor _httpContextAccessor;
        protected BaseTrackDechetService(GraphQLHttpClient client, IHttpContextAccessor httpContextAccessor)
        {
            _client = client;
            _httpContextAccessor = httpContextAccessor;

            if (_httpContextAccessor.HttpContext != null && !_client.HttpClient.DefaultRequestHeaders.Any(r => r.Key == "Authorization"))
            {
                string? token = _httpContextAccessor.HttpContext.Request.Headers["authorization"];
                _client.HttpClient.DefaultRequestHeaders.Add("Authorization", token);
            }
        }


        protected virtual async Task<T> Get(GraphQLRequest query)
        { 
            var response = await _client.SendQueryAsync<T>(query);
            return response.Data;
        }
    }
}
