using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SEPHMS.ViewModel;
using SEPHMS.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;


namespace SEPHMS.Controllers
{
    
   
    [Route("/api/[controller]/[action]")]
    public class AdminAPIController : ControllerBase
    {

        
        private readonly clinicContext _context;

        public AdminAPIController(clinicContext context)
        {
            _context = context;
        }

        


     



        public IActionResult AdminAddAccount(Adminaccount adac)
        {
          _context.Adminaccounts.Add(adac);
            _context.SaveChanges();

            return Ok();
        }
        
        public ActionResult<List<Account>> getAdminAccount(){
            return _context.Accounts.ToList();
        }

          public IActionResult updateAdminAccount(Adminaccount upadmin)
        {
            try
            {
            _context.Adminaccounts.Update(upadmin);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }

        public IActionResult deleteAdminAccount(int id)
        {
            Console.WriteLine(id);
            var res = _context.Adminaccounts.Where(element => element.Id == id).FirstOrDefault();
            _context.Adminaccounts.Remove(res);
            _context.SaveChanges();
            return Ok();
        }



        




         public ActionResult<List<DepCourseViewModel>> getCourse()
        {
          
            var result = (
                from d in _context.Departments
                join c in _context.Coursestrandyears
                on d.DepartmentId equals c.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka

                select new DepCourseViewModel
                {

                     DepartmentId = d.DepartmentId,     
                     CourseStrandYearId = c.CourseStrandYearId,      
                     DepartmentName = d.DepartmentName,    
                     CourseStrandYearName = c.CourseStrandYearName      
    
                }



            ).ToList();
            return Ok(result);

        }

         public IActionResult AddCourse(Coursestrandyear addCor)
        {
            
        try
        {

             _context.Coursestrandyears.Add(addCor);
            _context.SaveChanges();
        }
        catch (System.Exception)
        {
            
            throw;
        }

       return Ok();
           
        }
            public IActionResult updateCourse(Coursestrandyear upCor)
        {
            try
            {
            _context.Coursestrandyears.Update(upCor);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
            public IActionResult deleteCourse(int id)
        {
            Console.WriteLine(id);
            var res = _context.Coursestrandyears.Where(element => element.CourseStrandYearId == id).FirstOrDefault();
            _context.Coursestrandyears.Remove(res);
            _context.SaveChanges();
            return Ok();
        }








         public ActionResult<List<Department>> getDepartment(){
            return _context.Departments.ToList();
        }

         public IActionResult AddDepartment(Department adddep)
        {
            
        try
        {

             _context.Departments.Add(adddep);
            _context.SaveChanges();
        }
        catch (System.Exception)
        {
            
            throw;
        }

       return Ok();
           
        }
            public IActionResult updateDepartment(Department updep)
        {
            try
            {
            _context.Departments.Update(updep);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
            public IActionResult deleteDepartment(int id)
        {
            Console.WriteLine(id);
            var res = _context.Departments.Where(element => element.DepartmentId == id).FirstOrDefault();
            _context.Departments.Remove(res);
            _context.SaveChanges();
            return Ok();
        }





        








        public ActionResult<List<Date>> getDate(){
            return _context.Dates.ToList();
        }

         public IActionResult AddDate(Date adddate)
        {
            
        try
        {

             _context.Dates.Add(adddate);
            _context.SaveChanges();
        }
        catch (System.Exception)
        {
            
            throw;
        }

       return Ok();
           
        }
             public IActionResult updateDate(Date updat)
        {
            try
            {
            _context.Dates.Update(updat);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
            public IActionResult deleteDate(int id)
        {
            Console.WriteLine(id);
            var res = _context.Dates.Where(element => element.DateId == id).FirstOrDefault();
            _context.Dates.Remove(res);
            _context.SaveChanges();
            return Ok();
        }






         public IActionResult AddDateTime(Time adddatetime)
        {
            
        try
        {

             _context.Times.Add(adddatetime);
            _context.SaveChanges();
        }
        catch (System.Exception)
        {
            
            throw;
        }

       return Ok();
           
        }

        public ActionResult<List<DateTimeViewModel>> getDateTime()
        {
          
            var result = (
                from t in _context.Times
                join d in _context.Dates
                on t.DateId equals d.DateId // naka base siya table if int ba or sting kung int mag tostring ka

                select new DateTimeViewModel
                {
                     TimeId = t.TimeId,     
                     DateId = d.DateId,      
                     Avadate = d.Avadate,    
                     Avatime = t.Avatime,    
                     TimeSlot = t.TimeSlot
                }



            ).ToList();
            return Ok(result);

        }

          public IActionResult updateDateTime(Time updatime)
        {
            try
            {
            _context.Times.Update(updatime);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
   

             public IActionResult deleteDateTime(int id)
        {
            Console.WriteLine(id);
            var res = _context.Times.Where(element => element.TimeId == id).FirstOrDefault();
            _context.Times.Remove(res);
            _context.SaveChanges();
            return Ok();
        }
                 






         public ActionResult<List<Unit>> getUnit(){
            return _context.Units.ToList();
        }
        public IActionResult AddUnit(Unit addun)
        {
          _context.Units.Add(addun);
            _context.SaveChanges();

            return Ok();
        }

            public IActionResult updateUnit(Unit upun)
        {
            try
            {
            _context.Units.Update(upun);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
        
          public IActionResult deleteUnit(int id)
        {
            Console.WriteLine(id);
            var res = _context.Units.Where(element => element.UnitId == id).FirstOrDefault();
            _context.Units.Remove(res);
            _context.SaveChanges();
            return Ok();
        }



        








        public ActionResult<List<Category>> getCategory(){
            return _context.Categories.ToList();
        }
        public IActionResult AddCategory(Category addcat)
        {
          _context.Categories.Add(addcat);
            _context.SaveChanges();

            return Ok();
        }

            public IActionResult updateCategory(Category upcat)
        {
            try
            {
            _context.Categories.Update(upcat);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
        
          public IActionResult deleteCategory(int id)
        {
            Console.WriteLine(id);
            var res = _context.Categories.Where(element => element.Id == id).FirstOrDefault();
            _context.Categories.Remove(res);
            _context.SaveChanges();
            return Ok();
        }






            public ActionResult<List<Doctor>> getDoctor(){
             return _context.Doctors.ToList();
            //   return _context.Doctors.Where(c => c.Status =="Active").ToList();
            }

             public IActionResult AddDoctor(Doctor adddoc)
        {
              if(string.IsNullOrEmpty(adddoc.Status) || adddoc.Status == "false")
            {
              adddoc.Status = "Inactive";
             
            }
            _context.Doctors.Add(adddoc);
            _context.SaveChanges();

            return Ok();
        }

      public IActionResult updateDoctor(Doctor updoc)
        {
            try
            {
             if(string.IsNullOrEmpty(updoc.Status) || updoc.Status == "false")
            {
                 updoc.Status = "Inactive";
            }
            else
            {
                 updoc.Status = "Active";
            }
            _context.Doctors.Update(updoc);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
    
           public IActionResult deleteDoctor(int id)
        {
            Console.WriteLine(id);
            var res = _context.Doctors.Where(element => element.DoctorId == id).FirstOrDefault();
            _context.Doctors.Remove(res);
            _context.SaveChanges();
            return Ok();
        }







          public ActionResult<List<Physician>> getPhysician(){
             return _context.Physicians.ToList();
            //   return _context.Doctors.Where(c => c.Status =="Active").ToList();
            }

             public IActionResult AddPhysician(Physician addPhy)
        {
            
            _context.Physicians.Add(addPhy);
            _context.SaveChanges();

            return Ok();
        }

      public IActionResult updatePhysician(Physician upPhy)
        {
            try
            {
            
            _context.Physicians.Update(upPhy);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
    
           public IActionResult deletePhysician(int id)
        {
            Console.WriteLine(id);
            var res = _context.Physicians.Where(element => element.PhysicianId == id).FirstOrDefault();
            _context.Physicians.Remove(res);
            _context.SaveChanges();
            return Ok();
        }


















            public ActionResult<List<Equipment>> getEquipment(){
            return _context.Equipment.ToList();
            }
        public IActionResult AddEquipment(Equipment addequip)
        {
              if(string.IsNullOrEmpty(addequip.Status) || addequip.Status == "false")
            {
              addequip.Status = "Inactive";
             
            }
            _context.Equipment.Add(addequip);
            _context.SaveChanges();

            return Ok();
        }

            public IActionResult updateEquipment(Equipment upequip)
        {
            try
            {
             if(string.IsNullOrEmpty(upequip.Status) || upequip.Status == "false")
            {
                 upequip.Status = "Inactive";
            }
            else
            {
                 upequip.Status = "Active";
            }
            _context.Equipment.Update(upequip);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
        
          public IActionResult deleteEquipment(int id)
        {
            Console.WriteLine(id);
            var res = _context.Equipment.Where(element => element.EquipmentId == id).FirstOrDefault();
            _context.Equipment.Remove(res);
            _context.SaveChanges();
            return Ok();
        }




 


        public ActionResult<List<Category>> getAllCategories(){
            return _context.Categories.ToList();
        }

         public ActionResult<List<MedicineViewModel>> getAllMedicine()
        {
          
            var result = (
                from m in _context.Medicines
                join c in _context.Categories
                on m.Category equals c.Id // naka base siya table if int ba or sting kung int mag tostring ka

                select new MedicineViewModel
                {

                   
                   MedicineId = m.MedicineId,
                   CategoryId = c.Id,
                    CategoryName = c.Categoryname,
                    MedicineName = m.MedicineName,
                    Units = m.Units,
                    Stock = m.MedicineStock,
                    PurchaseDate = m.Datepurchased,
                    ExpiryDate = m.Expirydate,
                    Status = m.Status,
                    Description = m.Description,
                    Dosage = m.Dosage
                }



            ).ToList();
            return Ok(result);
        }
         public IActionResult AddMedicine(Medicine addmedic, string Status)
        {
            //   if(string.IsNullOrEmpty(addmedic.Status) || addmedic.Status == "false")
            // {
            //   addmedic.Status = "Expired";
             
            // }
            
             addmedic.Status = Status;



            _context.Medicines.Add(addmedic);
            _context.SaveChanges();

            return Ok();
        }

        public IActionResult updateMedicine(Medicine upmedic)
        {
            try
            {
            //  if(string.IsNullOrEmpty(upmedic.Status) || upmedic.Status == "false")
            // {
            //      upmedic.Status = "Expired";
            // }
            // else
            // {
            //      upmedic.Status = "Active";
            // }
            _context.Medicines.Update(upmedic);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
        public IActionResult UpdateExpireMed(Medicine upmedic ,string stats)
        {
         upmedic.Status = stats;

             _context.Medicines.Update(upmedic);
            _context.SaveChanges();
            return Ok();
        }

           public IActionResult deleteMedicine(int id)
        {
            Console.WriteLine(id);
            var res = _context.Medicines.Where(element => element.MedicineId == id).FirstOrDefault();
            _context.Medicines.Remove(res);
            _context.SaveChanges();
            return Ok();
        }

          public IActionResult addStockMedicine(Medicine selmed, int iStock ,string date)
        {
            //selmed stands for sected medicine

            Medicinestockhistory MSH = new Medicinestockhistory();

             selmed.MedicineStock += iStock;
            _context.Medicines.Update(selmed);

            MSH.AddedStock = iStock;
            MSH.MedicineId = selmed.MedicineId;
            MSH.Date = date;

            _context.Medicinestockhistories.Add(MSH);
            _context.SaveChanges();
            return Ok();
        }


         public ActionResult<List<Medicine>> viewStockHistory(int id){
            
            //return _context.Products.ToList();
            var res = _context.Medicinestockhistories.ToList().Where(p => p.MedicineId == id);

            return Ok(res);
        } 












        




    


         public ActionResult<List<Normalrange>> getNR(){

             var result = (
                from n in _context.Normalranges
                join u in _context.Units
                on n.UnitId equals u.UnitId // naka base siya table if int ba or sting kung int mag tostring ka
        


                select new NormalRangeViewModel
                {

                   UnitId = u.UnitId,
                   Unitname = u.Unitname,
                 
                   NormalrangeId = n.NormalrangeId,
                   Test = n.Test,
                   MinRange = n.MinRange,
                   MaxRange = n.MaxRange,
                   MinAge = n.MinAge,
                   MaxAge = n.MaxAge,
                   Gender = n.Gender
                   //ayaw kalimot og butang og ? tagarefresh sa database adtos entities
                  
                }



            ).ToList();
            return Ok(result);
           
        }

         public IActionResult AddNR(Normalrange addNR)
        {
            
        try
        {

             _context.Normalranges.Add(addNR);
            _context.SaveChanges();
        }
        catch (System.Exception)
        {
            
            throw;
        }

       return Ok();
           
        }
            public IActionResult updateNR(Normalrange upNR)
        {
            try
            {
            _context.Normalranges.Update(upNR);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
            public IActionResult deleteNR(int id)
        {
            Console.WriteLine(id);
            var res = _context.Normalranges.Where(element => element.NormalrangeId == id).FirstOrDefault();
            _context.Normalranges.Remove(res);
            _context.SaveChanges();
            return Ok();
        }










        public ActionResult<List<Studentpersonalinformation>> getStudent(){
            return _context.Studentpersonalinformations.ToList();
        }
        public ActionResult<List<Studentpersonalinformation>> getStudents(){

             var result = (
                from s in _context.Studentpersonalinformations
                join d in _context.Departments
                on s.DepartmentId equals d.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka
               
                join c in _context.Coursestrandyears
                on s.CourseStrandYearId equals c.CourseStrandYearId




                select new StudentDepViewModel
                {

                   DepartmentId = d.DepartmentId,
                   DepartmentName = d.DepartmentName,
                 
                   
                   SpiId = s.SpiId,
                   Firstname = s.Firstname,
                   Lastname = s.Lastname,
                   Middlename = s.Middlename,
                   Fullname = s.Fullname,
                   Birthdate = s.Birthdate,
                   Gmailaddress = s.Gmailaddress,
                   Age = s.Age,
                   SpiCode = s.SpiCode,
                   Gender = s.Gender,
                   Address = s.Address,
                   AddressProvince = s.AddressProvince,
                   AddressMunicipality = s.AddressMunicipality,
                   AddressBarangay = s.AddressBarangay,
                   AddressPurok = s.AddressPurok,
                   Status = s.Status,

                   CourseStrandYearId = c.CourseStrandYearId,
                   CourseStrandYearName = c.CourseStrandYearName
                   
                }



            ).ToList();
            var approvedData = result.Where(x => x.Status == "Approved").ToList();
            return Ok(approvedData);
           
        }

         public ActionResult<List<Employeepersonalinformation>> getEmployee(){
            return _context.Employeepersonalinformations.ToList();
        }


          public ActionResult<List<Employeepersonalinformation>> getEmployeeJoin(){

             var result = (
                from s in _context.Employeepersonalinformations
                join d in _context.Departments
                on s.DepartmentId equals d.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka
               
                join c in _context.Coursestrandyears
                on s.CourseStrandYearId equals c.CourseStrandYearId




                select new EmployeeDepViewModel
                {

                   DepartmentId = d.DepartmentId,
                   DepartmentName = d.DepartmentName,
                 
                   
                   EpiId = s.EpiId,
                   Firstname = s.Firstname,
                   Lastname = s.Lastname,
                   Middlename = s.Middlename,
                   Fullname = s.Fullname,
                   Birthdate = s.Birthdate,
                   Gmailaddress = s.Gmailaddress,
                   Age = s.Age,
                   EpiCode = s.EpiCode,
                   Gender = s.Gender,
                   Address = s.Address,
                   AddressProvince = s.AddressProvince,
                   AddressMunicipality = s.AddressMunicipality,
                   AddressBarangay = s.AddressBarangay,
                   AddressPurok = s.AddressPurok,
                   Status = s.Status,

                   CourseStrandYearId = c.CourseStrandYearId,
                   CourseStrandYearName = c.CourseStrandYearName
                  
                }



            ).ToList();

            var approvedData = result.Where(x => x.Status == "Approved").ToList();

            return Ok(approvedData);
           
        }



         public IActionResult AddEmployee(Employeepersonalinformation addEmployee ,int randompass ,int age , string address, string province ,string municipal, string baranggay ,string fullname)
        {
            if(addEmployee != null && randompass != null && randompass != null && age != null && address != null && province != null && municipal != null && baranggay != null && fullname != null){

            
          
             addEmployee.Age = age;
             addEmployee.EpiCode = randompass;
             addEmployee.Address = address;
             addEmployee.AddressProvince = province;
             addEmployee.AddressMunicipality = municipal;
             addEmployee.AddressBarangay = baranggay;
             addEmployee.Fullname = fullname;
             


            _context.Employeepersonalinformations.Add(addEmployee);
            _context.SaveChanges();
            }else{
                Console.WriteLine("naay vlue nga empty");
            }

            return Ok();
        }


        
             public IActionResult updateEmployee(Employeepersonalinformation upEmp)
        {
            try
            {
 
            _context.Employeepersonalinformations.Update(upEmp);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
  
            public IActionResult deleteEmployee(int id)
        {
            Console.WriteLine(id);
            var res = _context.Employeepersonalinformations.Where(element => element.EpiId == id).FirstOrDefault();
            _context.Employeepersonalinformations.Remove(res);
            _context.SaveChanges();
            return Ok();
        }











           public IActionResult AddEmployeeHealth(Employeehealthinformation shi)
        {

            _context.Employeehealthinformations.Add(shi);
            _context.SaveChanges();
     
            return Ok();
        }
           public IActionResult UpdateEmployeeHealth(Employeehealthinformation upsth)
        {
            
            _context.Employeehealthinformations.Update(upsth);
            _context.SaveChanges();
     
            return Ok();
        }
       
       
      

          public IActionResult DeleteEmployeeHealth(int id)
        {
            Console.WriteLine(id);
            var res = _context.Employeehealthinformations.Where(element => element.EphiId == id).FirstOrDefault();
            _context.Employeehealthinformations.Remove(res);
            _context.SaveChanges();
            return Ok();
        }

        

















        public IActionResult AddStudent(Studentpersonalinformation addStudent ,int randompass ,int age , string address, string province ,string municipal, string baranggay ,string fullname)
        {

            
             addStudent.Age = age;
             addStudent.SpiCode = randompass;
             addStudent.Address = address;
             addStudent.AddressProvince = province;
             addStudent.AddressMunicipality = municipal;
             addStudent.AddressBarangay = baranggay;
             addStudent.Fullname = fullname;




            _context.Studentpersonalinformations.Add(addStudent);
            _context.SaveChanges();

            return Ok();
        }


         public IActionResult updateStudent(Studentpersonalinformation upst, int age , string address ,string fullname)
        {
            try
            {
                
            upst.Age = age;
            upst.Address = address;
            upst.Fullname = fullname;


            _context.Studentpersonalinformations.Update(upst);
            _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
            return Ok();
        }
  
            public IActionResult deleteStudent(int id)
        {
            Console.WriteLine(id);
            var res = _context.Studentpersonalinformations.Where(element => element.SpiId == id).FirstOrDefault();
            _context.Studentpersonalinformations.Remove(res);
            _context.SaveChanges();
            return Ok();
        }





      



        public IActionResult AddStudentHealth(Studenthealthinformation shi)
        {

            _context.Studenthealthinformations.Add(shi);
            _context.SaveChanges();
     
            return Ok();
        }


         public IActionResult UpdateStudentHealth(Studenthealthinformation upsth)
        {
            
            _context.Studenthealthinformations.Update(upsth);
            _context.SaveChanges();
     
            return Ok();
        }
       
       
      

          public IActionResult DeleteStudentHealth(int id)
        {
            Console.WriteLine(id);
            var res = _context.Studenthealthinformations.Where(element => element.ShiId == id).FirstOrDefault();
            _context.Studenthealthinformations.Remove(res);
            _context.SaveChanges();
            return Ok();
        }





        public ActionResult<List<StudentHealthInfoViewModel>> getStudentHI(){

             var result = (
                from s in _context.Studenthealthinformations

                join ss in _context.Studentpersonalinformations
                on s.SpiId equals ss.SpiId // naka base siya table if int ba or sting kung int mag tostring ka
               

                join d in _context.Departments
                on ss.DepartmentId equals d.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka
               
                join c in _context.Coursestrandyears
                on ss.CourseStrandYearId equals c.CourseStrandYearId

                select new StudentHealthInfoViewModel
                {
                   SpiId = ss.SpiId,
                   ShiId = s.ShiId,
                   Hospitalnumber = s.Hospitalnumber,
                   Cbcphysician = s.Cbcphysician,
                   Cbcdatetimerequested = s.Cbcdatetimerequested,
                   Cbcdrawdatetime = s.Cbcdrawdatetime,
                   Wbc = s.Wbc,
                   Wbcunits = s.Wbcunits,
                   Neutrophils = s.Neutrophils,
                   Neutrophilsunits = s.Neutrophilsunits,
                   Lymphocyte = s.Lymphocyte,
                   Lymphocyteunits = s.Lymphocyteunits,
                   Monocyte = s.Monocyte,
                   Monocyteunits = s.Monocyteunits,
                   Eosinophil = s.Eosinophil,
                   Eosinophilunits = s.Eosinophilunits,
                   Basophil = s.Basophil,
                   Basophilunits = s.Basophilunits,
                   Hemoglobin = s.Hemoglobin,
                   Hemoglobinunits = s.Hemoglobinunits,
                   Hematocrit = s.Hematocrit,
                   Hematocritunits = s.Hematocritunits,
                   Rbc = s.Rbc,
                   Rbcunits = s.Rbcunits,
                   Mcv = s.Mcv,
                   Mcvunits = s.Mcvunits,
                   Mch = s.Mch,
                   Mchunits = s.Mchunits,
                   Mchc = s.Mchc,
                   Mchcunits = s.Mchcunits,
                   Rcdw = s.Rcdw,
                   Rcdwunits = s.Rcdwunits,
                   Plateletcount = s.Plateletcount,
                   Plateletcountunits = s.Plateletcountunits,
                   Mpv = s.Mpv,
                   Mpvunits = s.Mpvunits,
                   Datet = s.Datet,




                   Firstname = ss.Firstname,
                   Middlename = ss.Middlename,
                   Lastname = ss.Lastname,
                   Fullname = ss.Fullname,
                   Birthdate = ss.Birthdate,
                   Gmailaddress = ss.Gmailaddress,
                   AddressProvince = ss.AddressProvince,
                   AddressMunicipality = ss.AddressMunicipality,
                   AddressBarangay = ss.AddressBarangay,
                   AddressPurok = ss.AddressPurok,
                   Age = ss.Age,
                   Gender = ss.Gender,
                   Address = ss.Address,
                   SpiCode = ss.SpiCode,
                   
                  
                   CourseStrandYearId = c.CourseStrandYearId,
                   CourseStrandYearName = c.CourseStrandYearName,

                   DepartmentId = d.DepartmentId,
                   DepartmentName = d.DepartmentName
                   



                  
                }



            ).ToList();
            return Ok(result);
           
        }


         public ActionResult<List<Employeehealthinformation>> getEmployeeHI(){

             var result = (
                from s in _context.Employeehealthinformations

                join ss in _context.Employeepersonalinformations
                on s.EpiId equals ss.EpiId // naka base siya table if int ba or sting kung int mag tostring ka
               

                join d in _context.Departments
                on ss.DepartmentId equals d.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka
               
                join c in _context.Coursestrandyears
                on ss.CourseStrandYearId equals c.CourseStrandYearId

                select new EmployeeHealthInfoViewModel
                {
                   EpiId = ss.EpiId,
                   EphiId = s.EphiId,
                   Hospitalnumber = s.Hospitalnumber,
                   Cbcphysician = s.Cbcphysician,
                   Cbcdatetimerequested = s.Cbcdatetimerequested,
                   Cbcdrawdatetime = s.Cbcdrawdatetime,
                   Wbc = s.Wbc,
                   Wbcunits = s.Wbcunits,
                   Neutrophils = s.Neutrophils,
                   Neutrophilsunits = s.Neutrophilsunits,
                   Lymphocyte = s.Lymphocyte,
                   Lymphocyteunits = s.Lymphocyteunits,
                   Monocyte = s.Monocyte,
                   Monocyteunits = s.Monocyteunits,
                   Eosinophil = s.Eosinophil,
                   Eosinophilunits = s.Eosinophilunits,
                   Basophil = s.Basophil,
                   Basophilunits = s.Basophilunits,
                   Hemoglobin = s.Hemoglobin,
                   Hemoglobinunits = s.Hemoglobinunits,
                   Hematocrit = s.Hematocrit,
                   Hematocritunits = s.Hematocritunits,
                   Rbc = s.Rbc,
                   Rbcunits = s.Rbcunits,
                   Mcv = s.Mcv,
                   Mcvunits = s.Mcvunits,
                   Mch = s.Mch,
                   Mchunits = s.Mchunits,
                   Mchc = s.Mchc,
                   Mchcunits = s.Mchcunits,
                   Rcdw = s.Rcdw,
                   Rcdwunits = s.Rcdwunits,
                   Plateletcount = s.Plateletcount,
                   Plateletcountunits = s.Plateletcountunits,
                   Mpv = s.Mpv,
                   Mpvunits = s.Mpvunits,
                   Datet = s.Datet,




                   Firstname = ss.Firstname,
                   Middlename = ss.Middlename,
                   Lastname = ss.Lastname,
                   Fullname = ss.Fullname,
                   Birthdate = ss.Birthdate,
                   Gmailaddress = ss.Gmailaddress,
                   AddressProvince = ss.AddressProvince,
                   AddressMunicipality = ss.AddressMunicipality,
                   AddressBarangay = ss.AddressBarangay,
                   AddressPurok = ss.AddressPurok,
                   Age = ss.Age,
                   Gender = ss.Gender,
                   Address = ss.Address,
                   EpiCode = ss.EpiCode,
                   
                  
                   CourseStrandYearId = c.CourseStrandYearId,
                   CourseStrandYearName = c.CourseStrandYearName,

                   DepartmentId = d.DepartmentId,
                   DepartmentName = d.DepartmentName
                   



                  
                }



            ).ToList();
            return Ok(result);
           
        }



       [HttpPost]
        public async Task<IActionResult> loginuser(string gmail, int pass){
            var user = await _context.Studentpersonalinformations.FirstOrDefaultAsync(b=>b.Gmailaddress ==gmail && b.SpiCode==pass);
            if(user != null){
                return Ok();
            }
            return new BadRequestObjectResult("Account not found");
        }

         [HttpPost]
        public async Task<IActionResult> loginEmployee(string gmail, int pass){
            var user = await _context.Employeepersonalinformations.FirstOrDefaultAsync(b=>b.Gmailaddress ==gmail && b.EpiCode==pass);
            if(user != null){
                return Ok();
            }
            return new BadRequestObjectResult("Account not found");
        }


        [HttpPost]
        public async Task<IActionResult> userloginAdmin(string gmail, string password){
            var user = await _context.Accounts.FirstOrDefaultAsync(b=>b.Gmail ==gmail && b.Password==password);
            if(user != null){
                return Ok();
            }
            return new BadRequestObjectResult("Account not found");
        }

         public IActionResult AddAppointSchedule(Appointment appoint)
        {
          _context.Appointments.Add(appoint);
            _context.SaveChanges();

            return Ok();
        }

        public ActionResult<List<Appointment>> getAppointmentList()
        {
            var res = _context.Appointments.ToList();

            return Ok(res);
        }
     


        
          public ActionResult<List<appointStudentViewModel>> getAppointmentStudent(){

             var result = (
                from s in _context.Studentpersonalinformations
                join a in _context.Appointments
                on s.SpiId equals a.PatientId // naka base siya table if int ba or sting kung int mag tostring ka
               
                
                join d in _context.Departments
                on s.DepartmentId equals d.DepartmentId // naka base siya table if int ba or sting kung int mag tostring ka
               
                join c in _context.Coursestrandyears
                on s.CourseStrandYearId equals c.CourseStrandYearId



                select new appointStudentViewModel
                {

                AppointmentId = a.AppointmentId,
                DateApp = a.DateApp,
                TimeApp = a.TimeApp,
                AppStatus = a.Status,

                SpiId  = s.SpiId,
                Firstname  = s.Firstname,
                Lastname = s.Lastname,
                Middlename = s.Middlename,
                Birthdate = s.Birthdate,
                Gmailaddress = s.Gmailaddress,
                AddressProvince = s.AddressProvince,
                Age = s.Age,
                SpiCode = s.SpiCode,
                Gender = s.Gender,
                AddressMunicipality = s.AddressMunicipality,
                AddressBarangay = s.AddressBarangay,
                AddressPurok = s.AddressPurok,
               
               
                Address = s.Address,
                Fullname = s.Fullname,
                Status = s.Status,

               
                CourseStrandYearId = c.CourseStrandYearId,
                CourseStrandYearName = c.CourseStrandYearName,

                DepartmentId = d.DepartmentId,
                DepartmentName = d.DepartmentName

                  
                }



            ).ToList();
             var pending = result.Where(x => x.AppStatus == "Pending").ToList();
        
        //  return Ok(result);
           return Ok(pending);
           
        }

         public IActionResult UpdateAppoint(Appointment appoint)
        {
            try
            {
             _context.Appointments.Update(appoint);
             _context.SaveChanges();

            }
            catch (System.Exception)
            {
                
                throw;
            }
        
            return Ok();
        }


        
     


 










        
       









      


    }
}