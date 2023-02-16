import { AxiosResponse } from 'axios';

export interface IAtmList {
  id: string;
  identification: string;
  qtd_ten_bill: number;
  qtd_twenty_bill: number;
  qtd_fifty_bill: number;
  qtd_hundred_bill: number;
  total_bill: number;
}

export interface IAtmListResponse extends AxiosResponse<Array<IAtmList>> {}
