import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { grid, GridProps as StyledSystemGridProps, layout, space, SpaceProps, LayoutProps } from 'styled-system';

export type GridProps = HTMLAttributes<HTMLDivElement> & StyledSystemGridProps & SpaceProps & LayoutProps;

const Grid = styled.div<GridProps>`
  display: grid;

  ${grid}
  ${layout}
  ${space}
`;

export default Grid;
