import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import { Body1 } from "../../Typography";
import { CloseIcon, StyleModalSuccess } from "./style";

const ModalSuccess = () => {
  const { successIsOpen, closeModal, successSetOpen } =
    useContext(ModalContext);

  return (
    <Modal
      isOpen={successIsOpen}
      onRequestClose={() => closeModal(successSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
      ariaHideApp={false}
    >
      <StyleModalSuccess>
        <div className="divHeader">
          <Body1 weight={600}>Sucesso</Body1>
          <CloseIcon onClick={() => closeModal(successSetOpen)} />
        </div>
        <div className="divConfirm">
          <Body1 weight={600}>Seu anúncio foi criado com sucesso!</Body1>
        </div>
        <div>
          <Body1>
            Agora você poderá ver seus negócios crescendo em grande escala
          </Body1>
        </div>
      </StyleModalSuccess>
    </Modal>
  );
};

export default ModalSuccess;
