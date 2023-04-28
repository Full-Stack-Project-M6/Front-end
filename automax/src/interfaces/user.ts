export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  address: {
    id: string;
    cep: string;
    estate: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  }
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

export interface IUserLogin {
  email: string;
  password: string;
}
