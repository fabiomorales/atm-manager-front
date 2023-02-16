import { Grid, Typograph } from 'components/atoms';
import { AtmTemplate } from 'components/templates';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC, Fragment, useEffect, useState } from 'react';
import { listMovementService } from 'services/movement/listMovement';
import { IListMovement } from 'services/movement/listMovement/interfaces/response';
import { routerPaths } from 'utils/constants/routes';
import * as S from './styles';

const Movement: FC = () => {
  const router = useRouter();
  const { loggedCustomer } = useAuthProvider();

  const [movemetResponse, setMovemetResponse] = useState([] as Array<IListMovement>);

  const listMovement = async () => {
    const response = await listMovementService({ customerId: loggedCustomer?.id ?? '' });

    if (response.data && response.data.length) {
      setMovemetResponse(response.data);
    }
  };

  useEffect(() => {
    if (loggedCustomer && !Object.keys(loggedCustomer).length) {
      router.push(routerPaths.home.default);
    }

    listMovement();
  }, []);

  return (
    <>
      <AtmTemplate variant="secondary">
        <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
          Extrato
        </Typograph>
        <S.ExtractContainer>
          <Grid mb={16} gridTemplateColumns="1fr 1Fr 1fr">
            <Typograph type="headingsH1Medium" color="alertAtentionDarknest" textAlign="start">
              Data
            </Typograph>
            <Typograph type="headingsH1Medium" color="alertAtentionDarknest" textAlign="center">
              Descrição
            </Typograph>
            <Typograph type="headingsH1Medium" color="alertAtentionDarknest" textAlign="end">
              Valor
            </Typograph>
          </Grid>
          {movemetResponse.length > 0 ? (
            <S.ExtractContent width="100%" gridTemplateColumns="1fr 1Fr 1fr" gridTemplateRows="1fr 1Fr 1fr" gridGap={2}>
              {movemetResponse.map((movement, index) => (
                <Fragment key={index}>
                  <Typograph type="headingsH3Regular" color="gray700" textAlign="start">
                    {moment(movement.created_at).format('DD/MM/YYYY')}
                  </Typograph>
                  <Typograph type="headingsH3Regular" color="gray700" textAlign="center">
                    {movement.description}
                  </Typograph>
                  <Typograph type="headingsH3Regular" color="gray700" textAlign="end">
                    {movement.value}
                  </Typograph>
                </Fragment>
              ))}
            </S.ExtractContent>
          ) : (
            <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
              Não possui movimentação
            </Typograph>
          )}
        </S.ExtractContainer>
      </AtmTemplate>
    </>
  );
};

export default Movement;
