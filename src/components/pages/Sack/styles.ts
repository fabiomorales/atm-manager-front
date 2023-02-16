import { Card as CardAtom } from 'components/atoms';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const SackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: ${colors.alertAtentionLightest};
`;

export const AtmListCards = styled(CardAtom)`
  width: 100%;
  max-width: 100%;
`;
