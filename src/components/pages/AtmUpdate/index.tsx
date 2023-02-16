import { Typograph } from 'components/atoms';
import { AtmTemplate } from 'components/templates';
import { FC } from 'react';

const AtmUpdate: FC = () => {
  return (
    <>
      <AtmTemplate variant="secondary" title="Atualização de ATM">
        <Typograph mb={64} type="headingsH1LargeBold" color="alertAtentionDarknest" textAlign="center">
          Atualização de ATM
        </Typograph>
      </AtmTemplate>
    </>
  );
};

export default AtmUpdate;
