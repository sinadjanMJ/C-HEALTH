using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Studentpersonalinformation
    {
        public int SpiId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Middlename { get; set; }
        public string Birthdate { get; set; }
        public string Gmailaddress { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public int SpiCode { get; set; }
        public string Gender { get; set; }
    }
}
