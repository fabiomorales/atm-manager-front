import styled from 'styled-components';
import { IModalContainer } from './interfaces';

export const ModalContainer = styled.div<IModalContainer>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;

  &:before {
    content: ' ';
    position: fixed;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  max-width: 90%;
  height: min-content;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 25px;
`;
