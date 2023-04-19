import { ReactNode } from "react";

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

export interface iUserRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface iUserLogin {
    email: string;
    password: string;
}
export interface iUserContext {
    userLogin: (data: iUserLogin) => void;
    userRegister: (data: iUserRequest) => void;
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    loading: boolean;
    userLogout: () => void;
}