import { createContext, useState } from "react";

interface IModalContextProps {
  children: React.ReactNode;
}

interface IModalContext {
  modalIsOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formAnnounceIsOpen: boolean;
  formAnnounceSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formUpdateAnnounceIsOpen: boolean;
  formUpdateAnnounceSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAnnounceIsOpen: boolean;
  deleteAnnounceSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formupdateUserIsOpen: boolean;
  formupdateUserSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formupdateAddressIsOpen: boolean;
  formupdateAddressSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successIsOpen: boolean;
  successSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (set: Function) => void;
  closeModal: (set: Function) => void;
  indexImg: number;
  setIndexImg: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalContextProps) => {
  const [modalIsOpen, setOpen] = useState(false);
  const [formAnnounceIsOpen, formAnnounceSetOpen] = useState(false);
  const [formUpdateAnnounceIsOpen, formUpdateAnnounceSetOpen] = useState(false);
  const [deleteAnnounceIsOpen, deleteAnnounceSetOpen] = useState(false);
  const [formupdateUserIsOpen, formupdateUserSetOpen] = useState(false);
  const [formupdateAddressIsOpen, formupdateAddressSetOpen] = useState(false);
  const [successIsOpen, successSetOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const openModal = (set: Function) => set(true);

  const closeModal = (set: Function) => set(false);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setOpen,
        formAnnounceIsOpen,
        formAnnounceSetOpen,
        formUpdateAnnounceIsOpen,
        formUpdateAnnounceSetOpen,
        deleteAnnounceIsOpen,
        deleteAnnounceSetOpen,
        formupdateUserIsOpen,
        formupdateUserSetOpen,
        formupdateAddressIsOpen,
        formupdateAddressSetOpen,
        successIsOpen,
        successSetOpen,
        openModal,
        closeModal,
        indexImg,
        setIndexImg,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
