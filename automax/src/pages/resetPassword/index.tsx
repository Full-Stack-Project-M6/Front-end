import { useForm } from "react-hook-form";
import { IResetPassword, ISendReset } from "../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../schema";
import { StyledBackground, StyledForm } from "../Login/style";
import { StyledFormRecover } from "../sendEmailToResetPassword/style";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Input from "../../components/Inputs/Input";
import { StyledButton } from "../../components/Button/styles";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/footer";
import { Link, useParams } from "react-router-dom";
import { instance } from "../../services/apiKenzie";

export const ResetPassword = () => {
  const { token } = useParams();
  const { setUserRecoveringToken, resetPassword, successReset } = useContext(UserContext);
  setUserRecoveringToken(token);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
  });

  return !successReset ? (
    <>
      <NavBar />
      <StyledBackground>
        <StyledFormRecover
          onSubmit={handleSubmit(resetPassword)}
          className="newPass"
        >
          <h1>Trocar senha</h1>
          <label htmlFor="password">Nova senha</label>
          <Input
            register={register}
            name="password"
            placeholder="Digitar senha..."
          />
          {errors.password && <span>{errors.password.message}</span>}
          <label htmlFor="confirmPassword">Confirmar nova senha</label>
          <Input
            register={register}
            name="confirmPassword"
            placeholder="Digitar senha..."
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}

          <StyledButton type="submit" className="brand1">
            {"Trocar senha"}
          </StyledButton>
        </StyledFormRecover>
      </StyledBackground>
      <Footer />
    </>
  ):
  <>
    <NavBar />
    <StyledBackground>
      <StyledForm>
        <p>Senha alterada com sucesso!</p>
        <Link to="/login">
            <StyledButton className="brand1">{"Ir para o login"}</StyledButton>
        </Link>
      </StyledForm>
    </StyledBackground>
    <Footer />
  </>
};
