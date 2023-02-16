import { Typograph } from 'components/atoms';
import { Modal } from 'components/molecules';
import { AtmTemplate } from 'components/templates';
import { FC, useState } from 'react';

const CustomerUpdate: FC = () => {
  return (
    <>
      <AtmTemplate variant="secondary" title="Atualização de Cliente">
        <Typograph mb={64} type="headingsH1LargeBold" color="alertAtentionDarknest" textAlign="center">
          Atualização de Cliente
        </Typograph>
      </AtmTemplate>
    </>
  );
};

export default CustomerUpdate;
