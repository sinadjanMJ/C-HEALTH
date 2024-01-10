using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Appointment
    {
        public int AppointmentId { get; set; }
        public string DateApp { get; set; }
        public string TimeApp { get; set; }
        public int PatientId { get; set; }
        public string Status { get; set; }
    }
}
