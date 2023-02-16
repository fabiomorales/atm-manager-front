import { Typograph } from 'components/atoms';
import { SackAtmForm } from 'components/organisms';
import { AtmTemplate } from 'components/templates';
import { useAtmListProvider } from 'contexts/atms/AtmsProvider';
import { FC } from 'react';

const SackAtm: FC = () => {
  const { atmSelected } = useAtmListProvider();

  return (
    <>
      <AtmTemplate variant="secondary">
        <Typograph mt={32} mb={32} type="headingsH1LargeBold" color="alertAtentionDarknest" textAlign="center">
          Saque
        </Typograph>
        <Typograph mt={32} mb={8} type="headingsH2Medium" color="gray700" textAlign="center">
          {atmSelected.identification}
        </Typograph>
        <Typograph mb={32} type="subtitleS1Bold" color="primary_dark" textAlign="center">
          *Apenas valores decimais
        </Typograph>
        <SackAtmForm />
      </AtmTemplate>
    </>
  );
};

export default SackAtm;
