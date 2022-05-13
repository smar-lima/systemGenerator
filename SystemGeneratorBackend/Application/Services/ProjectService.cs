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

        public async Task<Project> Post(PostPutProjectModel model)
        {
            await ValidateProject(model.Name, model.Location);

            Project newProject = new Project(model.Name, model.Location);

            _projectRepository.Insert(newProject);

            return newProject;
        }


        public async Task<Project> Get(long id)
        {
            var project = await _projectRepository.GetByIdAsync(id);

            return project;
        }

        public async Task<Project> Put(long id, PostPutProjectModel model)
        {
            var project = await ValidateExistingProject(id);
            await ValidateProject(model.Name, model.Location, id);

            project.Name = model.Name;
            project.Location = model.Location;

            _projectRepository.Update(project);

            return project;
        }

        public async Task Delete(long id)
        {
            var project = await ValidateExistingProject(id);
            _projectRepository.Delete(project);
        }

        private async Task ValidateProject(string name, string location, long? id = null)
        {
            var existingProject = await (from projects in _projectRepository.GetAllReadOnly()
                                   where (projects.Name == name || projects.Location == location) && projects.Id != id
                                   select projects).FirstOrDefaultAsync();

            if (existingProject != null) throw new HttpStatusException(HttpStatusCode.BadRequest, "Project name or location already exists!");
        }

        private async Task<Project> ValidateExistingProject(long id)
        {
            var existingProject = await _projectRepository.GetByIdAsync(id);

            if (existingProject == null) throw new HttpStatusException(HttpStatusCode.BadRequest, "Project does not exists!");

            return existingProject;
        }
    }
}
