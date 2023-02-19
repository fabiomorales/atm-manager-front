import { INextRouterQuery } from 'common/interfaces/nextRouter';
import { Typograph } from 'components/atoms';
import { CustomerRegisterForm } from 'components/organisms';
import { AtmTemplate } from 'components/templates';
import { IAtmTemplateVariant } from 'components/templates/AtmTemplate/interfaces';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import { routerPaths } from 'utils/constants/routes';

const CustomerRegister: FC = () => {
  const router = useRouter();

  const verifyFromRouter = (nextRouterQuery: ParsedUrlQuery): IAtmTemplateVariant => {
    const { fromPath } = nextRouterQuery as INextRouterQuery;

    if (fromPath && fromPath === routerPaths.login.default) {
      return 'quarteary';
    }

    return 'secondary';
  };

  return (
    <>
      <AtmTemplate variant={verifyFromRouter(router.query)}>
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Preencha as informações abaixo para cadastrar um novo Cliente
        </Typograph>
        <CustomerRegisterForm />
      </AtmTemplate>
    </>
  );
};

export default CustomerRegister;
