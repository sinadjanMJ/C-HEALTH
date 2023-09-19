using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Medicinestockhistory
    {
        public int MedicineStockId { get; set; }
        public int MedicineId { get; set; }
        public int AddedStock { get; set; }
        public string Date { get; set; }
    }
}
