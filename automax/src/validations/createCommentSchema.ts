import * as yup from "yup";

export const createCommentSchema = yup.object({
  comment: yup.string().max(200).required("Digite seu comentário"),
});
