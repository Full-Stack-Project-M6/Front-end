import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().required("E-mail é obrigatório!").default(""),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      // .min(8, "A senha precisa ter no minimo 8 caracteres")
      .default(""),
  });