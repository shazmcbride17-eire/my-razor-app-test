# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
# Render will route traffic to the port you EXPOSE here:
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Copy project file first (caching)
COPY NewSite2/*.csproj NewSite2/
RUN dotnet restore NewSite2/NewSite2.csproj
# Copy the rest and publish
COPY . .
RUN dotnet publish NewSite2/NewSite2.csproj -c Release -o /out

# Final image
FROM base AS final
WORKDIR /app
COPY --from=build /out .
ENTRYPOINT ["dotnet", "NewSite2.dll"]
