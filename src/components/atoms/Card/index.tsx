import { FC } from 'react';
import { ICardProps } from './interfaces';
import * as S from './styles';

const Card: FC<ICardProps> = ({ onClick, className, children, ...props }) => {
  return (
    <S.Card className={className} onClick={onClick} {...props}>
      {children}
    </S.Card>
  );
};

export default Card;
