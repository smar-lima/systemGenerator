namespace Domain.Models.User
{
    public class PostUserModel
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
        public int Role { get; set; }
    }
}
