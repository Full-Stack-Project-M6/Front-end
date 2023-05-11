import * as yup from "yup";

export const announceSchema = yup.object().shape({
  brand: yup.string().required("Marca obrigatório"),
  model: yup.string().required("Modelo obrigatório"),
  year: yup.string().required("Ano obrigatório"),
  fuel: yup.string().required("Tipo de combustível obrigatório"),
  kilometer: yup.string().required("Quilometragem obrigatória"),
  color: yup.string().required("Cor obrigatória"),
  price_FIPE: yup.string().notRequired(),
  price: yup.string().required("Preço obrigatório"),
  description: yup.string().max(300).required("Descrição obrigatória"),
  image_cover: yup.string().required("Imagem de capa obrigatória"),
  image1: yup.string().notRequired(),
  image2: yup.string().notRequired(),
  image3: yup.string().notRequired(),
});
