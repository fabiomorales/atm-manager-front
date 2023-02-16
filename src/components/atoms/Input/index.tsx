import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from 'react';
import { maskCurrencyChange, onlyA, onlyChars, onlyNumbers, regexNumber } from 'utils/regex';
import { InputProps } from './interfaces';
import * as S from './styles';

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    defaultValue,
    name,
    error,
    textError,
    label,
    inputRef,
    inputMode,
    type = 'text',
    initialCurrencyMask = 'R$ ',
    disabled,
    placeholder,
    maxLength = 255,
    onlyNumber,
    onlyCharacter,
    autoCapitalize,
    autoComplete,
    onChange,
    onBlur,
    className,
  },
  _ref
) => {
  const showBorderError = error && error !== '';

  const { ref, ...rest } = inputRef ? inputRef(name) : { ref: _ref, required: undefined };

  // MAX LENGTH
  const handleMaxLength = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (maxLength && event.target.value.toString().length >= maxLength) {
      return (event.target.value = event.target.value.slice(0, maxLength));
    }

    return event.target.value;
  };

  // ONLY NUMBER
  const handleOnlyNumber = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value.replace(onlyNumbers, '');

    return (event.target.value = newValue);
  };

  // ONLY CHARACTER
  const handleOnlyCharacter = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value.replace(onlyChars, '');

    return (event.target.value = newValue);
  };

  // CURRENCY
  const sign = initialCurrencyMask;

  const floatToMoney = (num: string) => {
    const number = parseFloat(num);
    return number
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  const handleCurrencyChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let { value: fieldValue }: { value: string } = event.target;
    fieldValue = fieldValue.replace(regexNumber, '');

    if (fieldValue.length === 1) {
      fieldValue = `0,0${fieldValue}`;
    } else if (fieldValue.length === 2) {
      fieldValue = `0,${fieldValue}`;
    } else if (fieldValue) {
      fieldValue = fieldValue.replace(maskCurrencyChange, '$1.$2');
      fieldValue = floatToMoney(fieldValue);
    }

    fieldValue = `${sign}${fieldValue}`;

    if (fieldValue === sign) {
      fieldValue = `${sign}0,00`;
    }

    event.preventDefault();
    return (event.target.value = fieldValue);
  };

  return (
    <>
      <S.InputContainer className={className}>
        {label && <S.Label>{label}</S.Label>}
        <S.Input
          ref={ref}
          id={name}
          defaultValue={defaultValue}
          inputMode={inputMode}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          error={!!showBorderError}
          type={type}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          onFocus={(event: ChangeEvent<HTMLInputElement>) => {
            if (defaultValue) {
              if (type === 'currency') handleCurrencyChange(event);
            }
          }}
          onBlur={(event: ChangeEvent<HTMLInputElement>) => {
            if (onBlur) {
              onBlur(event);
            }
            if (defaultValue) {
              handleCurrencyChange(event);
            }
          }}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (onlyNumber) {
              handleOnlyNumber(event);
            }
            if (type === 'currency') {
              handleCurrencyChange(event);
            }
            if (maxLength) {
              handleMaxLength(event);
            }
            if (onlyCharacter) {
              handleOnlyCharacter(event);
            }
            if (onChange) {
              onChange(event);
            }
          }}
          {...rest}
        />
        {!!textError && <S.TextError>{textError}</S.TextError>}
      </S.InputContainer>
    </>
  );
};

export default forwardRef(Input);
