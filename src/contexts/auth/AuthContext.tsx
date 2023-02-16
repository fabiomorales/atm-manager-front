import { createContext } from 'react';

import { IAuthContextProps } from './interfaces';

export const AuthContext = createContext({} as IAuthContextProps);
