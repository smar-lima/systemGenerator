using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.General
{
    public class Filter
    {
        public List<FilterItem> FilterItens { get; set; }
        public int page { get; set; }
        public int pageSize { get; set; }
    }

    public class FilterItem
    {
        public string columnField { get; set; }
        public string operatorValue { get; set; }
        public string value { get; set; }
    }

    public enum FilterType
    {
        
    }
}
