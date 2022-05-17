using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using Service.DependencyInjection;
using WebApi.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

RegisterRepository.RepositoryInjection(builder.Services, builder.Configuration);
RegisterService.ServiceInjection(builder.Services, builder.Configuration);
builder.Services.AddScoped<PostgresContext>();

builder.Services.AddEntityFrameworkNpgsql()
             .AddDbContext<PostgresContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("SystemGeneratorDb"), x => x.MigrationsAssembly("Infrastructure")));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("Cors",
        builder =>
        {
            builder.AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
        });
});

var app = builder.Build();

app.UseCors("Cors");
// migrate any database changes on startup (includes initial db creation)
using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<PostgresContext>();
    dataContext.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseMiddleware<GlobalErrorHandlerMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
