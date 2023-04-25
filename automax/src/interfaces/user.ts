export interface IUser {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  password: string;
  CEP: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}
