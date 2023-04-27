import { ReactNode } from "react";
import { IUserRequest, IUserUpdate } from "./user";

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iProviderProps {
  children: ReactNode;
}

export interface iUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}
export interface iUserContext {
  userLogin: (data: iUserLogin) => void;
  userRegister: (data: IUserRequest) => void;
  user: iUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
  loading: boolean;
  userLogout: () => void;
  updateUser: (dateForm: IUserUpdate) => void;
}
