using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Emart.Migrations
{
    /// <inheritdoc />
    public partial class final : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    categoryid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    categoryname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    imagepath = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categories", x => x.categoryid);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    userid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    usertype = table.Column<int>(type: "int", nullable: true),
                    epoints = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.userid);
                });

            migrationBuilder.CreateTable(
                name: "subcategories",
                columns: table => new
                {
                    subcategoryid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    categoryid = table.Column<int>(type: "int", nullable: false),
                    subcategoryname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    imagepath = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subcategories", x => x.subcategoryid);
                    table.ForeignKey(
                        name: "FK_subcategories_categories_categoryid",
                        column: x => x.categoryid,
                        principalTable: "categories",
                        principalColumn: "categoryid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "invoices",
                columns: table => new
                {
                    invoiceid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userid = table.Column<int>(type: "int", nullable: false),
                    totalamount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    tax = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_invoices", x => x.invoiceid);
                    table.ForeignKey(
                        name: "FK_invoices_users_userid",
                        column: x => x.userid,
                        principalTable: "users",
                        principalColumn: "userid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    productid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    brandname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    productprice = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    rating = table.Column<int>(type: "int", nullable: true),
                    subcategoryid = table.Column<int>(type: "int", nullable: false),
                    stockquantity = table.Column<int>(type: "int", nullable: true),
                    isdiscounted = table.Column<int>(type: "int", nullable: true),
                    longdesc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    shortdesc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ispromoted = table.Column<int>(type: "int", nullable: true),
                    imagepath = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_products", x => x.productid);
                    table.ForeignKey(
                        name: "FK_products_subcategories_subcategoryid",
                        column: x => x.subcategoryid,
                        principalTable: "subcategories",
                        principalColumn: "subcategoryid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_invoices_userid",
                table: "invoices",
                column: "userid");

            migrationBuilder.CreateIndex(
                name: "IX_products_subcategoryid",
                table: "products",
                column: "subcategoryid");

            migrationBuilder.CreateIndex(
                name: "IX_subcategories_categoryid",
                table: "subcategories",
                column: "categoryid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "invoices");

            migrationBuilder.DropTable(
                name: "products");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "subcategories");

            migrationBuilder.DropTable(
                name: "categories");
        }
    }
}
