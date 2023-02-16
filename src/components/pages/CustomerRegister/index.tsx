import { Typograph } from 'components/atoms';
import { CustomerRegisterForm } from 'components/organisms';
import { AtmTemplate } from 'components/templates';
import { FC } from 'react';

const CustomerRegister: FC = () => {
  return (
    <>
      <AtmTemplate variant="tertiary">
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Preencha as informações abaixo para cadastrar um novo Cliente
        </Typograph>
        <CustomerRegisterForm />
      </AtmTemplate>
    </>
  );
};

export default CustomerRegister;
