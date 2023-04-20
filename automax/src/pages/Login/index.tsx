import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar"
import { StyledBackground, StyledForm } from "./style"
import { iUserLogin } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Button from "../../components/Button";
import Input from "../../components/Inputs/Input";
import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";

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
                    <Link to="/register">
                        <Button className="outline1">{"Cadastrar"}</Button>
                    </Link>
                </StyledForm>

            </StyledBackground>
            <Footer />
        </>
    )
}