﻿// <auto-generated />
using System;
using Emart.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Emart.Migrations
{
    [DbContext(typeof(EmartDBContext))]
    [Migration("20240819103511_final")]
    partial class final
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Emart.Models.Category", b =>
                {
                    b.Property<int>("categoryid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("categoryid"));

                    b.Property<string>("categoryname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("imagepath")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("categoryid");

                    b.ToTable("categories");
                });

            modelBuilder.Entity("Emart.Models.Invoice", b =>
                {
                    b.Property<int>("invoiceid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("invoiceid"));

                    b.Property<DateTime>("date")
                        .HasColumnType("datetime2");

                    b.Property<double>("tax")
                        .HasColumnType("float");

                    b.Property<decimal?>("totalamount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("userid")
                        .HasColumnType("int");

                    b.HasKey("invoiceid");

                    b.HasIndex("userid");

                    b.ToTable("invoices");
                });

            modelBuilder.Entity("Emart.Models.Product", b =>
                {
                    b.Property<int>("productid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("productid"));

                    b.Property<string>("brandname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("imagepath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("isdiscounted")
                        .HasColumnType("int");

                    b.Property<int?>("ispromoted")
                        .HasColumnType("int");

                    b.Property<string>("longdesc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("productname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("productprice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("rating")
                        .HasColumnType("int");

                    b.Property<string>("shortdesc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("stockquantity")
                        .HasColumnType("int");

                    b.Property<int>("subcategoryid")
                        .HasColumnType("int");

                    b.HasKey("productid");

                    b.HasIndex("subcategoryid");

                    b.ToTable("products");
                });

            modelBuilder.Entity("Emart.Models.SubCategory", b =>
                {
                    b.Property<int>("subcategoryid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("subcategoryid"));

                    b.Property<int>("categoryid")
                        .HasColumnType("int");

                    b.Property<string>("imagepath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("subcategoryname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("subcategoryid");

                    b.HasIndex("categoryid");

                    b.ToTable("subcategories");
                });

            modelBuilder.Entity("Emart.Models.User", b =>
                {
                    b.Property<int>("userid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("userid"));

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("epoints")
                        .HasColumnType("int");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("usertype")
                        .HasColumnType("int");

                    b.HasKey("userid");

                    b.ToTable("users");
                });

            modelBuilder.Entity("Emart.Models.Invoice", b =>
                {
                    b.HasOne("Emart.Models.User", "user")
                        .WithMany("invoices")
                        .HasForeignKey("userid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("user");
                });

            modelBuilder.Entity("Emart.Models.Product", b =>
                {
                    b.HasOne("Emart.Models.SubCategory", "subcategory")
                        .WithMany("products")
                        .HasForeignKey("subcategoryid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("subcategory");
                });

            modelBuilder.Entity("Emart.Models.SubCategory", b =>
                {
                    b.HasOne("Emart.Models.Category", "category")
                        .WithMany("subcategories")
                        .HasForeignKey("categoryid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("category");
                });

            modelBuilder.Entity("Emart.Models.Category", b =>
                {
                    b.Navigation("subcategories");
                });

            modelBuilder.Entity("Emart.Models.SubCategory", b =>
                {
                    b.Navigation("products");
                });

            modelBuilder.Entity("Emart.Models.User", b =>
                {
                    b.Navigation("invoices");
                });
#pragma warning restore 612, 618
        }
    }
}
