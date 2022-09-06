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

        // [HttpPut("updatetask")]
        // public async Task<ActionResult<TodoTask>> UpdateTask()
        // {
            
        // }
    }
}