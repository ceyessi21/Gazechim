using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GazeChim.Services.impl;

namespace GazeChim.Api
{
    public class UserController : Controller
    {
        private readonly UserService _userService;
        public UserController(UserService userService){

            _userService = userService;
        }

        [HttpGet("api/user")]
        public async Task<ActionResult> GetBsffs()
        {
            var response = await _userService.Get();
            return Ok(response);
        }
    }
}
