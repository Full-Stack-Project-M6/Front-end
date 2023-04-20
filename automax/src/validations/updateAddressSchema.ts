import * as yup from "yup";

export const addressSchema = yup.object().shape({
  CEP: yup.string().required("CEP obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatório"),
  street: yup.string().required("Rua obrigatória"),
  number: yup.string().required("Número obrigatória"),
  complement: yup.string().notRequired(),
});
