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
import { IUser } from "../../../interfaces/user";

const FormUpdateUser = () => {
  const { closeModal, formupdateUserSetOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(updateUserSchema),
  });

  const submit = (data: IUser) => {
    console.log(data);
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
              placeholder="Digite aqui..."
              register={register}
              name="name"
            />
            {<p className="error">{errors.name?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Email</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="email"
            />
            {<p className="error">{errors.email?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>CPF</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="cpf"
            />
            {<p className="error">{errors.cpf?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Celular</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="cellphone"
            />
            {<p className="error">{errors.cellphone?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Data de nascimento</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="date_birth"
            />
            {<p className="error">{errors.date_birth?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Descrição</Body2>
            <TextArea
              placeholder="Digite aqui..."
              register={register}
              name="description"
            />
            {<p className="error">{errors.description?.message}</p>}
          </div>
        </div>
      </div>
      <div className="divButton">
        <Button className="light">Cancelar</Button>
        <Button type="submit" className="brand1">
          Salvar alterações
        </Button>
      </div>
    </StyledFormUpdateUser>
  );
};

export default FormUpdateUser;
