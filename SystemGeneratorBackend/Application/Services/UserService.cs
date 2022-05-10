using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.User;
using Infrastructure.Data.Repository.Interfaces;
using Infrastructure.Exception;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Service.Authorization;
using System.Net;
using System.Text;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;
        private IConfiguration _configuration;

        public UserService(IConfiguration iconfig, IUserRepository userRepository)
        {
            _configuration = iconfig;
            _userRepository = userRepository;
        }

        public async Task<UserLoginModel> Login(PostLoginModel model)
        {
            var secretKey = "teste";
            var user = await _userRepository.GetAllReadOnly().Where(x => x.Email == model.Login).FirstOrDefaultAsync();

            if (user == null || CreateMD5(model.Password) != user.Password)
            {
                throw new HttpStatusException(HttpStatusCode.NotFound, "Verify login and / or password!");
            }

            var token = "Bearer " + TokenService.GenerateToken(user, secretKey);

            var authUser = new UserLoginModel()
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Role = user.Role,
                Surname = user.Surname,
                Token = token
            };

            return authUser;
        }

        public async Task<UserLoginModel> Post(PostUserModel model)
        {
            var user = await _userRepository.GetAllReadOnly().Where(x => x.Email == model.Email).FirstOrDefaultAsync();

            if (user != null)
            {
                throw new HttpStatusException(HttpStatusCode.BadRequest, "User already exists!");
            }

            if (model.Password != model.ConfirmPassword)
            {
                throw new HttpStatusException(HttpStatusCode.BadRequest, "Password and Conrifm Password does not match!");
            }

            _userRepository.Insert(new User()
            {
                Email = model.Email,
                Name = model.Name,
                Password = CreateMD5(model.Password),
                Role = model.Role,
                Surname = model.Surname
            });

            return await Login(new PostLoginModel() { Login = model.Name, Password = model.Password });
        }

        public async Task<User> Get(long id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            if (user != null) user.Password = "Censored";

            return user;
        }

        private static string CreateMD5(string input)
        {
            // Use input string to calculate MD5 hash
            using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }
                return sb.ToString();
            }
        }
    }
}
