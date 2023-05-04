import * as yup from "yup";

export const createCommentSchema = yup.object({
  comment: yup.string().required("Digite seu comentário"),
});
