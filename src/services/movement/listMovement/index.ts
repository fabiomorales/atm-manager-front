import { http } from 'services/base';
import { IListMovementRequest } from './interfaces/request';
import { IListMovementResponse } from './interfaces/response';

export const listMovementService = async ({ customerId }: IListMovementRequest): Promise<IListMovementResponse> => {
  const response = await http.get(`movement/${customerId}`);

  return response;
};

export type { IListMovementRequest };
