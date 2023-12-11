using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Account
    {
        public int AccountId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string? Middlename { get; set; }
        public string Gmail { get; set; }
        public string Password { get; set; }
        public string Fullname { get; set; }
    }
}
