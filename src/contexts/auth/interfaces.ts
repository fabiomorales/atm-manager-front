import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IGetCustomerRequest } from 'services/customer/getCustomer';

export interface ILoggedCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  balance: string;
}

export interface IAuthProviderProps {
  children?: ReactNode;
}

export interface IAuthContextProps {
  setloggedCustomer: Dispatch<SetStateAction<ILoggedCustomer>>;
  loggedCustomer: ILoggedCustomer | null;
  login: (request: IGetCustomerRequest) => Promise<void>;
  reloadInfoCustomer: (request: IGetCustomerRequest) => Promise<void>;
  logout: () => void;
}
