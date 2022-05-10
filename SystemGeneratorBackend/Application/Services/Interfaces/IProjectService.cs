using Domain.Entities;
using Domain.Models.Project;

namespace Application.Services.Interfaces
{
    public interface IProjectService
    {
        Task<long> Post(PostProjectModel model);

        Task<Project> Get(long id);
    }
}
