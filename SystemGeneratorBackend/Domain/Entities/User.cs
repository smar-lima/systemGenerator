using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    [Table("Users")]
    public class User : BaseEntity
    {
        [Column("Name")]
        [Required]
        public string Name { get; set; }

        [Column("Surname")]
        public string Surname { get; set; }

        [Column("Password")]
        [Required]
        public string Password { get; set; }

        [Column("Email")]
        [Required]
        public string Email { get; set; }

        [Column("Role")]
        public int Role { get; set; }

        [Column("ConnectionDate")]
        public DateTime? ConnectionDate { get; set; }

        [Column("ConnectionHost")]
        public string ConnectionHost { get; set; }
    }
}
