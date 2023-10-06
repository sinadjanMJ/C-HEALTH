using Microsoft.AspNetCore.Mvc;
using SEPHMS.Entities;

namespace SEPHMS.Controllers
{
    public class PageController : Controller
    {
       
        public ActionResult Signup(){
            return View();
        }


        public ActionResult Signin(){
            return View();
        }


        public ActionResult SIGN(){
            return View();
        }

         public ActionResult SUP(){
            return View();
        }

    }
}