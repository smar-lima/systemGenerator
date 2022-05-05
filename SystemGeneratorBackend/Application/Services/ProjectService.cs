using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.Project;
using Infrastructure.Data.Repository.Interfaces;

namespace Application.Services
{
    public class ProjectService : IProjectService
    {
        private IProjectRepository _projectRepository;

        public ProjectService(IProjectRepository userRepository)
        {
            _projectRepository = userRepository;
        }

        public async Task<long> Post(PostProjectModel model)
        {
            Project newProject = new Project(model.Name, model.Location);

            _projectRepository.Insert(newProject);

            return newProject.Id;
        }

        public async Task<Project> Get(long id)
        {
            var project = await _projectRepository.GetByIdAsync(id);

            return project;
        }
    }
}
