using GazeChim.Data.Models;

namespace GazeChim.Services
{
    public interface IUserService
    {
        Task<UserResult> Get();
    }
}