import { Grid } from 'components/atoms';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const MovementContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  justify-content: center;
  align-items: center;

  padding: 0 16px;

  background-color: ${colors.alertAtentionLightest};
`;

export const ExtractContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 16px;

  background-color: ${colors.alertAtentionLightest};
`;

export const ExtractContent = styled(Grid)`
  width: 100%;

  background-color: ${colors.alertAtentionLightest};
`;
