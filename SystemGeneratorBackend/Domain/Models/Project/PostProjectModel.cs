using System.ComponentModel.DataAnnotations;

namespace Domain.Models.Project
{
    public class PostProjectModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }
    }
}
