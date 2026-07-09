# Azure App Service Node.js Web App

Basic Express web app that can run on Azure App Service on Linux.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:8080`.

## Azure App Service

Use these settings when deploying to Azure App Service on Linux:

- Runtime stack: Node.js 18 LTS or newer
- Startup command: `npm start`
- Health endpoint: `/health`

The app listens on `process.env.PORT`, which Azure provides automatically.
