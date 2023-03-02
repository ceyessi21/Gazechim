using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GazeChim.Services
{
    public interface IAuthService
    {
        string GetAuthorize();
        Task<string> GetToken(string authCode);

    }
}
