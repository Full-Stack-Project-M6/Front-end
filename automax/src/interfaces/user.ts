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

export interface ISendReset {
  email: string;
}

export interface ITokenReset {
  token: string;
}

export interface IResetPassword {
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
  sendResetToken: (data: ISendReset) => void;
  resetPassword: (data: IResetPassword) => void;
  successRecover: boolean;
  userRecoveringToken: string | undefined;
  updateAddress: (dateForm: IAddress) => Promise<void>;
  setSuccessRecover: React.Dispatch<React.SetStateAction<boolean>>;
  setUserRecoveringToken: React.Dispatch<React.SetStateAction<string | undefined>>
  successReset: boolean;
}
