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
            return View("PartialUser/ViewMedicineIndex");
        }

          public ActionResult UserStudentForm(){
            return View("PartialUser/studentformappointment");
        }
          public ActionResult  Appoint(){
            return View("PartialUser/Appoint");
        }
          public ActionResult Home(){
            return View("PartialUser/Home");
        }
          public ActionResult ViewMed(){
            return View("PartialUser/PartialViewMedicine/ViewMidecine");
        }

         public ActionResult  StudentHealthProfile(){
            return View("PartialUser/PartialViewHealthProfileAndSchedule/StudentHealthProfile");
        }

          public ActionResult practice(){
            return View();
        }

        
        
        
    }
}