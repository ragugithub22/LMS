import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import { dashboardData } from './data/dashboardData.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'lms-backend' });
  });

  app.get('/api/dashboard', (_req, res) => {
    res.json(dashboardData);
  });

  app.get('/api/courses', (_req, res) => {
    res.json(dashboardData.course);
  });

  return app;
}

function startServer(port = Number(process.env.PORT) || 3000) {
  const app = createApp();

  const server = app.listen(port, () => {
    console.log(`LMS API running on http://localhost:${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Port ${port} is busy; retrying on ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    throw error;
  });
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  startServer();
}
