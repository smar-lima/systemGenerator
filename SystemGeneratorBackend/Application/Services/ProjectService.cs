using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.Project;
using Infrastructure.Data.Repository.Interfaces;
using Infrastructure.Exception;
using Microsoft.EntityFrameworkCore;
using System.Net;

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
            //ValidateProject(model.Name, model.Location);

            Project newProject = new Project(model.Name, model.Location);

            _projectRepository.Insert(newProject);

            return newProject.Id;
        }


        public async Task<Project> Get(long id)
        {
            var project = await _projectRepository.GetByIdAsync(id);

            return project;
        }
        /*private async void ValidateProject(string name, string location)
        {
            var existingProject = await (from projects in _projectRepository.GetAllReadOnly()
                                         where projects.Name == name || projects.Location == location
                                         select projects).ToListAsync();

            if (existingProject != null) throw new HttpStatusException(HttpStatusCode.BadRequest, "Project name or location already exists!");
        }*/
    }
}
