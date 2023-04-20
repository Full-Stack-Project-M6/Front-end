import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("E-mail é obrigatório!").default(""),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .min(8, "A senha precisa ter no mínimo 8 caracteres")
    .default(""),
});

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não são iguais').required('Confirme a senha'),
  bio: yup.string().required('Bio é obrigatório'),
  course_module: yup.string().required('Selecione o módulo'),
  contact: yup.string().required('Contato é obrigatório'),
});