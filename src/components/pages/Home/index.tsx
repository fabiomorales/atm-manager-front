import { Card, Grid, Typograph } from 'components/atoms';
import { AtmTemplate } from 'components/templates';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { FC, useEffect } from 'react';
import { routerPaths } from 'utils/constants/routes';
import { IMenu } from './interfaces';

const Home: FC = () => {
  const router = useRouter();
  const { loggedCustomer, reloadInfoCustomer } = useAuthProvider();

  const menu: Array<IMenu> = [
    {
      show: true,
      title: 'Saque',
      onClick: () => router.push(routerPaths.sack.default),
    },
    {
      show: true,
      title: 'Extrato',
      onClick: () => router.push(routerPaths.movement.default),
    },
    {
      show: true,
      title: 'Gerenciador do ATM',
      onClick: () => router.push(routerPaths.atmManager.default),
    },
  ];

  useEffect(() => {
    const { atm_auth_customer } = parseCookies(undefined, {
      path: '/',
    });

    if (!atm_auth_customer) {
      router.push(routerPaths.login.default);
    }

    if (atm_auth_customer) {
      reloadInfoCustomer({ email: atm_auth_customer });
    }
  }, []);

  return (
    <>
      <AtmTemplate variant="tertiary">
        <Typograph mt={32} mb={16} type="headingsH2Medium" color="alertAtentionDarknest">
          Saldo Disponível
        </Typograph>
        <Typograph mb={32} type="headingsH2Medium" color="gray700">
          R$ {loggedCustomer?.balance}
        </Typograph>
        <Typograph mt={32} mb={32} type="headingsH2Medium" color="alertAtentionDarknest">
          Serviços
        </Typograph>
        <Grid gridTemplateColumns="1fr 1Fr" gridTemplateRows="1fr 1Fr" gridGap={20}>
          {menu.map(
            (menu, index) =>
              menu.show && (
                <Card key={index} onClick={menu.onClick}>
                  <Typograph type="headingsH3Medium" color="gray100" textAlign="center">
                    {menu.title}
                  </Typograph>
                </Card>
              )
          )}
        </Grid>
      </AtmTemplate>
    </>
  );
};

export default Home;
