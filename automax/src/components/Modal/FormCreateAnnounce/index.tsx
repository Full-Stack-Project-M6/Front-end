import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import FormCreateAnnounce from "../../Forms/createAnnounce";

const ModalFormCreateAnnounce = () => {
  const { formAnnounceIsOpen, closeModal, formAnnounceSetOpen } =
    useContext(ModalContext);

  return (
    <Modal
      isOpen={formAnnounceIsOpen}
      onRequestClose={() => closeModal(formAnnounceSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
      ariaHideApp={false}
    >
      <FormCreateAnnounce />
    </Modal>
  );
};

export default ModalFormCreateAnnounce;
