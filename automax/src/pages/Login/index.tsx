import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar"
import { StyledBackground, StyledForm } from "./style"
import { iUserLogin } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Input from "../../components/Input/input";
import Button from "../../components/Button";

export const LoginPage = () => {

    const { userLogin } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<iUserLogin>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    });

    return (
        <>
            <NavBar />
            <StyledBackground >
                <StyledForm onSubmit={handleSubmit(userLogin)}>
                    <h1>Login</h1>
                    <label>Usuário</label>
                    <Input placeholder="Digitar usuário"/>
                    <label>Usuário</label>
                    <Input placeholder="Digitar senha"/>
                    <blockquote>Esqueci minha senha</blockquote>
                    <Button className="brand1">{"Entrar"}</Button>
                    <p>Ainda não possui conta?</p>
                    <Button className="outline1">{"Cadastrar"}</Button>
                </StyledForm>

            </StyledBackground>
        </>
    )
}