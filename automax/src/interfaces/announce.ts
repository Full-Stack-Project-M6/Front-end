import { ReactNode } from "react";
import { IBrandResponce } from "./brand";
import { IFuelResponce } from "./fuel";
import { IColorResponce } from "./color";
import { IYearResponce } from "./year";
import { IModelResponce } from "./model";
import { IImagemResponse } from "./image";
import { IUser, IUserComment } from "./user";

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
  images: string[];
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
  images: string[];
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
  image1: string;
  image2: string;
  image3: string;
}

export interface IUpdateAnnounceResponse {
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
  images: string[];
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
  images: string[];
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
  images: string[];
  brand: IBrandResponce;
  color: IColorResponce;
  fuel: IFuelResponce;
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
  images: string[];
  tag: boolean;
  brand: IBrandResponce;
  color: IColorResponce;
  fuel: IFuelResponce;
  model: IModelResponce;
  year: IYearResponce;
  user: IUser;
}

export interface IComment {
  comment: string;
}

export interface ICommentResponse {
  id: string;
  comment: string;
  createdAt: string;
  user: IUserComment;
}

export interface IUpdateComment {
  comment: string;
}

export interface IAnnounceResponceAll {
  nextUrl: string | null;
  previousUrl: string | null;
  limit: number;
  offset: number;
  total: number,
  AnnounceRepository: IAnnounce[]
}
