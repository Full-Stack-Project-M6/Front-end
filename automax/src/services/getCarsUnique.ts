import { IBrand } from "../interfaces/apiCars"
import { apiKars } from "./apiKenzie"

export async function getKarsUnique(brand: string, name: string, year: string, fuel: number, ): Promise<IBrand> {
    const {data} = await apiKars.get<IBrand>(`/cars/unique?brand=${brand}&name=${name}&year=${year}&fuel=${fuel}`)

    return data
}