using Domain.Entities;
using Domain.Models.Project;

namespace Application.Services.Interfaces
{
    public interface IProjectService
    {
        Task<Project> Post(PostPutProjectModel model);

        Task<Project> Get(long id);
        Task<List<Project>> GetAll();

        Task<Project> Put(long id, PostPutProjectModel model);
        Task Delete(long id);
    }
}
