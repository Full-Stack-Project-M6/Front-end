import { CloseIcon, StyledFormUpdateUser } from "./style";
import { Body1, Body2 } from "../../Typography";
import Input from "../../Inputs/Input";
import Button from "../../Button";
import TextArea from "../../Inputs/TextArea";
import { ModalContext } from "../../../context/modalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../../validations/userSchema";
import { IUserUpdate } from "../../../interfaces/user";
import { UserContext } from "../../../context/userContext";
import { StyledButton } from "../../Button/styles";

const FormUpdateUser = () => {
  const { closeModal, formupdateUserSetOpen } = useContext(ModalContext);
  const { updateUser, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(updateUserSchema),
  });

  const submit = (data: IUserUpdate) => {
    console.log(user);

    // updateUser(data);
  };

  return (
    <StyledFormUpdateUser onSubmit={handleSubmit(submit)}>
      <div className="divHeader">
        <Body1 weight={600}>Editar perfil</Body1>
        <CloseIcon
          onClick={() => {
            closeModal(formupdateUserSetOpen);
          }}
        />
      </div>
      <div className="formContent">
        <div>
          <Body2 weight={500}>Informações pessoais</Body2>
        </div>
        <div className="divInputs">
          <div>
            <Body2 weight={500}>Nome</Body2>
            <Input
              defautValue={user?.name}
              placeholder="Digite aqui..."
              register={register}
              name="name"
            />
            {<p className="error">{errors.name?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Email</Body2>
            <Input
              defautValue={user?.email}
              placeholder="Digite aqui..."
              register={register}
              name="email"
            />
            {<p className="error">{errors.email?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>CPF</Body2>
            <Input
              defautValue={user?.cpf}
              placeholder="Digite aqui..."
              register={register}
              name="cpf"
            />
            {<p className="error">{errors.cpf?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Celular</Body2>
            <Input
              defautValue={user?.cellphone}
              placeholder="Digite aqui..."
              register={register}
              name="cellphone"
            />
            {<p className="error">{errors.cellphone?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Data de nascimento</Body2>
            <Input
              defautValue={user?.date_birth}
              placeholder="Digite aqui..."
              register={register}
              name="date_birth"
            />
            {<p className="error">{errors.date_birth?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Descrição</Body2>
            <TextArea
              defautValue={user?.description}
              placeholder="Digite aqui..."
              register={register}
              name="description"
            />
            {<p className="error">{errors.description?.message}</p>}
          </div>
        </div>
      </div>
      <div className="divButton">
        <StyledButton
          className="light"
          onClick={() => {
            closeModal(formupdateUserSetOpen);
          }}
        >
          Cancelar
        </StyledButton>
        <Button type="submit" className="brand1">
          Salvar alterações
        </Button>
      </div>
    </StyledFormUpdateUser>
  );
};

export default FormUpdateUser;
