using System;
using System.Collections.Generic;

namespace SEPHMS.Entities
{
    public partial class Studenthealthinformation
    {
        public int ShiId { get; set; }
        public int SpiId { get; set; }
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
