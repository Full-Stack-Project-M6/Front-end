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
  description: yup.string().required("Descrição obrigatória"),
  image_cover: yup.string().required("Imagem de capa obrigatória"),
  image1: yup.string().required("Imagem obrigatória"),
  image2: yup.string().required("Imagem obrigatória"),
  image3: yup.string().required("Imagem obrigatória"),
});
