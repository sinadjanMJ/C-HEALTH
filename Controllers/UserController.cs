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
    

          public ActionResult UserStudentForm(){
            return View("studentformappointment");
        }
          public ActionResult  Appoint(){
            return View("PartialAppoint/Appoint");
        }
          public ActionResult Home(){
            return View("PartialHome/Home");
        }
          public ActionResult ViewMed(){
            return View("PartialViewMedicine/ViewMidecine");
        }

         public ActionResult  StudentHealthProfile(){
            return View("PartialViewHealthProfileAndSchedule/StudentHealthProfile");
        }
         public ActionResult  userLogin(){
            return View("PartialLogin/userLogin");
        }

         public ActionResult  practlogin(){
            return View("PartialLogin/practLogin");
        }

        public ActionResult  userProfile(){
            return View("PartialProfile/userprofile");
        }

          public ActionResult practice(){
            return View();
        }

        
        
        
    }
}