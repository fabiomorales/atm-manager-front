import { Flex, Typograph } from 'components/atoms';
import { LoginForm } from 'components/organisms';
import { AtmTemplate } from 'components/templates';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { routerPaths } from 'utils/constants/routes';

const Login: FC = () => {
  const { loggedCustomer } = useAuthProvider();
  const router = useRouter();

  useEffect(() => {
    if (loggedCustomer && Object.keys(loggedCustomer).length) {
      router.push(routerPaths.home.default);
    }
  }, []);

  return (
    <>
      <AtmTemplate variant="primary">
        <Typograph mb={64} type="headingsH1LargeBold" color="alertAtentionDarknest" textAlign="center">
          Bem vindo ao ATM
        </Typograph>
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Informe o seu email para acessar
        </Typograph>
        <LoginForm />
        <Flex mt={16} mb={16} gap={8} width={'100%'} centered>
          <Typograph type="headingsH1Medium" color="gray700" textAlign="center">
            Ainda não tem cadastro?
          </Typograph>
          <Typograph
            type="headingsH2Medium"
            color="smBlue100"
            textAlign="center"
            onClick={() =>
              router.push({ pathname: routerPaths.atmManager.customerRegister, query: { fromPath: router.asPath } })
            }
            cursor="pointer"
          >
            Clique aqui
          </Typograph>
        </Flex>
      </AtmTemplate>
    </>
  );
};

export default Login;
