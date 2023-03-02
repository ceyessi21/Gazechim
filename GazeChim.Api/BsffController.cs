using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GazeChim.Services.impl;

namespace GazeChim.Api
{
    public class BsffController : Controller
    {
        private readonly BsffService _bsffService;

        public BsffController(BsffService bsffService)
        {
            _bsffService = bsffService;
        }

        [HttpGet("api/bsffs")]
        public async Task<ActionResult> GetBsffs()
        {
            var response = await _bsffService.Get();
            return Ok(response);

        }

        [HttpGet("api/bsff/{bsffId}")]
        public async Task<ActionResult> GetBsff(string bsffId)
        {

            var response = await _bsffService.GetById(bsffId);
            return Ok(response);
        }
    }
}
