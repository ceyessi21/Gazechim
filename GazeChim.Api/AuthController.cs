using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GazeChim.Services.impl;
using Microsoft.AspNetCore.Http;

namespace GazeChim.Api
{
    public class AuthController : Controller
    {
        private readonly AuthService _authService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthController(AuthService authService, IHttpContextAccessor httpContextAccessor)
        {
            _authService = authService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet("api/authorize")]
        public string GetAuthorize()
        {
            return _authService.GetAuthorize();
        }

        [HttpGet("api/token/{authCode}")]
        public async Task<ActionResult> GetToken(string authCode)
        {
            string? token = _httpContextAccessor.HttpContext.Request.Cookies["token"];
            if (token != null)
            {
                return Unauthorized("missing Token");
            }
            if (authCode == null)
            {
                return Unauthorized("missing authorize code");
            }

            try
            {
                var response = await _authService.GetToken(authCode);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}