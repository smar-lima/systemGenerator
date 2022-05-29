namespace Domain.Models.General
{
    public class FilterResult<T>
    {
        public List<T> dataList { get; set; }
        public int page { get; set; }
        public int pageSize { get; set; }
    }
}
