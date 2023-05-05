import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar"
import { StyledBackground, StyledForm } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Button from "../../components/Button";
import Input from "../../components/Inputs/Input";
import { Footer } from "../../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { IUserLogin } from "../../interfaces/user";

export const LoginPage = () => {

    const { userLogin } = useContext(UserContext)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<IUserLogin>({
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
                    <Input register={register} name="email" placeholder="Digitar usuário"/>
                    {errors.email && (<p>{errors.email.message}</p>)}
                    <label>Senha</label>
                    <Input type="password" register={register} name="password" placeholder="Digitar senha"/>
                    {errors.password && (<p>{errors.password.message}</p>)}
                    <blockquote>Esqueceu a senha? <a href="/sendReset"> clique aqui</a></blockquote>
                    <Button type="submit" className="brand1">{"Entrar"}</Button>
                    <p>Ainda não possui conta?</p>
                    <Link to="/register">
                        <Button type="button" className="outline1">{"Cadastrar"}</Button>
                    </Link>
                </StyledForm>
            </StyledBackground>
            <Footer />
        </>
    )
}