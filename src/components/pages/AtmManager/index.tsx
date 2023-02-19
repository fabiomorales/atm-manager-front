import { Card, Grid, Typograph } from 'components/atoms';
import { AtmTemplate } from 'components/templates';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { routerPaths } from 'utils/constants/routes';
import { IMenu } from './interfaces';

const AtmManager: FC = () => {
  const router = useRouter();

  const menu: Array<IMenu> = [
    {
      show: true,
      title: 'Cadastro De Cliente',
      onClick: () =>
        router.push({ pathname: routerPaths.atmManager.customerRegister, query: { fromPath: router.asPath } }),
    },
    {
      show: false,
      title: 'Atualização de Cliente',
      onClick: () => router.push(routerPaths.atmManager.customerUpdate),
    },
    {
      show: true,
      title: 'Cadastro de ATM',
      onClick: () => router.push(routerPaths.atmManager.atmRegister),
    },
    {
      show: false,
      title: 'Atualização de ATM',
      onClick: () => router.push(routerPaths.atmManager.atmUpdate),
    },
  ];

  return (
    <>
      <AtmTemplate variant="secondary">
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Gerenciador do ATM
        </Typograph>
        <Grid mt={32} gridTemplateColumns="1fr 1Fr" gridTemplateRows="1fr 1Fr" gridGap={20}>
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

export default AtmManager;
