﻿// <auto-generated />
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(TodoProjectDbContext))]
    [Migration("20220906043811_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("API.Models.TodoTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Tasks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Go to univer",
                            Name = "Task1"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Make the dinner",
                            Name = "Task2"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Play with kid",
                            Name = "Task3"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Take a shower",
                            Name = "Task4"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Write code",
                            Name = "Task5"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
