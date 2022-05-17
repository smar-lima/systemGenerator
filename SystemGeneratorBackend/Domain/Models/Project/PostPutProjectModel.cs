using System.ComponentModel.DataAnnotations;

namespace Domain.Models.Project
{
    public class PostPutProjectModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }
    }
}
