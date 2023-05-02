import { createContext, useEffect, useState } from "react";
import {
  IAdCard,
  IAnnounce,
  IAnnounceProvider,
  ICreateAnnounce,
  ICreateResponse
} from "../interfaces/announce";
import { instance } from "../services/apiKenzie";
import { IUpdateAnnounce } from "../interfaces/announce";
import { IAnnounceCard } from "../interfaces/announce";
import { filterArray } from "../utils/filter";

interface IAnnounceProviderData {
  listAllAnnounce: () => void;
  listAnnounce: [];
  setListAnnounce: React.Dispatch<any>;
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  deleteAnnounce: (idAnnounce: string | undefined) => Promise<void>;
  announce: IAnnounceCard | undefined;
  setAnnounce: React.Dispatch<React.SetStateAction<IAnnounceCard | undefined>>;
  updateAnnounce: (
    idAnnounce: string | undefined,
    dataForm: IUpdateAnnounce
  ) => Promise<void>;
  idAnnouncer: string;
  setIdAnnouncer: React.Dispatch<React.SetStateAction<string>>;
  listAnnouncer: [];
  renderListAnnouncer: (id: string | undefined) => Promise<void>;
  createAnnounce: (announceData: ICreateAnnounce) => Promise<ICreateResponse>;
  fuel: string[];
  keyFilter: string;
  setKeyFilter: React.Dispatch<React.SetStateAction<string>>;
  elemToCompare: string;
  setElemToCompare: React.Dispatch<React.SetStateAction<string>>;
  filteredList: IAdCard[] | object[];
  setFilteredList: React.Dispatch<React.SetStateAction<IAdCard[] | object[]>>;
}

export const AnnounceContext = createContext<IAnnounceProviderData>(
  {} as IAnnounceProviderData
);

export const AnnounceProvider = ({ children }: IAnnounceProvider) => {
  const [listAnnounce, setListAnnounce] = useState<any>([]);
  const [listAnnounceUser, setListAnnounceUser] = useState<any>([]);
  const [announce, setAnnounce] = useState<IAnnounceCard>();
  const [idAnnouncer, setIdAnnouncer] = useState("");
  const [listAnnouncer, setListAnnouncer] = useState<any>([]);
  const [ keyFilter, setKeyFilter ] = useState<string>("")
  const [ elemToCompare, setElemToCompare ] = useState<string>("")
  const [ filteredList, setFilteredList ] = useState<IAdCard[] | object[]>([])
  const fuel = ["", "Flex", "Híbrido", "Életrico"]

  useEffect(() => {
    const filteredList = filterArray(listAnnounce, keyFilter, elemToCompare)
    setFilteredList(filteredList)
  }, [keyFilter, elemToCompare])

  const id_user = localStorage.getItem("@User_id");

  const listAllAnnounce = async () => {
    const { data } = await instance.get("/announce");

    setListAnnounce(data);
    setFilteredList(data)
  };

  const renderListAnnouncer = async (id: string | undefined) => {
    const { data } = await instance.get(`/announce/all/${id}`);

    setListAnnouncer(data.announce);
  };

  const renderListAnnounceUser = async () => {
    const { data } = await instance.get(`/announce/all/${id_user}`);

    setListAnnounceUser(data.announce);
  };

  const createAnnounce = async (announceData: ICreateAnnounce) => {
    const { data } = await instance.post<ICreateResponse>(
      `/announce`,
      announceData
    );

    return data;
  };

  const deleteAnnounce = async (idAnnounce: string | undefined) => {
    await instance.delete(`/announce/${idAnnounce}`);
    renderListAnnounceUser();
  };

  const updateAnnounce = async (
    idAnnounce: string | undefined,
    dataForm: IUpdateAnnounce
  ) => {
    await instance.patch(`/announce/${idAnnounce}`, dataForm);
    renderListAnnounceUser();
  };

  return (
    <AnnounceContext.Provider
      value={{
        listAllAnnounce,
        listAnnounce,
        renderListAnnounceUser,
        listAnnounceUser,
        deleteAnnounce,
        announce,
        setAnnounce,
        updateAnnounce,
        idAnnouncer,
        setIdAnnouncer,
        listAnnouncer,
        setListAnnounce,
        renderListAnnouncer,
        createAnnounce,
        fuel,
        keyFilter,
        setKeyFilter,
        elemToCompare,
        setElemToCompare,
        filteredList,
        setFilteredList
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};
