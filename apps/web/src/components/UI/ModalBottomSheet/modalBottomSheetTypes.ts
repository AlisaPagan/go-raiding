export type ModalBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  bottomPanel?: React.ReactNode;
};
