import { http } from 'services/base';
import { IGetCustomerRequest } from './interfaces/request';
import { IGetCustomerResponse } from './interfaces/response';

export const getCustomerService = async ({ email }: IGetCustomerRequest): Promise<IGetCustomerResponse> => {
  const response = await http.get(`customer/${email}`);

  return response;
};

export type { IGetCustomerRequest, IGetCustomerResponse };
