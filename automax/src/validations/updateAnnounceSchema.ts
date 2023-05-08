import * as yup from "yup";

export const updateCommentSchema = yup.object().shape({
  comment: yup.string().required("Comentário obrigatório"),
});
