import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 200px;

  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 5px;
  background-color: ${colors.alertAtentionDark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.alertAtentionDarknest};
  }

  &:active {
    background-color: ${colors.alertAtention};
  }
`;
