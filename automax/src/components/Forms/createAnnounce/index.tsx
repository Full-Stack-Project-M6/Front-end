import { CloseIcon, StyledFormCreateAnnounce } from "./style";
import { Body1, Body2 } from "../../Typography";
import Input from "../../Inputs/Input";
import Button from "../../Button";
import TextArea from "../../Inputs/TextArea";
import { ModalContext } from "../../../context/modalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ICreateAnnounce } from "../../../interfaces/announce";
import { yupResolver } from "@hookform/resolvers/yup";
import { announceSchema } from "../../../validations/createAnnounceSchema";
import InputSelect from "../../Inputs/InputSelect/inputSelect";

const FormCreateAnnounce = () => {
  const { closeModal, formAnnounceSetOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAnnounce>({
    resolver: yupResolver(announceSchema),
  });

  const submit = (data: ICreateAnnounce) => {
    console.log(data);
  };

  return (
    <StyledFormCreateAnnounce onSubmit={handleSubmit(submit)}>
      <div className="divHeader">
        <Body1 weight={600}>Editar anúncio</Body1>
        <CloseIcon
          onClick={() => {
            closeModal(formAnnounceSetOpen);
          }}
        />
      </div>
      <div className="formContent">
        <div>
          <Body2 weight={500}>Informações do veículo</Body2>
        </div>
        <div className="divInputs">
          <div>
            <Body2 weight={500}>Marca</Body2>
            <InputSelect width={500} placeholder="Digite aqui..."/>
            {<p className="error">{errors.brand?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>Modelo</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="model"
            />
            {<p className="error">{errors.model?.message}</p>}
          </div>
          <div className="divTwoInputs">
            <div>
              <Body2 weight={500}>Ano</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="year"
              />
              {<p className="error">{errors.year?.message}</p>}
            </div>
            <div>
              <Body2 weight={500}>Combustível</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="fuel"
              />
              {<p className="error">{errors.fuel?.message}</p>}
            </div>
          </div>
          <div className="divTwoInputs">
            <div>
              <Body2 weight={500}>Quilometragem</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="kilometer"
              />
              {<p className="error">{errors.kilometer?.message}</p>}
            </div>
            <div>
              <Body2 weight={500}>Cor</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="color"
              />
              {<p className="error">{errors.color?.message}</p>}
            </div>
          </div>
          <div className="divTwoInputs">
            <div>
              <Body2 weight={500}>Preço tabela FIPE</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="brand"
              />
            </div>
            <div>
              <Body2 weight={500}>Preço</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="price"
              />
              {<p className="error">{errors.price?.message}</p>}
            </div>
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
          <div>
            <Body2 weight={500}>Imagem da capa</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="image_cover"
            />
            {<p className="error">{errors.image_cover?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>1° Imagem da galeria</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="image_one"
            />
            {<p className="error">{errors.image_one?.message}</p>}
          </div>
          <div>
            <Body2 weight={500}>2° Imagem da galeria</Body2>
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="image_two"
            />
            {<p className="error">{errors.image_two?.message}</p>}
          </div>
          <div className="divAddImg">
            <Body2 weight={500}>Adicionar campo para imagem da galeria</Body2>
          </div>
        </div>
      </div>
      <div className="divButton">
        <Button className="light">Excluir anúncio</Button>
        <Button type="submit" className="brand1">
          Criar anúncio
        </Button>
      </div>
    </StyledFormCreateAnnounce>
  );
};

export default FormCreateAnnounce;
