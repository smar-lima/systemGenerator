using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class BaseEntity
    {
        [Column("Id")]
        [Key]
        public long Id { get; set; }
    }
}
