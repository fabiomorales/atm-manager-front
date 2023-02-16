import { AxiosResponse } from 'axios';

export interface ICustomerResponse {
  id: string;
  fisrt_name: string;
  last_name: string;
  cpf: string;
  email: string;
  balance: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface IGetCustomerResponse extends AxiosResponse<ICustomerResponse> {}
