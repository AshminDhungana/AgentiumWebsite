# Agentium

Agentium is a modern, responsive landing page for an AI automation platform, built with React, Vite, and Tailwind CSS.

## Deploy to Vercel

This project is fully configured to be deployed on Vercel out-of-the-box. The repository includes a `vercel.json` file which handles proper routing for single-page applications.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAshminDhungana%2FAgentium)

### Manual Deployment

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import your repository into your Vercel dashboard.
3. Vercel will automatically detect the **Vite** framework.
4. Click **Deploy**.

## Local Development (Frontend Only)

To run this frontend project locally without Docker:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## 🏛️ Agentium Self-Hosting Guide

> Quick setup guide for running the full Agentium platform in different environments.

### 📦 What's Included

Agentium runs fully on Docker and ships with **11 containers** out of the box:

**Core Services (7 containers)**

| Container         | Role                       |
| ----------------- | -------------------------- |
| Postgres          | Primary database           |
| ChromaDB          | Vector store               |
| Redis             | Cache & message broker     |
| Backend (FastAPI) | REST API                   |
| Celery Worker     | Background task processing |
| Celery Beat       | Scheduled tasks            |
| Frontend          | Web UI                     |

**CI/CD Services (4 containers)**

| Container             | Role              |
| --------------------- | ----------------- |
| GitHub Runner         | Runs CI pipelines |
| BuildKit              | Image builder     |
| Registry Cache        | Local image cache |
| Deployment Controller | Manages deploys   |

### 🚀 Choose Your Deployment Type

| Use Case                    | Recommended Setup          |
| --------------------------- | -------------------------- |
| Local development           | Docker Compose             |
| Small production (1 server) | Single VM + Docker Compose |
| Scalable production         | Kubernetes / Docker Swarm  |
| Automated deployment        | Enable CI/CD stack         |

### 1️⃣ Local Development (Full Stack)

**Requirements**

- Docker 20+
- Docker Compose v2+
- 8 GB RAM minimum

**Setup**

```bash
git clone https://github.com/AshminDhungana/Agentium.git
cd Agentium
docker compose up -d
```

**Access your services**

| Service  | URL                        |
| -------- | -------------------------- |
| Frontend | http://localhost:3000      |
| Backend  | http://localhost:8000      |
| API Docs | http://localhost:8000/docs |

**Stop**

```bash
docker compose down
```

### 2️⃣ Single Server (Production VM)

**Recommended specs**

- 4 vCPU
- 16 GB RAM
- 80 GB SSD

**Setup**

```bash
curl -fsSL https://get.docker.com | sh
git clone https://github.com/AshminDhungana/Agentium.git
cd Agentium
# Configure strong secrets before continuing
cp .env.example .env
docker compose up -d
```

**Recommended additions**

- Nginx reverse proxy
- HTTPS via Let's Encrypt
- Daily Postgres backups
- Firewall enabled

### 3️⃣ Scalable Deployment (Microservices)

**Recommended platforms:** Kubernetes · Docker Swarm

**Scaling rules**

| Service       | Scalable?                       |
| ------------- | ------------------------------- |
| Backend       | ✅ Yes                          |
| Celery Worker | ✅ Yes                          |
| Frontend      | ✅ Yes                          |
| Postgres      | ⚠️ Single (or use a managed DB) |
| Redis         | ⚠️ Single / Sentinel            |
| ChromaDB      | ⚠️ Single (stateful)            |
| Celery Beat   | ⚠️ Single                       |

**Deploy**

```bash
# Kubernetes
kubectl apply -f k8s/
```

Helm charts and `/k8s` manifests are provided in the repository.

### 4️⃣ CI/CD Deployment

The CI/CD stack handles the full pipeline automatically:

```
Git Push → Build → Test → Push to GHCR → Deploy
```

**Images built and published to GHCR**

| Image                    | Built From                        |
| ------------------------ | --------------------------------- |
| `agentium/backend`       | `./backend/Dockerfile.privileged` |
| `agentium/frontend`      | `./frontend/Dockerfile`           |
| `agentium/celery-worker` | `./backend/Dockerfile.privileged` |
| `agentium/celery-beat`   | `./backend/Dockerfile.privileged` |

All 4 images are built for both `linux/amd64` and `linux/arm64` using native runners and merged into a single multi-platform manifest.

**Start the CI/CD stack**

```bash
docker compose -f docker-compose.cicd.yml up -d
```

### 🔐 Production Best Practices

| #   | Practice                                   |
| --- | ------------------------------------------ |
| 1   | Never commit `.env` to version control     |
| 2   | Use strong, randomly generated secrets     |
| 3   | Always enable HTTPS                        |
| 4   | Set up daily Postgres backups              |
| 5   | Avoid using the `latest` tag in production |

### 📌 Quick Command Reference

```bash
# Local development
docker compose up -d

# Kubernetes
kubectl apply -f k8s/
```

---

*Licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)*