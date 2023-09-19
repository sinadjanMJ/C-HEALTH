using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Equipment
    {
        public int EquipmentId { get; set; }
        public string EquipmentName { get; set; }
        public string EquipmentStock { get; set; }
        public string Status { get; set; }
    }
}
