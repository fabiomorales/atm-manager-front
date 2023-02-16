import { Button, Flex, Typograph } from 'components/atoms';
import { useModalProvider } from 'contexts/modal/ModalProvider';
import { FC } from 'react';
import * as S from './styles';

const Modal: FC = () => {
  const { modal, setModal } = useModalProvider();

  return (
    <S.ModalContainer isOpen={modal?.show}>
      <S.ModalContent>
        {modal.show && (
          <Flex flexDirection="column">
            {modal.children}
            <Typograph mt={32} mb={32} type="headingsH1Medium" color="gray700" textAlign="center">
              {modal.title}
            </Typograph>
            {modal?.paragraph && (
              <Typograph mb={32} type="headingsH2Medium" color="gray700" textAlign="center">
                {modal.paragraph}
              </Typograph>
            )}
          </Flex>
        )}
        <Button
          onClick={() => {
            setModal({ ...modal, show: false });
            if (modal.onClick) modal.onClick();
          }}
        >
          OK
        </Button>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
