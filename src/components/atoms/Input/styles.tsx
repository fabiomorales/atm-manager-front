import styled from 'styled-components';
import { colors } from 'styles/colors';
import { IInput } from './interfaces';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4;
  width: 100%;
  margin-bottom: 12px;
`;

export const Input = styled.input<IInput>`
  width: 100%;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: ${colors.gray100};
  outline: none;
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
