const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Azure App Service Node.js</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: Arial, sans-serif;
        color: #17202a;
        background: #f4f7fb;
      }

      main {
        width: min(680px, calc(100% - 32px));
        padding: 32px;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 12px 32px rgba(23, 32, 42, 0.12);
      }

      h1 {
        margin: 0 0 12px;
        font-size: 32px;
      }

      p {
        margin: 0;
        font-size: 18px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello from Node.js on Azure App Service</h1>
      <p>This basic Express web app is ready to run on Azure App Service for Linux.</p>
    </main>
  </body>
</html>`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
