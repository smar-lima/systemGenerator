using Application.Services.Interfaces;
using Domain.Entities;
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
        public async Task<IActionResult> Index([FromBody] PostPutProjectModel model)
        {
            var result = await _projectService.Post(model);
            return CreatedAtAction(nameof(Get), new { id = result.Id }, result);
        }


        [HttpPost("filter")]
        //[Authorize]
        public async Task<IActionResult> GetAll()
        {
            var result = await _projectService.GetAll();
            return Ok(result);
        }


        [HttpGet("{id}")]
        //[Authorize]
        public async Task<IActionResult> Get([FromRoute] long id)
        {
            var result = await _projectService.Get(id);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] long id, [FromBody] PostPutProjectModel model)
        {
            var result = await _projectService.Put(id, model);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] long id)
        {
            await _projectService.Delete(id);
            return NoContent();
        }
    }
}
