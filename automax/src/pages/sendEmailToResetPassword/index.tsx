import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import { NavBar } from "../../components/NavBar";
import { StyledBackground, StyledForm } from "../Login/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendResetSchema } from "../../schema";
import { StyledButton } from "../../components/Button/styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ISendReset } from "../../interfaces/user";
import { StyledSuccessRecover } from "./style";
import smile from "../../assets/smile.png";
import { Link } from "react-router-dom";
export const RecoverPassword = () => {
  const { sendResetToken, successRecover } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISendReset>({
    resolver: yupResolver(sendResetSchema),
  });

  return successRecover ? (
    <>
      <NavBar />
      <StyledBackground>
        <StyledSuccessRecover>
          <img src={smile} alt="smile" />
          <p>Email para a redefinição de senha foi enviado</p>
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
        <StyledForm key={1} onSubmit={handleSubmit(sendResetToken)}>
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
      </StyledBackground>
    </>
  );
};
