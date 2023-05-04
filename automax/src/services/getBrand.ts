import { IResponseCars } from "../interfaces/brand"
import { apiKars } from "./apiKenzie"


export async function getBrands(): Promise<IResponseCars> {
    const data: IResponseCars = await apiKars.get(`/cars`)

    return data
}