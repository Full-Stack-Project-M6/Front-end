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
  phone: string;
  registered: Date;
}

export interface iUserLogin {
  email: string;
  password: string;
}
export interface iUserContext {
  userLogin: (data: iUserLogin) => void;
  userRegister: (data: IUserRequest) => void;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  userLogout: () => void;
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  updateUser: (dateForm: IUserUpdate) => void;
  idAnnounce: string;
  setIdAnnounce: React.Dispatch<React.SetStateAction<string>>;
}
