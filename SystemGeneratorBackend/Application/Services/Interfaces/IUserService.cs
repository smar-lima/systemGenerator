using Domain.Entities;
using Domain.Models.User;

namespace Application.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserLoginModel> Login(PostLoginModel model);

        Task<UserLoginModel> Post(PostUserModel model);

        Task<User> Get(long id);
    }
}
