import * as yup from "yup";

export const createCommentSchema = yup.object({
  comment: yup
    .string()
    .max(200, "Limite máximo de 200 caracteres")
    .required("Digite seu comentário"),
});
