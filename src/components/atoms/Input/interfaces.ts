import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputMode {
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, InputMode {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef?: UseFormRegister<any>;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  textError?: string;
  label?: string;
  type?: 'currency' | HTMLInputTypeAttribute;
  initialCurrencyMask?: string;
  maxLength?: number;
  onlyNumber?: boolean;
  onlyCharacter?: boolean;
  autoCapitalize?: string;
  autoComplete?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IInput {
  error?: boolean;
}
