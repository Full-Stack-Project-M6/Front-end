import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  cpf: yup.string().notRequired(),
  cellphone: yup.string().notRequired(),
  date_birth: yup.string().notRequired(),
  description: yup.string().notRequired(),
});
