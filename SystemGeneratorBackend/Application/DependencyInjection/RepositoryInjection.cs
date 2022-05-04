using Infrastructure.Data.Repository;
using Infrastructure.Data.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Service.DependencyInjection
{
    public class RegisterRepository
    {
        public static void RepositoryInjection(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped(typeof(BaseRepository<>));
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IProjectRepository, ProjectRepository>();
        }
    }
}
