using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Medicine
    {
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public int MedicineStock { get; set; }
        public string Units { get; set; }
        public int Category { get; set; }
        public string Status { get; set; }
        public string Datepurchased { get; set; }
        public string Expirydate { get; set; }
        public string Description { get; set; }
        public string Dosage { get; set; }
    }
}
