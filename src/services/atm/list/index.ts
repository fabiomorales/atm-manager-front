import { http } from 'services/base';
import { IAtmListResponse } from './interfaces/response';

export const atmListService = async (): Promise<IAtmListResponse> => {
  const response = await http.get('atm');

  return response;
};

export type { IAtmListResponse };
