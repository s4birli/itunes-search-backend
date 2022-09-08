import {Express, Request, Response} from 'express';
import {search} from './controller/search.controller';
import validateResource from './middleware/validateResource';
import {getSearchSchema} from './schema/search.schema';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });
  app.get('/api/search', validateResource(getSearchSchema), search);
}

export default routes;
