import React, { FC } from 'react';
import { tags } from 'styles/styleGuide';

import { ITypographProps } from './interfaces';
import * as S from './styles';

const Typograph: FC<ITypographProps> = ({ className, color, type, children, onClick, ...props }) => {
  const tag = tags[type] as keyof JSX.IntrinsicElements;
  return (
    <S.TypographComponent className={className} tag={tag} type={type} color={color} onClick={onClick} {...props}>
      {children}
    </S.TypographComponent>
  );
};

export default Typograph;
