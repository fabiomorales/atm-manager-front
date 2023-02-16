import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';
import StyleGuide from 'styles/styleGuide';

import { ITypographComponent } from './interfaces';

export const TypographComponent = styled('h1').attrs<ITypographComponent>(({ tag, as }) => ({
  as: as ? as : tag,
}))<ITypographComponent>`
  ${({
    cursor = 'inherit',
    textAlign = 'left',
    color = 'gray700',
    type = 'headingsH1Medium',
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
  }) => css`
    font-size: ${StyleGuide.typography[type].fontSize};
    font-weight: ${StyleGuide.typography[type].fontWeight};
    line-height: ${StyleGuide.typography[type].lineHeight};
    color: ${colors[color!]};
    margin: ${`${mt}px ${mr}px ${mb}px ${ml}px`};
    text-align: ${textAlign};
    cursor: ${cursor};
  `}
`;
