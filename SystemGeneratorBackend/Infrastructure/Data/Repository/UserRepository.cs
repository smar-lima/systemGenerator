using Domain.Entities;
using Infrastructure.Data.Context;
using Infrastructure.Data.Repository.Interfaces;

namespace Infrastructure.Data.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(PostgresContext context) : base(context) { }
    }
}
