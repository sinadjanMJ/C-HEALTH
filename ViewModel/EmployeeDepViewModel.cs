namespace SEPHMS.ViewModel
{
    public class EmployeeDepViewModel
    {
        public int EpiId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string? Middlename { get; set; }
        public string Birthdate { get; set; }
        public string Gmailaddress { get; set; }
        public string AddressProvince { get; set; }
        public string Fullname { get; set; }

        public int Age { get; set; }
        public int EpiCode { get; set; }
        public string Gender { get; set; }
        public string AddressMunicipality { get; set; }
        public string AddressBarangay { get; set; }
        public string AddressPurok { get; set; }
        public string Address { get; set; }
          public string Status { get; set; }
        public string DepartmentName { get; set; }
        public int DepartmentId { get; set; }

        public int CourseStrandYearId { get; set; }
        public string CourseStrandYearName { get; set; }
    }
}