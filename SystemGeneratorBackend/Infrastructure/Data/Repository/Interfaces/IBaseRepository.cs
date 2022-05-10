using Domain.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repository.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetAllReadOnly();
        T GetById(int id);
        Task<T> GetByIdAsync(long id);
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
