import { CloseIcon, StyledFormUpdateAnnounce } from "./style";
import { Body1, Body2 } from "../../Typography";
import Input from "../../Inputs/Input";
import TextArea from "../../Inputs/TextArea";
import { ModalContext } from "../../../context/modalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAnnounceSchema } from "../../../validations/createAnnounceSchema";
import { IUpdateAnnounce } from "../../../interfaces/announce";
import { StyledButton } from "../../Button/styles";
import { AnnounceContext } from "../../../context/announceContext";

const FormUpdateAnnounce = () => {
  const { closeModal, formUpdateAnnounceSetOpen, deleteAnnounceSetOpen } =
    useContext(ModalContext);
  const { idAnnounce } = useContext(AnnounceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateAnnounce>({
    resolver: yupResolver(updateAnnounceSchema),
  });

  const submit = (data: IUpdateAnnounce) => {
    data.id = idAnnounce;
    console.log(data);
  };

  return (
    <StyledFormUpdateAnnounce onSubmit={handleSubmit(submit)}>
      <div className="divHeader">
        <Body1 weight={600}>Editar anúncio</Body1>
        <CloseIcon
          onClick={() => {
            closeModal(formUpdateAnnounceSetOpen);
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
            <Input
              placeholder="Digite aqui..."
              register={register}
              name="brand"
            />
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
                name="price_FIPE"
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
            <Body2 weight={500}>Publicado</Body2>
            <div className="divButtonPublish">
              <StyledButton className="brand1Hover">Sim</StyledButton>
              <StyledButton className="brand1Hover">Não</StyledButton>
            </div>
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
        <StyledButton
          className="light"
          onClick={() => {
            deleteAnnounceSetOpen(true);
            formUpdateAnnounceSetOpen(false);
          }}
        >
          Excluir anúncio
        </StyledButton>
        <StyledButton type="submit" className="brand1">
          Salvar alterações
        </StyledButton>
      </div>
    </StyledFormUpdateAnnounce>
  );
};

export default FormUpdateAnnounce;
