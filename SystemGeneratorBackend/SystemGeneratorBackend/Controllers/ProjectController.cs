using Application.Services.Interfaces;
using Domain.Models.Project;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SystemGeneratorBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ProjectController : ControllerBase
    {
        private IProjectService _projectService;
        public ProjectController(IProjectService userService)
        {
            _projectService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody] PostProjectModel model)
        {
            var result = await _projectService.Post(model);
            return Ok(result);
        }


        [HttpGet("{id}")]
        //[Authorize]
        public async Task<IActionResult> Get([FromRoute] long id)
        {
            var result = await _projectService.Get(id);
            return Ok(result);
        }
    }
}
