using Microsoft.AspNetCore.Mvc;

namespace SEPHMS.Controllers
{
    [Route("[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }
     

        public ActionResult Navbar(){
            return View();
        }
    
          public ActionResult UserViewMedicine(){
            return View("PartialViewMedicine/ViewMedicineIndex");
        }

          public ActionResult UserStudentForm(){
            return View("PartialAppoint/studentformappointment");
        }
          public ActionResult  Appoint(){
            return View("PartialAppoint/Appoint");
        }
          public ActionResult Home(){
            return View("PartialAppoint/Home");
        }
          public ActionResult ViewMed(){
            return View("PartialAppoint/ViewMidecine");
        }

        
        
        
    }
}