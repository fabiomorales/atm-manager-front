import { AxiosResponse } from 'axios';

export interface IListMovement {
  id: string;
  type_movement: string;
  description: string;
  value: number;
  customer_id: string;
  atm_id: string;
  created_at: Date;
}

export interface IListMovementResponse extends AxiosResponse<Array<IListMovement>> {}
