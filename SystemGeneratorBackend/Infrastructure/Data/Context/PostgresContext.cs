using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Context
{
    public class PostgresContext : DbContext
    {
        //public DbSet<User> User { get; set; }
        public DbSet<Project> Project { get; set; }

        public PostgresContext(DbContextOptions<PostgresContext> options) :
            base(options)
        {
        }
    }
}
