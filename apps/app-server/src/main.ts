/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to app-server!' });
});

const port = process.env.port || 1337;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
