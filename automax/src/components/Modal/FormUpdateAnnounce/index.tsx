import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import FormUpdateAnnounce from "../../Forms/updateAnnounce";

const ModalFormUpdateAnnounce = () => {
  const { formUpdateAnnounceIsOpen, closeModal, formUpdateAnnounceSetOpen } =
    useContext(ModalContext);

  return (
    <Modal
      isOpen={formUpdateAnnounceIsOpen}
      onRequestClose={() => closeModal(formUpdateAnnounceSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <FormUpdateAnnounce />
    </Modal>
  );
};

export default ModalFormUpdateAnnounce;
