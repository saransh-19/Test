const express = require('express');

function createApp() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.post('/echo', (req, res) => {
    res.json({ echo: req.body });
  });

  return app;
}

module.exports = createApp;
