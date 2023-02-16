import styled from 'styled-components';
import { colors } from 'styles/colors';
import { IInputWrapper, IMaskedInputProps } from './interfaces';

export const MaskedInputContainer = styled.div<IMaskedInputProps>``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4;
  width: 100%;
  margin-bottom: 12px;
`;

export const Input = styled.input<IMaskedInputProps>`
  width: 100%;
  height: 50px;
  padding: ${(props) => (props.iconRight ? '12px 50px 12px 15px' : '12px 15px')};
  box-sizing: border-box;
  font-size: 16px;
  background-color: ${colors.gray100};
  border: solid ${(props) => (props.error ? `3px ${colors.brandDark}` : `1px ${colors.gray600}`)};
  border-radius: 15px;

  :focus {
    border: solid 3px ${colors.highlightGoldDark};
    padding: 12px 14px;
  }

  :disabled {
    border: 1px solid ${colors.gray700};
    background-color: ${colors.gray600};
    color: ${colors.gray700};
  }
`;

export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.iconRight ? 'flex-end' : 'flex-start')};
  border-radius: 4px;
  width: 100%;
  height: 50;

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  -moz-appearance: 'textfield';
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${colors.gray700};
`;

export const TextError = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 6px;
  padding: 0 15px;
  color: ${colors.brandDark};
`;

export const Icon = styled.i`
  position: absolute;
  margin-right: 15px;
  cursor: pointer;
`;
