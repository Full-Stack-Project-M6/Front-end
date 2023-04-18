import { createContext, useState } from "react";

interface IModalContextProps {
  children: React.ReactNode;
}

interface IModalContext {
  modalIsOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (set: Function) => void;
  closeModal: (set: Function) => void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalContextProps) => {
  const [modalIsOpen, setOpen] = useState(false);

  const openModal = (set: Function) => set(true);

  const closeModal = (set: Function) => set(false);

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, setOpen, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
