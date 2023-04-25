import { ReactNode } from "react";
import { IUserRequest } from "./user";

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
}