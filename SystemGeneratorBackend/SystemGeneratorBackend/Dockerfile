#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
EXPOSE 5533
EXPOSE 5534

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SystemGeneratorBackend/SystemGeneratorBackend.csproj", "SystemGeneratorBackend/"]
COPY ["Application/Application.csproj", "Application/"]
COPY ["Infrastructure/Infrastructure.csproj", "Infrastructure/"]
COPY ["Domain/Domain.csproj", "Domain/"]
RUN dotnet restore "SystemGeneratorBackend/SystemGeneratorBackend.csproj"
COPY . .
WORKDIR "/src/SystemGeneratorBackend"
RUN dotnet build "SystemGeneratorBackend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SystemGeneratorBackend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SystemGeneratorBackend.dll"]
