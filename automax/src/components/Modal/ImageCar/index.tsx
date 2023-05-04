import Modal from "react-modal";
import { Body1 } from "../../Typography";
import {
  CloseIcon,
  ModalClose,
  ModalContentImageCar,
  ModalHeader,
  ModalImgCar,
} from "./style";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import { AnnounceContext } from "../../../context/announceContext";

const ModalImageCar = () => {
  const { modalIsOpen, closeModal, setOpen, indexImg } =
    useContext(ModalContext);
  const { announce } = useContext(AnnounceContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(setOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <ModalContentImageCar>
        <ModalHeader>
          <Body1 weight={600}> Imagem do veículo</Body1>
          <ModalClose onClick={() => closeModal(setOpen)}>
            <CloseIcon />
          </ModalClose>
        </ModalHeader>
        <ModalImgCar>
          <img src={announce?.images[indexImg]} alt="" />
        </ModalImgCar>
      </ModalContentImageCar>
    </Modal>
  );
};

export default ModalImageCar;
