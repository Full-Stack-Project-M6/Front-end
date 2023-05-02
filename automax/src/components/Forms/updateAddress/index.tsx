import { CloseIcon, StyledFormUpdateAddress } from "./style";
import { Body1, Body2 } from "../../Typography";
import Input from "../../Inputs/Input";
import Button from "../../Button";
import { ModalContext } from "../../../context/modalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "../../../validations/updateAddressSchema";
import { IAddress } from "../../../interfaces/address";
import { UserContext } from "../../../context/userContext";

const FormUpdateAddress = () => {
  const { closeModal, formupdateAddressSetOpen } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(addressSchema),
  });

  const submit = (data: IAddress) => {
    console.log(data);
  };

  return (
    <StyledFormUpdateAddress onSubmit={handleSubmit(submit)}>
      <div className="divHeader">
        <Body1 weight={600}>Editar endereço</Body1>
        <CloseIcon
          onClick={() => {
            closeModal(formupdateAddressSetOpen);
          }}
        />
      </div>
      <div className="formContent">
        <div>
          <Body2 weight={500}>Informações de endereço</Body2>
        </div>
        <div className="divInputs">
          <div>
            <Body2 weight={500}>CEP</Body2>
            <Input
              defaultValue={user?.address.cep}
              placeholder="Digite aqui..."
              register={register}
              name="CEP"
            />
            {<p className="error">{errors.CEP?.message}</p>}
          </div>
          <div className="divTwoInputs">
            <div>
              <Body2 weight={500}>Estado</Body2>
              <Input
                defaultValue={user?.address.estate}
                placeholder="Digite aqui..."
                register={register}
                name="state"
              />
              {<p className="error">{errors.state?.message}</p>}
            </div>
            <div>
              <Body2 weight={500}>Cidade</Body2>
              <Input
                defaultValue={user?.address.city}
                placeholder="Digite aqui..."
                register={register}
                name="city"
              />
              {<p className="error">{errors.city?.message}</p>}
            </div>
          </div>
          <div>
            <Body2 weight={500}>Rua</Body2>
            <Input
              defaultValue={user?.address.street}
              placeholder="Digite aqui..."
              register={register}
              name="street"
            />
            {<p className="error">{errors.street?.message}</p>}
          </div>
          <div className="divTwoInputs">
            <div>
              <Body2 weight={500}>Número</Body2>
              <Input
                defaultValue={user?.address.number}
                placeholder="Digite aqui..."
                register={register}
                name="number"
              />
              {<p className="error">{errors.number?.message}</p>}
            </div>
            <div>
              <Body2 weight={500}>Complemento </Body2>
              <Input
                defaultValue={user?.address.complement}
                placeholder="Digite aqui..."
                register={register}
                name="complement"
              />
              {<p className="error">{errors.complement?.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="divButton">
        <Button className="light">Cancelar</Button>
        <Button type="submit" className="brand1">
          Salvar alterações
        </Button>
      </div>
    </StyledFormUpdateAddress>
  );
};

export default FormUpdateAddress;
