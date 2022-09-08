import axios from 'axios';
import {omit} from 'lodash';
import config from '../config/default';
import {SearchInput} from '../models/search.model';
import logger from '../utils/logger';

export async function getSearchResult(param: SearchInput) {
  try {
    //const url = `${config.base_url}?term=${param.term}&media=${param.media}&limit=${param.limit}&offset=${param.offset}&sort=recent`;
    const url = `${config.base_url}?term=${param.term}&entity=${param.entity.join(',')}&limit=${param.limit}&offset=${param.offset || 0}&sort=recent`;
    const result = (await axios.get(url)).data;
    return omit(result);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error(error);
  }
}
