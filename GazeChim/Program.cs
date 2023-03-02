using GazeChim.Api;
using GazeChim.Services.impl;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);
var config = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json")
        .Build();

builder.Services.AddCors(options =>
{
    options.AddPolicy("cors",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

//Clients
builder.Services.AddHttpClient();
builder.Services.AddHttpClient<AuthService>();
builder.Services.AddHttpContextAccessor();
//http
var httpClient = new HttpClient();

httpClient.DefaultRequestHeaders.Add(
    HeaderNames.Accept, "application/json");
//graphql
var graphQLHttpClientOptions = new GraphQLHttpClientOptions
{
    EndPoint = new Uri(config.GetValue<string>("GraphQlUri")),
};
builder.Services.AddScoped<GraphQLHttpClient>(_ =>
    new GraphQLHttpClient(graphQLHttpClientOptions, new NewtonsoftJsonSerializer(), httpClient));

//Services
builder.Services.AddScoped<BsffService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<AuthService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Controllers
builder.Services.AddControllers();
builder.Services.AddScoped<AuthController>();
builder.Services.AddScoped<BsffController>();
builder.Services.AddScoped<UserController>();


//App
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("cors");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
