import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import FormUpdateUser from "../../Forms/updateUser";

const ModalFormUpdateUser = () => {
  const { formupdateUserIsOpen, closeModal, formupdateUserSetOpen } =
    useContext(ModalContext);

  return (
    <Modal
      isOpen={formupdateUserIsOpen}
      onRequestClose={() => closeModal(formupdateUserSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <FormUpdateUser />
    </Modal>
  );
};

export default ModalFormUpdateUser;
