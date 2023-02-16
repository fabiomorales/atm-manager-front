import { Typograph as TypographAtom } from 'components/atoms';
import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';
import { IBGImage } from './interfaces';

export const AtmTemplateContainer = styled.div<IBGImage>`
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

export const AtmTemplateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 600px;
  min-height: 90vh;
  max-height: 90vh;
  overflow-y: auto;
  padding: 60px 16px 32px;
  border: 5px solid ${colors.alertAtentionDark};
  border-radius: 25px;
  background-color: #e7a74e26;
  position: relative;
`;

export const AtmTemplateHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;

  padding: 8px 16px;
  background-color: ${colors.alertAtentionDark};

  position: absolute;
  top: 0;
`;

export const AtmTemplateBackButton = styled.button`
  display: flex;
  min-width: max-content;
  text-decoration: none;
  gap: 4px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const AtmTemplateLogoutButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-decoration: none;
  gap: 4px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const TextTitle = styled(TypographAtom)`
  width: 100%;
`;
