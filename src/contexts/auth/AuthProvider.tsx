import { useModalProvider } from 'contexts/modal/ModalProvider';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { FC, useContext, useEffect, useState } from 'react';
import { getCustomerService, IGetCustomerRequest } from 'services/customer/getCustomer';
import { cookies } from 'utils/constants/cookies';
import { routerPaths } from 'utils/constants/routes';
import { removeCookies } from 'utils/removeCookies';

import { AuthContext } from './AuthContext';
import { IAuthProviderProps, ILoggedCustomer } from './interfaces';

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const { setModal } = useModalProvider();

  const [loggedCustomer, setloggedCustomer] = useState<ILoggedCustomer>({} as ILoggedCustomer);

  const login = async (request: IGetCustomerRequest) => {
    await getCustomerService(request)
      .then((response) => {
        if (response?.status === 200 && Object.keys(response?.data).length) {
          setCookie(undefined, cookies.authCustomer, response.data.email, {
            path: '/',
          });

          const { id, balance, cpf, email, fisrt_name, last_name } = response.data;

          setloggedCustomer({ id, firstName: fisrt_name, lastName: last_name, balance, cpf, email });

          router.push(routerPaths.home.default);
        }
      })
      .catch((error) => {
        console.log('error', error);
        setModal({
          show: true,
          title: 'Erro',
          paragraph: JSON.stringify(error?.response?.data?.message),
        });
      });
  };

  const logout = () => {
    removeCookies([cookies.authCustomer, cookies.atmList]);
    setloggedCustomer({} as ILoggedCustomer);
    router.push(routerPaths.login.default);
  };

  const reloadInfoCustomer = async (request: IGetCustomerRequest) => {
    await login(request);
  };

  useEffect(() => {
    const { atm_auth_customer } = parseCookies(undefined, {
      path: '/',
    });

    if (!atm_auth_customer) {
      router.push(routerPaths.login.default);
    }

    if (atm_auth_customer) {
      login({ email: atm_auth_customer });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedCustomer,
        setloggedCustomer,
        login,
        logout,
        reloadInfoCustomer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
