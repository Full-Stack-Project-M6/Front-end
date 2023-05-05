import Modal from "react-modal";
import { useContext } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import { Body1 } from "../../Typography";
import { CloseIcon, StyleModalDeleteAnnounce } from "./style";
import { StyledButton } from "../../Button/styles";
import { AnnounceContext } from "../../../context/announceContext";

const ModalDeleteAnnounce = () => {
  const { deleteAnnounceIsOpen, closeModal, deleteAnnounceSetOpen } =
    useContext(ModalContext);
  const { deleteAnnounce, announce } = useContext(AnnounceContext);

  return (
    <Modal
      isOpen={deleteAnnounceIsOpen}
      onRequestClose={() => closeModal(deleteAnnounceSetOpen)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="overlayDelete"
    >
      <StyleModalDeleteAnnounce>
        <div className="divHeader">
          <Body1 weight={600}>Excluir anúncio</Body1>
          <CloseIcon onClick={() => closeModal(deleteAnnounceSetOpen)} />
        </div>
        <div className="divConfirm">
          <Body1 weight={600}>
            Tem certeza que deseja remover este anúncio?
          </Body1>
        </div>
        <div className="divText">
          <Body1>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </Body1>
        </div>
        <div className="divButton">
          <StyledButton
            className="link"
            onClick={() => {
              closeModal(deleteAnnounceSetOpen);
            }}
          >
            Cancelar
          </StyledButton>
          <StyledButton
            className="alert"
            onClick={() => {
              deleteAnnounce(announce?.id);
              closeModal(deleteAnnounceSetOpen);
            }}
          >
            Sim, excluir anúncio
          </StyledButton>
        </div>
      </StyleModalDeleteAnnounce>
    </Modal>
  );
};

export default ModalDeleteAnnounce;
