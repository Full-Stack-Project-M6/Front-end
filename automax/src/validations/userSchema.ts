import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  name: yup.string().required("CEP obrigatório"),
  email: yup.string().required("Estado obrigatório"),
  cpf: yup.string().required("Cidade obrigatório"),
  cellphone: yup.string().required("Rua obrigatória"),
  date_birth: yup.string().required("Número obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
});
