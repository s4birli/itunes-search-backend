import {Request, Response} from 'express';
import {GetSearchInput} from '../schema/search.schema';
import {getSearchResult} from '../service/search.service';
import logger from '../utils/logger';

export async function search(req: Request<{}, {}, GetSearchInput['query']>, res: Response) {
  try {
    logger.info(req.query);
    const {term, limit, offset, entity} = req.query;
    const result = await getSearchResult({
      term: term as string,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string),
      entity: (entity as string).split(','),
    });
    return res.send(result);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
