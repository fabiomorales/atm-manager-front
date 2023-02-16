import { Flex, Typograph } from 'components/atoms';
import { AtmTemplate } from 'components/templates';
import { useAtmListProvider } from 'contexts/atms/AtmsProvider';
import { IAtm } from 'contexts/atms/interfaces';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { routerPaths } from 'utils/constants/routes';
import * as S from './styles';

const Sack: FC = () => {
  const router = useRouter();
  const { loggedCustomer } = useAuthProvider();
  const { atmList, listAtm, setAtmSelected } = useAtmListProvider();

  const selectAtm = (atm: IAtm) => {
    setAtmSelected(atm);
    router.push(routerPaths.sack.atm);
  };

  useEffect(() => {
    if (loggedCustomer && !Object.keys(loggedCustomer).length) {
      router.push(routerPaths.home.default);
    }

    if (!atmList?.length) {
      listAtm();
    }
  }, []);

  console.log('atmList', atmList);

  return (
    <>
      <AtmTemplate variant="secondary">
        <Typograph mt={32} mb={32} type="headingsH1LargeBold" color="alertAtentionDarknest" textAlign="center">
          Saque
        </Typograph>
        {(!atmList || atmList?.length === 0) && (
          <>
            <Typograph type="headingsH2Medium" color="gray700" textAlign="center">
              Não existem Máquinas cadastradas
            </Typograph>
            <Flex gap={8}>
              <Typograph type="headingsH2Medium" color="gray700" textAlign="center">
                Para cadastrar
              </Typograph>
              <Typograph
                type="headingsH2Medium"
                color="smBlue100"
                textAlign="center"
                onClick={() => router.push(routerPaths.atmManager.atmRegister)}
                cursor="pointer"
              >
                clique aqui
              </Typograph>
            </Flex>
          </>
        )}
        {atmList && atmList?.length > 0 && (
          <Flex gap={16} flexDirection="column">
            <Typograph mt={32} mb={32} type="headingsH2Medium" color="gray700" textAlign="center">
              Escolha uma Máquina para realizar a operação
            </Typograph>
            {atmList.map((atm, index) => (
              <S.AtmListCards key={index} onClick={() => selectAtm(atm)}>
                <Typograph type="headingsH2Medium" color="gray700" textAlign="center">
                  {atm.identification}
                </Typograph>
              </S.AtmListCards>
            ))}
          </Flex>
        )}
      </AtmTemplate>
    </>
  );
};

export default Sack;
