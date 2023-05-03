import { ReactNode } from "react";
import { IAddress } from "./address";

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  password: string;
  address: {
    id: string;
    cep: string;
    estate: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
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
  cep: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cellphone?: string;
  date_birth?: string;
  description?: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IRecoverUser {
  email: string;
}

export interface IRecoverPassword {
  password: string;
  confirmPassword: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  userLogin: (data: IUserLogin) => void;
  userRegister: (data: IUserRequest) => void;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  loading: boolean;
  userLogout: () => void;
  updateUser: (dateForm: IUserUpdate) => void;
  recoverUser: (data: IRecoverUser) => void;
  recoverPassword: (data: IRecoverPassword) => void;
  successRecover: boolean;
  userRecovering: IUser | null;
  updateAddress: (dateForm: IAddress) => Promise<void>;
  disable: boolean;
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
}
