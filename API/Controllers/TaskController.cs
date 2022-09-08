using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController: ControllerBase
    {
        private readonly TodoProjectDbContext _context;
        public TaskController(TodoProjectDbContext context)
        {
            _context = context;
            
        }


        [HttpGet]
        public async Task<ActionResult<List<TodoTask>>> GetAllTasks()
        {
            return await _context.Tasks.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<TodoTask>> GetTask(int id)
        {
            return await _context.Tasks.FindAsync(id);
        }


        [HttpPost("createTask")]
        public async Task<ActionResult<TodoTask>> AddTask(TodoTask task)
        {
            await _context.Tasks.AddAsync(task);
            await _context.SaveChangesAsync();
            return Ok(task);
        }

        [HttpPut("updateTask")]
        public async Task<ActionResult<TodoTask>> UpdateTask(TodoTask task)
        {
            var updatedTask = await _context.Tasks.FindAsync(task.Id);
            if(updatedTask == null)
            {
                return BadRequest();
            }

            updatedTask.Name = task.Name;
            updatedTask.Description = task.Description;
            
            await _context.SaveChangesAsync();

            return updatedTask;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) {
                return BadRequest();
            }
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}