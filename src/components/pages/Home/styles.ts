import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';
import { IBGImage } from './interfaces';

export const HomeContainer = styled.div<IBGImage>`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  justify-content: center;
  align-items: center;

  padding: 0 16px;

  position: relative;

  &:before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.1;
    background-color: ${colors.alertAtentionLightest};

    ${({ bgImage }) => css`
      background-image: url(${bgImage});
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
  }
`;
