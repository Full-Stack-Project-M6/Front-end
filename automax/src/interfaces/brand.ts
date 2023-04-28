export interface IBrandRequest{
    brand:string
}

export interface IBrandResponce{
    id:string
    brand:string
}

export interface IBrandUpdate{
    brand:string
}

export interface IResponseCars {
    data: IBrandCars;
}

export interface INameCars {
    name: string
}

export interface IBrandCars {
    chevrolet: INameCars[]
    citroën: INameCars[]
    fiat: INameCars[]
    ford: INameCars[]
    honda: INameCars[]
    hyundai: INameCars[]
    nissan: INameCars[]
    peugeot: INameCars[]
    renault: INameCars[]
    toyota: INameCars[]
    volkswagen: INameCars[]
}