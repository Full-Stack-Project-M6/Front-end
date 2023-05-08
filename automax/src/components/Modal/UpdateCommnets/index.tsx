import Modal from "react-modal";
import { useContext, useEffect } from "react";
import "../style.css";
import { ModalContext } from "../../../context/modalContext";
import { Body1 } from "../../Typography";
import { CloseIcon, StyleModalUpdateComment } from "./style";
import { AnnounceContext } from "../../../context/announceContext";
import Input from "../../Inputs/Input";
import { StyledButton } from "../../Button/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateCommentSchema } from "../../../validations/updateAnnounceSchema";
import { IUpdateComment } from "../../../interfaces/announce";
import { CommentsContext } from "../../../context/commentsContext";

const ModalUpdateComment = () => {
  const { updateComment, setUpdateComment, closeModal } =
    useContext(ModalContext);
  const { announce } = useContext(AnnounceContext);
  const { editComment, idUpdate, listComments, loading, setLoading } =
    useContext(CommentsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateComment>({
    resolver: yupResolver(updateCommentSchema),
  });

  const submit = async (data: IUpdateComment) => {
    try {
      await editComment(idUpdate, data);
      loading == 0 ? setLoading(1) : setLoading(0);
      closeModal(setUpdateComment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listComments(announce?.id);
  }, [loading]);

  return (
    <Modal
      isOpen={updateComment}
      onRequestClose={() => closeModal(setUpdateComment)}
      contentLabel="Example Modal"
      className="modalContent"
      overlayClassName="overlayDelete"
    >
      <StyleModalUpdateComment>
        <div className="divHeader">
          <Body1 weight={600}>Editar comentário</Body1>
          <CloseIcon onClick={() => closeModal(setUpdateComment)} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            register={register}
            name="comment"
            placeholder="Digite aqui..."
          />
          <div>
            <StyledButton className="brand1" type="submit">
              Salvar alteração
            </StyledButton>
          </div>
        </form>
      </StyleModalUpdateComment>
    </Modal>
  );
};

export default ModalUpdateComment;
