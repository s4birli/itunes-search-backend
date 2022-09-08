import * as dotenv from 'dotenv';
import express from 'express';
import config from './config/default';
import routes from './routes';

dotenv.config();
const port = config.port;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  if (req.method == 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

app.listen(port, async () => {
  routes(app);
});
