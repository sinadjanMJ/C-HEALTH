
using Microsoft.AspNetCore.Mvc;
using SEPHMS.Entities;

namespace SEPHMS.Controllers
{
    [Route("/api/[controller]/[action]")]
    public class NewAPIController : ControllerBase
    {
        
        private readonly clinicContext _context;

        public NewAPIController(clinicContext context)
        {
            _context = context;
        }

        public IActionResult adminInfo(Signup s)
        {
           
            _context.Signups.Add(s);
            _context.SaveChanges();
            return Ok();
        }
         public ActionResult<List<Signup>> getAllsignup(){
            return _context.Signups.ToList();
        }
         
    }
}