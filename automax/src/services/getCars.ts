import { IBrand } from "../interfaces/apiCars"
import { apiKars } from "./apiKenzie"


export async function getKars(brand: string): Promise<IBrand[]> {
    const {data} = await apiKars.get<IBrand[]>(`/cars?brand=${brand}`)
    return data
}

