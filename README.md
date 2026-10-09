# Simple Frontend + Backend DevOps Demo

A small project for demonstrating Docker, Docker Compose, service networking, and Nginx reverse proxy.

## Project structure

```text
simple-frontend-backend-devops-demo/
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── index.html
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── nginx/
│   └── default.conf
├── docker-compose.yml
└── .dockerignore
```

## Requirements

- Docker Engine
- Docker Compose plugin (`docker compose`)

## Run the demo

From this project directory:

```bash
docker compose up --build -d
docker compose ps
```

Open the app at:

- Frontend: http://localhost:8080
- Backend health check through Nginx: http://localhost:8080/api/health
- Backend info through Nginx: http://localhost:8080/api

The frontend calls `/api/message`. Nginx forwards `/api/` requests to the backend service on Docker's internal network.

## Useful demo commands

```bash
# Build images and start containers
docker compose up --build -d

# List running containers
docker compose ps

# View logs
docker compose logs -f

# View only backend logs
docker compose logs -f backend

# Open a shell inside the backend container
docker compose exec backend sh

# Stop and remove containers and network
docker compose down

# Rebuild after changing code
docker compose up --build -d
```

## Explain these concepts

- **Dockerfile:** instructions for building one service's image.
- **Image:** packaged template used to create containers.
- **Container:** running instance of an image.
- **Docker Compose:** defines and starts multiple services together.
- **Service name (`backend`):** Compose provides internal DNS, so Nginx can reach the backend at `http://backend:3000`.
- **Nginx:** serves the frontend and reverse-proxies `/api/` requests to the backend.

This is a local learning demo, not a production-hardened deployment.
