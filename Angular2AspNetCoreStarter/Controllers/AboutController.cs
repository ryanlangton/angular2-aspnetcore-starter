using Microsoft.AspNet.Mvc;
using Angular2Asp5Starter.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2Asp5Starter.Controllers
{
    [Route("api/[controller]")]
    public class AboutController : Controller
    {
        [HttpGet]
        public About Get()
        {
            return new About()
            {
                Title = "The About Page",
                Message = "This message is being populated by an Asp.net controller (see AboutController)"
            };
        }
    }
}
