import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import FormUpdateAddress from "../../Forms/updateAddress";

const ModalFormUpdateAdrress = () => {
  const { formupdateAddressIsOpen, closeModal, formupdateAddressSetOpen } =
    useContext(ModalContext);

  return (
    <Modal
      isOpen={formupdateAddressIsOpen}
      onRequestClose={() => closeModal(formupdateAddressSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
      ariaHideApp={false}
    >
      <FormUpdateAddress />
    </Modal>
  );
};

export default ModalFormUpdateAdrress;
