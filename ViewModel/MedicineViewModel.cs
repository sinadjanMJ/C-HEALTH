namespace SEPHMS.ViewModel
{
    public class MedicineViewModel
    { public int MedicineId { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string MedicineName { get; set; } 
        public string Units { get; set; } 
        public int Stock { get; set; }
        public string Status { get; set; } 
        public string PurchaseDate { get; set; }
         public string ExpiryDate { get; set; }
          public string Description { get; set; }
          public string Dosage { get; set; }
    }
}