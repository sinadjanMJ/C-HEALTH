
using Microsoft.AspNetCore.Mvc;
using SEPHMS.ViewModel;
using SEPHMS.Entities;

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
        
        public ActionResult<List<Adminaccount>> getAdminAccount(){
            return _context.Adminaccounts.ToList();
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
                     Avatime = t.Avatime      
    
                }



            ).ToList();
            return Ok(result);

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
                    Description = m.Description
                }



            ).ToList();
            return Ok(result);
        }






        public ActionResult<List<Employeepersonalinformation>> getEmployee(){
            return _context.Employeepersonalinformations.ToList();
        }

        public IActionResult addEmployee(Employeepersonalinformation addEmployee ,int randompass ,int age)
        {
             addEmployee.Age = age;
             addEmployee.EpiCode = randompass;


            _context.Employeepersonalinformations.Add(addEmployee);
            _context.SaveChanges();

            return Ok();
        }

             public IActionResult updateEmployee(Employeepersonalinformation upemp, int age)
        {
            try
            {
                
            upemp.Age = age;


            _context.Employeepersonalinformations.Update(upemp);
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







        public ActionResult<List<Studentpersonalinformation>> getStudent(){
            return _context.Studentpersonalinformations.ToList();
        }

        public IActionResult AddStudent(Studentpersonalinformation addStudent ,int randompass ,int age)
        {
             addStudent.Age = age;
             addStudent.SpiCode = randompass;


            _context.Studentpersonalinformations.Add(addStudent);
            _context.SaveChanges();

            return Ok();
        }

             public IActionResult updateStudent(Studentpersonalinformation upst, int age)
        {
            try
            {
                
            upst.Age = age;


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








        
        public IActionResult AddMedicine(Medicine addmedic)
        {
              if(string.IsNullOrEmpty(addmedic.Status) || addmedic.Status == "false")
            {
              addmedic.Status = "Inactive";
             
            }
            _context.Medicines.Add(addmedic);
            _context.SaveChanges();

            return Ok();
        }

        public IActionResult updateMedicine(Medicine upmedic)
        {
            try
            {
             if(string.IsNullOrEmpty(upmedic.Status) || upmedic.Status == "false")
            {
                 upmedic.Status = "Inactive";
            }
            else
            {
                 upmedic.Status = "Active";
            }
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









      


    }
}