using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Nurse
    {
        public int NurseId { get; set; }
        public string NurseFirstName { get; set; }
        public string NurseLastName { get; set; }
        public string NurseAddress { get; set; }
        public string NurseGmail { get; set; }
        public string Status { get; set; }
    }
}
