import Modal from "react-modal";
import { Body1 } from "../../Typography";
import { CloseIcon, ModalClose, ModalHeader, ModalImgCar } from "./style";
import { useContext, useState } from "react";
import { annnounceMocked } from "../../../utils/index";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";

const ModalImageCar = () => {
  const { modalIsOpen, closeModal, setOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(setOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <ModalHeader>
        <Body1 weight={600}> Imagem do veículo</Body1>
        <ModalClose onClick={() => closeModal(setOpen)}>
          <CloseIcon />
        </ModalClose>
      </ModalHeader>
      <ModalImgCar>
        <img src={annnounceMocked.imgCar} alt="" />
      </ModalImgCar>
    </Modal>
  );
};

export default ModalImageCar;
