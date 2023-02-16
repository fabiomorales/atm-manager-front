import { FC } from 'react';
import { IButtonProps } from './interfaces';
import * as S from './styles';

const Button: FC<IButtonProps> = ({
  variant = 'primary',
  color,
  onClick,
  type = 'button',
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <S.Button className={className} type={type} onClick={onClick} variant={variant} disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
