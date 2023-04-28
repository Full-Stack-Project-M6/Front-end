  import { CloseIcon, StyledFormCreateAnnounce } from "./style";
  import { Body1, Body2 } from "../../Typography";
  import Input from "../../Inputs/Input";
  import Button from "../../Button";
  import TextArea from "../../Inputs/TextArea";
  import { ModalContext } from "../../../context/modalContext";
  import { useContext, useEffect, useState } from "react";
  import { useForm } from "react-hook-form";
  import { ICreateAnnounce } from "../../../interfaces/announce";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { announceSchema } from "../../../validations/createAnnounceSchema";
  import { getBrands } from "../../../services/getBrand";
  import { StyledSelect } from "../../Inputs/InputSelect/style";
  import { getKars } from "../../../services/getCars";
  import { IBrand } from "../../../interfaces/apiCars";

  const FormCreateAnnounce = () => {
    const fuel = ["", "Flex", "Híbrido", "Életrico"]

    const { closeModal, formAnnounceSetOpen, } = useContext(ModalContext);

    const [listCars, setListCars] = useState<any[]>([])
    const [allCarsOfThisModel, setAllCarsOfThisModel] = useState<IBrand[]>([])
    const [listBrand, setListBrand] = useState<string[]>([])
    const [brandName, setBrandName] = useState<string>("")
    const [nameModel, setNameModel] = useState<string>("")

    useEffect(() => {

      async function getArrayNameBrands() {
        try {
          const {data} = await getBrands()
          const listBrands = Object.keys(data)
          setListBrand(listBrands)
          
        } catch (error) {
          console.log(error)
        }

      }

      async function getArrayModels(brandName:string) {
        try {
          const listCars:IBrand[] | string[] = await getKars(brandName)
          
          setListCars(listCars)        
          
        } catch (error) {
          console.log(error)
        }

      }

      async function getArrayCarOfTheChosenModel( nameModel: string) {

          if(!!listCars.length){
            const arrayCar:IBrand[] = listCars.filter((elem:IBrand) => elem.name == nameModel)
            setAllCarsOfThisModel(arrayCar)
          }
      }

      getArrayNameBrands()
      getArrayModels(brandName)
      getArrayCarOfTheChosenModel(nameModel)


    },[ brandName, nameModel ])

    const {
      register,
      handleSubmit,
      formState: { errors },
      watch
    } = useForm<ICreateAnnounce>({
      resolver: yupResolver(announceSchema),
      mode: "onChange"
    });

    const watchView = watch()
    console.log(watchView)

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
              <StyledSelect 
              width="100%" 
              {...register("brand", {
                 onChange: (e) => {setBrandName(e.target.value)} 
                })} >
                <option value="">Escolha uma opção</option> 
                {listBrand.map((brand,index) => {
                  return(
                    <option value={brand} key={index}>{brand}</option>
                  )
                })}
              </StyledSelect>  
              {<p className="error">{errors.brand?.message}</p>}
            </div>

            <div>
              <Body2 weight={500}>Modelo</Body2>
              <StyledSelect width="100%" {...register("model", {
                onChange: (e) => {setNameModel(e.target.value)}
              })} disabled={!listCars.length}>
                <option value="">Escolha uma opção</option>
                {!!listCars.length && listCars.map((car,index) => {
                  return(
                    <option value={car.name} key={index}>{car.name}</option>
                  )
                })}
              </StyledSelect>
              {<p className="error">{errors.model?.message}</p>}
            </div>

            <div className="divTwoInputs">
              <div>
                <Body2 weight={500}>Ano</Body2>
                <StyledSelect width="100%" {...register("year")} disabled={!allCarsOfThisModel.length}>
                  <option value="">Escolha o ano</option>
                  {allCarsOfThisModel.map((car:any) => {
                    return (
                      <option value={car.year} key={car.id}>{car.year}</option>
                    )
                  })}
                </StyledSelect>
                {<p className="error">{errors.year?.message}</p>}
              </div>

              <div>
                <Body2 weight={500}>Combustível</Body2>
                <StyledSelect 
                width="100%" 
                {...register("fuel")} 
                disabled={!allCarsOfThisModel.length}
                >
                  <option value="">Combustível</option>
                  {allCarsOfThisModel.map((car:any) => {
                    return (
                      <option value={car.fuel} key={car.id}>{fuel[car.fuel]}</option>
                    )
                  })}
                </StyledSelect>
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
                  disabled={!allCarsOfThisModel.length}
                  width="100%"
                />
                {<p className="error">{errors.kilometer?.message}</p>}
              </div>

              <div>
                <Body2 weight={500}>Cor</Body2>
                <StyledSelect width="100%" 
                {...register("color")} 
                disabled={!allCarsOfThisModel.length}
                >
                  <option value="">Escolha a cor</option>
                  <option value="branco">Branco</option>
                  <option value="cinza">Cinza</option>
                  <option value="preto">Preto</option>
                  <option value="prata">Prata</option>
                  <option value="azul">Azul</option>
                  <option value="vermelho">Vermelho</option>
                  <option value="vermelho">Vermelho</option>
                  <option value="marrom">Marrom</option>
                  <option value="bege">Bege</option>
                  <option value="verde">Verde</option>
                  <option value="amarelo">Amarelo</option>
                </StyledSelect>
                {<p className="error">{errors.color?.message}</p>}
              </div>
      
            </div>

            <div className="divTwoInputs">

              <div>
                <Body2 weight={500}>Preço tabela FIPE</Body2>
                <StyledSelect
                width="100%"
                {...register("price_FIPE")}
                disabled={!allCarsOfThisModel.length}
                >
                  <option value="">Escolha uma opção</option>
                  {allCarsOfThisModel.map((car:any) => {
                    return (
                      <option value={car.value} key={car.id}>{car.value.toString()}</option>
                    )
                  })}
                </StyledSelect>
              </div>

              <div>
                <Body2 weight={500}>Preço</Body2>
                <Input
                  placeholder="Digite aqui..."
                  register={register}
                  name="price"
                  disabled={!allCarsOfThisModel.length}
                  width="100%"
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
                disabled={!allCarsOfThisModel.length}
              />
              {<p className="error">{errors.description?.message}</p>}
            </div>

            <div>
              <Body2 weight={500}>Imagem da capa</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="image_cover"
                disabled={!allCarsOfThisModel.length}
                width="100%"
              />
              {<p className="error">{errors.image_cover?.message}</p>}
            </div>

            <div>
              <Body2 weight={500}>1° Imagem da galeria</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="image_one"
                disabled={!allCarsOfThisModel.length}
              />
              {<p className="error">{errors.image_one?.message}</p>}
            </div>

            <div>
              <Body2 weight={500}>2° Imagem da galeria</Body2>
              <Input
                placeholder="Digite aqui..."
                register={register}
                name="image_two"
                disabled={!allCarsOfThisModel.length}
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
