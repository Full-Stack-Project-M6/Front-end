import { IAnnounce, ICreateAnnounce } from "../interfaces/announce"
import {  instance } from "./apiKenzie"

export async function postAnnounce(announceData:ICreateAnnounce): Promise<IAnnounce> {
    const {data} = await instance.post<IAnnounce>(`/announce`, announceData)

    return data
}