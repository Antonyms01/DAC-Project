using Emart.Repository;
using Emart.Services;
using Emart.Services.IService;
using Emart.Services.IServiceImpl;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Win32;
using System.Net;
using System.Resources;
using System.Text;
using static System.Net.WebRequestMethods;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Emart
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                    options.JsonSerializerOptions.WriteIndented = true;
                });

            // CORS policy to allow all origins (remove if not needed)
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });

            // Database configuration
            builder.Services.AddDbContext<EmartDBContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            //AddDbContext<EmartDBContext>: Registers the EmartDBContext (your database context class) as a service.
            //UseSqlServer: Configures Entity Framework Core to use SQL Server as the database provider, using the connection
            //string defined in appsettings.json under "DefaultConnection"

            // Swagger configuration
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Service registrations
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<ISubCategoryService, SubCategoryService>();
            builder.Services.AddScoped<IProductService, ProductService>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IInvoiceService, InvoiceService>();

            //AddScoped: Registers each service and its corresponding implementation with scoped lifetime.
            //Scoped services are created once per client request. Each request will get a new instance of these services.

            // JWT Authentication
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
                };
            });

            // Authorization
            builder.Services.AddAuthorization();
       
            //AddAuthorization: Registers the authorization middleware, which will check the user's permissions

            // Build the app
            var app = builder.Build();

            //app = builder.Build(): Builds the application and returns the app object, which represents the fully
            //configured web application.

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseHttpsRedirection();
            //UseHttpsRedirection(): Forces all HTTP requests to be redirected to HTTPS.This is important for security purposes,
            //ensuring that data is encrypted over the network.

            // Correct Middleware Order
            app.UseRouting();            // 1. Routing middleware first
            // Adds routing middleware to the request pipeline, enabling the app to determine which controller or
            // endpoint should handle an incoming request.

            app.UseAuthentication();     // 2. Then authentication
            //Adds the authentication middleware, ensuring that users are authenticated before they can access
            //protected resources.

            app.UseAuthorization();      // 3. Then authorization
            //Ensures that users are authorized to access resources after they've been authenticated.

            app.UseCors("AllowAllOrigins");  // Applying CORS Policy

            app.MapControllers();

            app.Run();
            //Starts the web application and begins listening for incoming HTTP requests.
        }
    }
}
