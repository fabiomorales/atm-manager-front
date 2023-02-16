import { Button as ButtonAtom, Typograph as TypographAtom } from 'components/atoms';
import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 420px;
  height: fit-content;

  padding: 16px;
  border-radius: 15px;
  background-color: #bd7e276b;
`;

export const Button = styled(ButtonAtom)`
  max-height: 40px;
  cursor: pointer;
`;

export const TextSendButton = styled(TypographAtom)`
  width: max-content;
`;

export const ModalSuccessContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    max-width: fit-content;
    padding: 16px;

    border-radius: 15px;
  }
`;

export const ModalSuccessStoresContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const TextDownloadApp = styled(TypographAtom)`
  text-align: center;
`;
