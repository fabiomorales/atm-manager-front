//
// Defines format characters with characters as keys and corresponding RegExp string as values. Default ones:
//
// {
//  "9": "[0-9]",
//  "a": "[A-Za-z]",
//  "*": "[A-Za-z0-9]"
// }
//
import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import { only9, onlyA, onlyAsterisk, onlyNumbers } from 'utils/regex';
import { ArrayValues, IMaskedInputProps } from './interfaces';
import * as S from './styles';

const MaskedInput: ForwardRefRenderFunction<HTMLInputElement, IMaskedInputProps> = (
  {
    name,
    label,
    error,
    textError,
    type,
    initMask,
    notPaste,
    mask,
    maxLength,
    onChange,
    onBlur,
    onKeyDown,
    onClickIcon = () => null,
    className,
    ...MaskedInputParams
  },
  ref
) => {
  // States
  const [arrayValues, setArrayValues] = useState([] as ArrayValues[]);
  const [pressBackSpace, setPressBackSpace] = useState(false);
  const [pressDelete, setPressDelete] = useState(false);
  const [maskMaxLength, setMaskMaxLength] = useState(0);
  const [restrictChars, setRestrictChars] = useState(onlyNumbers);
  const [preserveMask, setPreserveMask] = useState(mask);
  const iconInRight = type === 'password';

  const showBorderError = error && error !== '';

  // Effect
  useEffect(() => {
    verifyType();
    setPreserveMask(mask);
  }, [mask]);

  // Method that assembles the character array of the mask
  const verifyType = () => {
    preserveMask === mask ? mask : (arrayValues.length = 0);

    mask ? setMaskMaxLength(maxLength ? maxLength : mask.length) : setMaskMaxLength(0);
    const array = mask?.split('');
    let restObject = '';
    array?.forEach((values: string, key) => {
      if (values !== 'a' && values !== '9' && values !== '*') {
        const object: ArrayValues = {
          value: values,
          index: key,
        };
        arrayValues.push(object);
      } else {
        restObject = restObject + values;
      }
    });
    setArrayValues(arrayValues);

    if (only9.test(restObject)) {
      setRestrictChars(onlyNumbers);
    } else if (onlyA.test(restObject)) {
      setRestrictChars(/[^A-Za-z]/g);
    } else if (onlyAsterisk.test(restObject)) {
      setRestrictChars(/[^A-Za-z0-9]/g);
    }
  };

  // Method initMask of onFocus
  const handleFocusInitMask = (e: FocusEvent<HTMLInputElement>) => {
    let { value: fieldValue }: { value: string } = e.target;
    if (fieldValue === '') {
      arrayValues.map((array, index) => {
        if (array.index === index) {
          fieldValue = fieldValue + array.value;
        }
        return fieldValue;
      });
      iCaretPos = fieldValue.length;
    }

    return (e.target.value = fieldValue);
  };

  // Method initMask of onBlur
  const handleBlurInitMask = (e: FocusEvent<HTMLInputElement>) => {
    let { value: fieldValue }: { value: string } = e.target;
    const regex = new RegExp(/[^a-zA-z0-9]/g);
    const newFieldValue = fieldValue.replace(regex, '');
    if (newFieldValue === '') {
      fieldValue = '';
    }

    return (e.target.value = fieldValue);
  };

  // Method onKeyDown
  const handleKeyDownMask = (e: React.KeyboardEvent) => {
    e.keyCode === 8 ? setPressBackSpace(true) : setPressBackSpace(false);
    e.keyCode === 46 ? setPressDelete(true) : setPressDelete(false);

    if (!/[0-9]*/.test(e.key)) e.preventDefault();
  };

  // Method handleChange of handleChangeMask
  const validateRestrictChars = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (!pressBackSpace) {
      newValue = e.target.value.replace(restrictChars, '');
    }
    return (e.target.value = newValue);
  };

  // Methods handleChangeMask
  function setCaretPosition(elemId: string, caretPos: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elem = document.getElementById(elemId) as HTMLInputElement as any;

    if (elem != null) {
      if (elem.createTextRange) {
        const range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
      }
    }
  }

  function handlePaste(e: ClipboardEvent) {
    if (notPaste) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateRestrictChars(e);
    let { value: fieldValue }: { value: string } = e.target;

    // Method that erases characters and inserts the cursor correctly
    if (pressBackSpace) {
      const newArray = [...arrayValues];
      const restFiedValue = fieldValue.slice(iCaretPos);
      fieldValue = fieldValue.slice(0, iCaretPos);
      newArray.reverse();
      newArray.map((array) => {
        if (array.index === fieldValue.length) {
          fieldValue = fieldValue.slice(0, array.index - 1);
          if (array.index !== 0) iCaretPos = iCaretPos - 1;
        }
        return fieldValue;
      });
      fieldValue = fieldValue + restFiedValue;
    }

    // Method that assembles the input value together with the mask
    let stopWhile = true;
    let fieldVerify = true;
    const regex = new RegExp(/[^a-zA-z0-9]/g);
    fieldValue = fieldValue.replace(regex, '');
    let newFieldValue = '';
    let valueArray = fieldValue.split('');
    let countArray = 0;
    let i = 0;
    while (stopWhile) {
      if (i <= valueArray.length) {
        if (i === arrayValues[countArray]?.index) {
          valueArray.splice(arrayValues[countArray]?.index, 0, arrayValues[countArray]?.value);
          newFieldValue = valueArray.join('');
          fieldValue = newFieldValue;
          valueArray = fieldValue.split('');
          countArray = countArray + 1;
        }
        fieldVerify = true;
        i = i + 1;
      }
      !fieldVerify ? (stopWhile = false) : (stopWhile = true);
      fieldVerify = false;
    }

    // Remove lastChar
    if (fieldValue.length > maskMaxLength) {
      const remove = fieldValue.split('');
      remove.length = maskMaxLength;
      fieldValue = remove.join('');
    }

    // Set cursor when not press backspace and delete
    if (!pressBackSpace && !pressDelete) {
      let stopWhilePos = true;
      let fieldVerifyPos = true;
      let countArrayPos = true;
      let iPos = 0;
      let iCare = iCaretPos - 1;
      while (stopWhilePos) {
        if (iPos <= iCare) {
          countArrayPos = false;
          if (iCare === arrayValues[iPos]?.index) {
            iCare = iCare + 1;
            countArrayPos = true;
          }
          if (!countArrayPos && iCare + 1 === arrayValues[iPos]?.index) {
            iCare = iCare + 1;
          }
          iPos = iPos + 1;
          fieldVerifyPos = true;
        }
        !fieldVerifyPos ? (stopWhilePos = false) : (stopWhile = true);
        fieldVerifyPos = false;
      }
      iCaretPos = iCare + 1;
    }

    // Method that includes the first characters of the mascara when initMask true
    if (!initMask) {
      let onlyCharsMask = false;
      const fieldValueArray = fieldValue.split('');
      fieldValueArray.map((array, index) => {
        onlyCharsMask = false;
        if (index === arrayValues[index]?.index) {
          if (array === arrayValues[index]?.value) onlyCharsMask = true;
        }
      });
      if (onlyCharsMask) fieldValue = '';
    }

    setPressBackSpace(false);
    setPressDelete(false);
    return (e.target.value = fieldValue);
  };

  // Method onChange
  let iCaretPos = 0;
  const handleChangeMask = (e: ChangeEvent<HTMLInputElement>) => {
    const inputArea = document.getElementById(name) as HTMLInputElement;
    inputArea?.addEventListener('paste', handlePaste);
    iCaretPos = Number(inputArea?.selectionStart);

    handleChange(e);
    setCaretPosition(name, iCaretPos);
  };

  // PASSWORD
  const [inputAttr, setInputAttr] = useState({
    type,
    icon: <span>IconOffOutlined</span>,
  });

  const alterInputAttr =
    inputAttr.type === 'password'
      ? {
          type: 'text',
          icon: <span>IconOutlined</span>,
        }
      : {
          type: 'password',

          icon: <span>IconOffOutlined</span>,
        };

  return (
    <S.InputContainer className={className}>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper iconRight={iconInRight}>
        <S.Input
          ref={ref}
          id={name}
          type={type === 'password' ? inputAttr.type : type}
          name={name}
          maxLength={maskMaxLength}
          autoComplete={'off'}
          error={!!showBorderError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChangeMask(event);
            if (onChange) onChange(event);
          }}
          onFocus={(event: FocusEvent<HTMLInputElement>) => {
            if (initMask) handleFocusInitMask(event);
          }}
          onBlur={(event: FocusEvent<HTMLInputElement>) => {
            if (initMask) handleBlurInitMask(event);
            if (onBlur) onBlur(event);
          }}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            handleKeyDownMask(event);
            if (onKeyDown) onKeyDown(event);
          }}
          {...MaskedInputParams}
        />
        {type === 'password' && (
          <S.Icon
            onClick={() => {
              setInputAttr(alterInputAttr);
              if (onClickIcon) {
                onClickIcon();
              }
            }}
          >
            {inputAttr.icon}
          </S.Icon>
        )}
      </S.InputWrapper>
      {!!textError && <S.TextError>{textError}</S.TextError>}
    </S.InputContainer>
  );
};

export default forwardRef(MaskedInput);
