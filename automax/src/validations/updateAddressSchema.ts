import * as yup from "yup";

export const addressSchema = yup.object().shape({
  cep: yup.string().required("CEP obrigatório"),
  estate: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatório"),
  street: yup.string().required("Rua obrigatória"),
  number: yup.string().required("Número obrigatória"),
  complement: yup.string().notRequired(),
});
