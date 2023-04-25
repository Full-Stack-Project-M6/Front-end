import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("E-mail é obrigatório!").default(""),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    // .min(8, "A senha precisa ter no mínimo 8 caracteres")
    .default(""),
});

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().required('Email é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  cellphone: yup.string().required('Celular é obrigatório'),
  date_birth: yup.string().required('Data de nascimento é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
  account_type: yup.boolean().required('Tipo da conta é obrigatório'),
  password: yup.string().required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não são iguais').required('Confirme a senha'),
  CEP: yup.string().required('CEP é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  street: yup.string().required('Rua é obrigatório'),
  number: yup.string().required('Numero é obrigatório'),
});