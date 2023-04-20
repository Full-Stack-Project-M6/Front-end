import * as yup from "yup";

export const announceSchema = yup.object().shape({
  brand: yup.string().required("Marca obrigatório"),
  model: yup.string().required("Modelo obrigatório"),
  year: yup.string().required("Ano obrigatório"),
  fuel: yup.string().required("Tipo de combustível obrigatório"),
  kilometer: yup.string().required("Quilometragem obrigatória"),
  color: yup.string().required("Cor obrigatória"),
  // price_FIPE: yup.string().required(""),
  price: yup.string().required("Preço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  image_cover: yup.string().required("Imagem de capa obrigatória"),
  //   published: yup.boolean().required(""),
  //   tag: yup.boolean().required(""),
  //   user: yup.string().required(""),
  image_one: yup.string().required("Imagem obrigatória"),
  image_two: yup.string().required("Imagem obrigatória"),
});

export const updateAnnounceSchema = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  kilometer: yup.string().notRequired(),
  color: yup.string().notRequired(),
  // price_FIPE: yup.string().notRequired(),
  price: yup.string().notRequired(),
  description: yup.string().notRequired(),
  image_cover: yup.string().notRequired(),
  //   published: yup.boolean().notRequired(),
  //   tag: yup.boolean().notRequired(),
  //   user: yup.string().notRequired(),
  image_one: yup.string().notRequired(),
  image_two: yup.string().notRequired(),
});
