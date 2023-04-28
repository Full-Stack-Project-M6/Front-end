import { ReactNode } from "react";
import { IUser, IUserLogin, IUserRequest } from "./user";

export interface iProviderProps {
  children: ReactNode;
}

export interface iUserContext {
  userLogin: (data: IUserLogin) => void;
  userRegister: (data: IUserRequest) => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loading: boolean;
  userLogout: () => void;
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  recoverUser: (data: IRecoverUser) => void;
  recoverPassword: (data: IRecoverPassword) => void;
  successRecover: boolean;
  userRecovering: IUser | null
}

export interface IRecoverUser {
  email: string;
}

export interface IRecoverPassword {
  password: string;
  confirmPassword: string;
}