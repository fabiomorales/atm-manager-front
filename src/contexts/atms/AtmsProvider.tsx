import { parseCookies, setCookie } from 'nookies';
import { FC, useContext, useEffect, useState } from 'react';
import { atmListService } from 'services/atm/list';
import { cookies } from 'utils/constants/cookies';

import { AtmListContext } from './AtmsContext';
import { IAtm, IAtmListProviderProps } from './interfaces';

export const AtmListProvider: FC<IAtmListProviderProps> = ({ children }) => {
  const [atmList, setAtmList] = useState<Array<IAtm>>([] as Array<IAtm>);
  const [atmSelected, setAtmSelected] = useState<IAtm>({} as IAtm);

  const listAtm = async () => {
    await atmListService()
      .then((response) => {
        if (response?.status === 200 && response.data.length) {
          setAtmList(
            response.data.map((atm) => ({
              id: atm.id,
              identification: atm.identification,
              totalBill: atm.total_bill,
              note10: atm.qtd_ten_bill,
              note20: atm.qtd_twenty_bill,
              note50: atm.qtd_fifty_bill,
              note100: atm.qtd_hundred_bill,
            }))
          );

          setCookie(undefined, cookies.atmList, JSON.stringify(response.data), {
            path: '/',
          });
        }

        if (response?.status === 200 && Object.keys(response?.data).length) {
        }
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const { atm_list, atm_auth_customer } = parseCookies(undefined, {
      path: '/',
    });

    if (!atm_list && atm_auth_customer) {
      listAtm();
    }
  }, []);

  return (
    <AtmListContext.Provider
      value={{
        atmList,
        setAtmList,
        listAtm,
        atmSelected,
        setAtmSelected,
      }}
    >
      {children}
    </AtmListContext.Provider>
  );
};

export const useAtmListProvider = () => useContext(AtmListContext);
