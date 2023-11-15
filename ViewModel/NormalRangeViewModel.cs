namespace SEPHMS.ViewModel
{
    public class NormalRangeViewModel
    { 
        public int UnitId { get; set; }
        public string  Unitname { get; set; }

        public int NormalrangeId { get; set; }
        public string Test { get; set; } 
        public float MinRange { get; set; }
        public float MaxRange { get; set; } 
        public string? Gender { get; set; } 
        public int? MinAge { get; set; } 
        public int? MaxAge { get; set; } 
    }
}