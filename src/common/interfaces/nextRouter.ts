import { ParsedUrlQuery } from 'querystring';

export interface INextRouterQuery extends ParsedUrlQuery {
  fromPath: string;
}
