import { FC, useContext, useState } from 'react';

import { IModal, IModalProviderProps } from './interfaces';
import { ModalContext } from './ModalContext';

export const ModalProvider: FC<IModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<IModal>({} as IModal);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalProvider = () => useContext(ModalContext);
