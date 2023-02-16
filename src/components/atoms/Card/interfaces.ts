import { ButtonHTMLAttributes } from 'react';

export interface ICardProps extends ButtonHTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  className?: string;
}
