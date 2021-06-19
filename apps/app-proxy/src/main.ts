/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { time, date } from '@nx-mono-repo/time';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to app-proxy!' });
});

app.get('/time', (req, res) => {
  const currentTime = new Date();
  res.send({ time: time(currentTime), date: date(currentTime) });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
