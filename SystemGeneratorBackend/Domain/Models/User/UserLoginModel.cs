namespace Domain.Models.User
{
    public class UserLoginModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public int Role { get; set; }
        public string Token { get; set; }
    }
}
