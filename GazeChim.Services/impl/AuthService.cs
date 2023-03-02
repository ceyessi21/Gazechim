using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using System.Reflection;
using Microsoft.Net.Http.Headers;
using System.Text.Json;
using GazeChim.Services.impl;
using GazeChim.Services;

namespace GazeChim.Services.impl
{

    public class AuthService : IAuthService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IConfiguration _config;
        private readonly IHttpClientFactory _httpClientFactory;
        public AuthService(IHttpContextAccessor httpContextAccessor, IConfiguration config, IHttpClientFactory httpClientFactory)
        {
            _httpContextAccessor = httpContextAccessor;
            _config = config;
            _httpClientFactory = httpClientFactory;
        }

        public string GetAuthorize()
        {
            string? token = _httpContextAccessor.HttpContext.Request.Cookies["code"];
            if (token == null)
            {
                string? authCode = _httpContextAccessor.HttpContext.Request.Query["code"];
                if (authCode == null)
                {
                    string url = _config.GetValue<string>("GraphQlAuthUri") + "?response_type=code&redirect_uri=" + _config.GetValue<string>("RedirectUri") + "&client_id=" + _config.GetValue<string>("ClientId");
                    return System.Text.Json.JsonSerializer.Serialize(url);
                }
                return authCode;
            }
            return System.Text.Json.JsonSerializer.Serialize(token);
        }

        public async Task<string> GetToken(string authCode)
        {

            string authValue = "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes($"{_config.GetValue<string>("ClientId")}:{_config.GetValue<string>("ClientSecret")}"));

            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("Authorization", authValue);

            client.DefaultRequestHeaders.Add(
                HeaderNames.Accept, "application/x-www-form-urlencoded");

            var body = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("grant_type", "authorization_code"),
                new KeyValuePair<string, string>("code", authCode),
                new KeyValuePair<string, string>("redirect_uri", _config.GetValue<string>("RedirectUri"))
            });

            var response = await client.PostAsync(_config.GetValue<string>("GraphQlUri") + "/oauth2/token", body);
            response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/x-www-form-urlencoded");
            return await response.Content.ReadAsStringAsync();
        }
    }
}
