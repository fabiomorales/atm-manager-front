import styled from 'styled-components';
import { colors } from 'styles/colors';

import { IButtonProps } from './interfaces';

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  text-decoration: none;
  background-color: ${colors.alertAtentionDark};
  border: 1px solid ${colors.alertAtentionDark};
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.alertAtentionDarknest};
  }

  &:active {
    border-width: 0px;
    background-color: ${colors.alertAtention};
  }

  &:disabled {
    border-width: 0px;
    background-color: ${colors.gray400};
  }
`;
