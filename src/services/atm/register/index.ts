import { http } from 'services/base';
import { IAtmRegisterRequest } from './interfaces/request';

export const atmRegisterService = async (request: IAtmRegisterRequest) => {
  const response = await http.post('atm', request);

  return response;
};

export type { IAtmRegisterRequest };
