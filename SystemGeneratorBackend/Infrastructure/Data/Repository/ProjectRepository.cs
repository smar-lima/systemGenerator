using Domain.Entities;
using Infrastructure.Data.Context;
using Infrastructure.Data.Repository.Interfaces;

namespace Infrastructure.Data.Repository
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(PostgresContext context) : base(context) { }
    }
}
