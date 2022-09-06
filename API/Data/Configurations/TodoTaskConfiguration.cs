using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.Data.Configurations
{
    public class TodoTaskConfiguration : IEntityTypeConfiguration<TodoTask>
    {
        public void Configure(EntityTypeBuilder<TodoTask> builder)
        {
            builder.HasData(
                new TodoTask
                {
                    Id = 1,
                    Name = "Task1",
                    Description = "Go to univer"
                },
                new TodoTask
                {
                    Id = 2,
                    Name = "Task2",
                    Description = "Make the dinner"
                },
                new TodoTask
                {
                    Id = 3,
                    Name = "Task3",
                    Description = "Play with kid"
                },
                new TodoTask
                {
                    Id = 4,
                    Name = "Task4",
                    Description = "Take a shower"
                },
                new TodoTask
                {
                    Id = 5,
                    Name = "Task5",
                    Description = "Write code"
                }
            );
        }
    }
}