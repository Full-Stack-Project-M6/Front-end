import * as yup from "yup";

export const updateCommentSchema = yup.object().shape({
  comment: yup
    .string()
    .max(200, "Limite máximo de 200 caracteres")
    .required("Comentário obrigatório"),
});
