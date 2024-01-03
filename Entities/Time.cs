using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Time
    {
        public int TimeId { get; set; }
        public int DateId { get; set; }
        public string Avatime { get; set; }
        public int TimeSlot { get; set; }
    }
}
