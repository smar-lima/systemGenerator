using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    [Table("Projects")]
    public class Project : BaseEntity
    {
        [Column("Name")]
        [Required]
        public string Name { get; set; }

        [Column("Surname")]
        public string Location { get; set; }
    }
}
