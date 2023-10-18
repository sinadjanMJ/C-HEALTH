using Microsoft.AspNetCore.Mvc;

namespace SEPHMS.Controllers
{
    [Route("[controller]/[action]")]
    public class AdminController : Controller
    {
        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }


         public ActionResult AdminAccountIndex(){
            return View("PartialAdminAccount/AdminAccountIndex");
        }


        public ActionResult AdminCategory(){
            return View("PartialCategory/CategoryIndex");
        }

        public ActionResult AdminEquipment(){
            return View("PartialEquipment/EquipmentIndex");
        }
        
         public ActionResult AdminMedicine(){
            return View("PartialMedicine/MedicineIndex");
        }
         public ActionResult AdminExpiredMedicine(){
            return View("PartialExpiredMedicine/MedicineIndex");
        }
         public ActionResult AdminLowStockMedicine(){
            return View("PartialLowStockMedicine/MedicineIndex");
        }

        
        public ActionResult AdminDoctor(){
            return View("PartialDoctor/DoctorIndex");
        }
        public ActionResult AdminNurse(){
            return View("PartialNurse/NurseIndex");
        }
         public ActionResult AdminStudent(){
            return View("PartialStudent/StudentIndex");
        }
          public ActionResult AdminEmployee(){
            return View("PartialEmployee/EmployeeIndex");
        }
       
          public ActionResult AdminAvailabilty(){
            return View("PartialAvailable/PartialDate/AvailableDateTime");
        }
        
        
        
    }
}