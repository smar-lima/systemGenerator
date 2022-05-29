using Domain.Entities;
using Domain.Models.General;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repository
{
    public class BaseRepository<T> where T : BaseEntity
    {
        protected readonly PostgresContext _context;
        private DbSet<T> _entities;

        public BaseRepository(PostgresContext context)
        {
            _entities = context.Set<T>();
            _context = context;
        }
        public IQueryable<T> GetAll()
        {
            return _entities;
        }
        public IQueryable<T> GetAllReadOnly()
        {
            return _entities.AsNoTracking();
        }
        public T GetById(int id)
        {
            return _entities.Find(id);
        }

        public async Task<T> GetByIdAsync(long id)
        {
            return await _entities.FindAsync(id);
        }
        public void Insert(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");

            _entities.Add(entity);
            _context.SaveChanges();
        }
        public void Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
            _entities.Update(entity);
            _context.SaveChanges();
        }
        public void Delete(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");

            _entities.Remove(entity);
            _context.SaveChanges();
        }
    }
}
