using Application.Services;
using Application.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Service.DependencyInjection
{
    public class RegisterService
    {
        public static void ServiceInjection(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IProjectService, ProjectService>();
        }
    }
}
