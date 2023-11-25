using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Normalrange
    {
        public int NormalrangeId { get; set; }
        public string Test { get; set; }
        public float MinRange { get; set; }
        public float MaxRange { get; set; }
        public int UnitId { get; set; }
        public int? MinAge { get; set; }
        public int? MaxAge { get; set; }
        public string? Gender { get; set; }
    }
}
