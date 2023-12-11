namespace SEPHMS.ViewModel
{
    public class StudentHealthInfoViewModel
    { 

     //department
        public string DepartmentName { get; set; }
        public int DepartmentId { get; set; }

      //course
        public int CourseStrandYearId { get; set; }
        public string CourseStrandYearName { get; set; }


       //units
        public int UnitId { get; set; }
        public string Unitname { get; set; }


        //StudentProfile
        public int SpiId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string? Middlename { get; set; }
         public string Fullname { get; set; }
        public string Birthdate { get; set; }
        public string Gmailaddress { get; set; }
        public string AddressProvince { get; set; }
        public int Age { get; set; }
        public int SpiCode { get; set; }
        public string Gender { get; set; }
        public string AddressMunicipality { get; set; }
        public string AddressBarangay { get; set; }
        public string AddressPurok { get; set; }
        public string Address { get; set; }


        //Health Profile
        public int ShiId { get; set; }
        public string Hospitalnumber { get; set; }
        public string Cbcphysician { get; set; }
        public string Cbcdatetimerequested { get; set; }
        public string Cbcdrawdatetime { get; set; }
        public float Wbc { get; set; }
        public string Wbcunits { get; set; }
        public float Neutrophils { get; set; }
        public string Neutrophilsunits { get; set; }
        public float Lymphocyte { get; set; }
        public string Lymphocyteunits { get; set; }
        public float Monocyte { get; set; }
        public string Monocyteunits { get; set; }
        public decimal Eosinophil { get; set; }
        public string Eosinophilunits { get; set; }
        public float Basophil { get; set; }
        public string Basophilunits { get; set; }
        public float Hemoglobin { get; set; }
        public string Hemoglobinunits { get; set; }
        public float Hematocrit { get; set; }
        public string Hematocritunits { get; set; }
        public float Rbc { get; set; }
        public string Rbcunits { get; set; }
        public float Mcv { get; set; }
        public string Mcvunits { get; set; }
        public float Mch { get; set; }
        public string Mchunits { get; set; }
        public float Mchc { get; set; }
        public string Mchcunits { get; set; }
        public float Rcdw { get; set; }
        public string Rcdwunits { get; set; }
        public float Plateletcount { get; set; }
        public string Plateletcountunits { get; set; }
        public float Mpv { get; set; }
        public string Mpvunits { get; set; }
        public string Datet { get; set; }

       
    }
}