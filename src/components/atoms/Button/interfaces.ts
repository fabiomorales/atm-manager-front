import { ButtonHTMLAttributes, ReactNode } from 'react';
import { colors } from 'styles/colors';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'primary-inverted' | 'secondary' | 'secondary-inverted' | 'tertiary' | 'tertiary-inverted';
  onClick?: (event?: any) => void;
  color?: keyof typeof colors;
  disabled?: boolean;
  className?: string;
}
