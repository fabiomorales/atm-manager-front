import { ButtonHTMLAttributes } from 'react';

export interface IBGImage {
  bgImage?: string;
}

export type IAtmTemplateVariant = 'primary' | 'secondary' | 'tertiary' | 'quarteary';

export interface IAtmTemplateProps extends ButtonHTMLAttributes<HTMLDivElement> {
  variant: IAtmTemplateVariant;
  title?: string;
  className?: string;
}
