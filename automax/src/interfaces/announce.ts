import { ReactNode } from "react";
import { IBrandResponce } from "./brand";
import { IFuelResponce } from "./fuel";
import { IColorResponce } from "./color";
import { IYearResponce } from "./year";
import { IModelResponce } from "./model";
import { IImagemResponse } from "./image";
import { IBrand } from "./apiCars";
import { IUser } from "./user";

export interface ICreateAnnounce {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  kilometer: string;
  color: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  }
}

export interface ICreateAnnounceData {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  kilometer: string;
  color: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  image1: string;
  image2: string;
  image3: string;
}

export interface ICreateResponse {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  kilometer: string;
  color: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  }
}

export interface IUpdateAnnounce {
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  kilometer?: string;
  color?: string;
  price_FIPE?: string;
  price?: string;
  description?: string;
  image_cover?: string;
  published: boolean;
  image_one?: string;
  image_two?: string;
}

export interface IAnnounce {
  id: string;
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
  tag: boolean;
  brand: IBrandResponce;
  fuel: IFuelResponce;
  color: IColorResponce;
  year: IYearResponce;
  model: IModelResponce;
  image: IImagemResponse;
}
export interface IAnnounceProvider {
  children: ReactNode;
}

export interface IAdCard {
  id: string;
  description: string;
  image_cover: string;
  kilometer: string;
  price: string;
  price_FIPE: string;
  published: boolean;
  tag: boolean;
  brand: IBrandResponce;
  color: IColorResponce;
  fuel: IFuelResponce;
  image: IImagemResponse;
  model: IModelResponce;
  year: IYearResponce;
  user: IUser;
}

export interface IAnnounceCard {
  id: string;
  description: string;
  image_cover: string;
  kilometer: string;
  price: string;
  price_FIPE: string;
  published: boolean;
  tag: boolean;
  brand: IBrandResponce;
  color: IColorResponce;
  fuel: IFuelResponce;
  image: IImagemResponse;
  model: IModelResponce;
  year: IYearResponce;
  user: IUser;
}
