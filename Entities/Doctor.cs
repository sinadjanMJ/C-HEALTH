using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Doctor
    {
        public int DoctorId { get; set; }
        public string DoctorFirstName { get; set; }
        public string DoctorLastName { get; set; }
        public string DoctorAddress { get; set; }
        public string DoctorGmailAcc { get; set; }
        public string Status { get; set; }
    }
}
