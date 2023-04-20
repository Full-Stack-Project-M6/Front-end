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
  //   published: boolean;
  //   tag: boolean;
  //   user: string;
  image_one: string;
  image_two: string;
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
  //   published?: boolean;
  //   tag?: boolean;
  //   user?: string;
  image_one?: string;
  image_two?: string;
}
