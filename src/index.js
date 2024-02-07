// index.js
const express = require('express');
const middleware = require('./api/middleware');
const routes = require('./api/routes');
const config = require('../config/config');

const app = express();

// Middleware
middleware(app);

// Routes
app.use('/api', routes);

// Set message in app
app.set('message', config.message);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
