import { ChangeEvent, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ArrayValues {
  value: string;
  index: number;
}

export interface IMaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // inputRef?: UseFormRegister<any>;
  error?: string | boolean;
  textError?: string;

  initMask?: boolean;
  notPaste?: boolean;
  mask?: string;
  maxLength?: number;

  percentage?: boolean;
  sensitiveData?: boolean;
  iconRight?: boolean;
  className?: string;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  informationClick?: () => void;
  onClickIcon?: () => void;
}

export interface IInputWrapper {
  iconRight: boolean;
}
