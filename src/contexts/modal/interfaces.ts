import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IModal {
  show: boolean;
  title: string;
  paragraph?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export interface IModalProviderProps {
  children?: ReactNode;
}

export interface IModalContextProps {
  setModal: Dispatch<SetStateAction<IModal>>;
  modal: IModal;
}
