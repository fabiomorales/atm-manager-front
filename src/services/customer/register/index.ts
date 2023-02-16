import { http } from 'services/base';
import { ICustomerRegisterRequest } from './interfaces/request';

export const customerRegisterService = async (request: ICustomerRegisterRequest) => {
  const response = await http.post('customer', request);

  return response;
};

export type { ICustomerRegisterRequest };
