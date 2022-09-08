import {object, string, number, array, TypeOf} from 'zod';

export const getSearchSchema = object({
  query: object({
    term: string({required_error: 'Search Term is required'}),
    //media: string({ required_error: 'Media type is required' }),
    limit: string({required_error: 'Limit Image is required'}),
    //offset: string({ required_error: "Offset is required" }),
    entity: string({required_error: 'Entity type is required'}),
  }),
});

export type GetSearchInput = TypeOf<typeof getSearchSchema>;
