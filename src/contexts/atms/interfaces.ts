import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IAtm {
  id: string;
  identification: string;
  note10: number;
  note20: number;
  note50: number;
  note100: number;
  totalBill: number;
}

export interface IAtmListProviderProps {
  children?: ReactNode;
}

export interface IAtmListContextProps {
  setAtmList: Dispatch<SetStateAction<Array<IAtm>>>;
  atmList: Array<IAtm> | null;
  atmSelected: IAtm;
  setAtmSelected: Dispatch<SetStateAction<IAtm>>;
  listAtm: () => Promise<void>;
}
