import styled from 'styled-components';
import { colors } from 'styles/colors';

export const AtmManagerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  justify-content: center;
  align-items: center;

  padding: 0 16px;

  background-color: ${colors.alertAtentionLightest};
`;
