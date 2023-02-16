import { http } from 'services/base';
import { ICreateMovementRequest } from './interfaces/request';

export const createMovementService = async (request: ICreateMovementRequest) => {
  const response = await http.post('movement', request);

  return response;
};

export type { ICreateMovementRequest };
