import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import { NavBar } from "../../components/NavBar";
import { StyledBackground, StyledForm } from "../Login/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { recoverPasswordSchema, recoverUserSchema } from "../../schema";
import { StyledButton } from "../../components/Button/styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { IRecoverPassword, IRecoverUser } from "../../interfaces/user";
import { StyledFormRecover, StyledSuccessRecover } from "./style";
import smile from "../../assets/smile.png";
import { Link } from "react-router-dom";
export const RecoverPassword = () => {
  const { recoverUser, recoverPassword, successRecover, userRecovering } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRecoverUser>({
    resolver: yupResolver(recoverUserSchema),
  });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm<IRecoverPassword>({
    resolver: yupResolver(recoverPasswordSchema),
  });

  return successRecover ? (
    <>
      <NavBar />
      <StyledBackground>
        <StyledSuccessRecover>
          <img src={smile} alt="smile" />
          <p>Senha alterada com sucesso!</p>
          <Link to="/login">
            <StyledButton className="brand1">{"Ir para o login"}</StyledButton>
          </Link>
        </StyledSuccessRecover>
      </StyledBackground>
    </>
  ) : (
    <>
      <NavBar />
      <StyledBackground>
        <StyledForm key={1} onSubmit={handleSubmit(recoverUser)}>
          <h1>Recuperar senha</h1>
          <label htmlFor="email">E-mail</label>
          <Input
            register={register}
            placeholder="Digite seu e-mail aqui..."
            name="email"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <StyledButton type="submit" className="brand1">
            {"Recuperar"}
          </StyledButton>
        </StyledForm>
        {userRecovering && (
          <StyledFormRecover
            key={2}
            onSubmit={handleSubmit2(recoverPassword)}
            className="newPass"
          >
            <h1>Trocar senha</h1>
            <label htmlFor="password">Nova senha</label>
            <Input
              register={register2}
              name="password"
              placeholder="Digitar senha..."
            />
            {errors2.password && <span>{errors2.password.message}</span>}
            <label htmlFor="confirmPassword">Confirmar nova senha</label>
            <Input
              register={register2}
              name="confirmPassword"
              placeholder="Digitar senha..."
            />
            {errors2.confirmPassword && (
              <span>{errors2.confirmPassword.message}</span>
            )}

            <StyledButton type="submit" className="brand1">
              {"Trocar senha"}
            </StyledButton>
          </StyledFormRecover>
        )}
      </StyledBackground>
    </>
  );
};
