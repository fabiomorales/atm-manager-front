export interface IBGImage {
  bgImage?: string;
}

export interface IMenu {
  show?: boolean;
  title: string;
  onClick: () => void;
}
