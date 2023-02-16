import { Typograph } from 'components/atoms';
import { AtmRegisterForm } from 'components/organisms';
import { AtmTemplate } from 'components/templates';
import { FC } from 'react';

const AtmRegister: FC = () => {
  return (
    <>
      <AtmTemplate variant="secondary">
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Preencha as informações abaixo para cadastrar uma nova ATM
        </Typograph>
        <AtmRegisterForm />
      </AtmTemplate>
    </>
  );
};

export default AtmRegister;
