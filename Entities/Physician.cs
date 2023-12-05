using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Physician
    {
        public int PhysicianId { get; set; }
        public string Lastname { get; set; }
        public string Middlename { get; set; }
        public string Fullname { get; set; }
        public string Firstname { get; set; }
        public string? Gender { get; set; }
    }
}
