import { createContext, useState } from "react";
import { IAnnounce, IAnnounceProvider, ICreateAnnounce } from "../interfaces/announce";
import { instance } from "../services/apiKenzie";
import { IUpdateAnnounce } from "../interfaces/announce";
import { IAnnounceCard } from "../interfaces/announce";

interface IAnnounceProviderData {
  listAllAnnounce: () => void;
  listAnnounce: [];
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  deleteAnnounce: (idAnnounce: string | undefined) => Promise<void>;
  announce: IAnnounceCard | undefined;
  setAnnounce: React.Dispatch<React.SetStateAction<IAnnounceCard | undefined>>;
  updateAnnounce: (
    idAnnounce: string,
    dataForm: IUpdateAnnounce
  ) => Promise<void>;
  idAnnouncer: string;
  setIdAnnouncer: React.Dispatch<React.SetStateAction<string>>;
  listAnnouncer: [];
  renderListAnnouncer: (id: string | undefined) => Promise<void>;
  createAnnounce: (announceData: ICreateAnnounce) => Promise<IAnnounce> 
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
  const id_user = localStorage.getItem("@User_id");

  const listAllAnnounce = async () => {
    const { data } = await instance.get("/announce");

    setListAnnounce(data);
  };

  const renderListAnnouncer = async (id: string | undefined) => {
    const { data } = await instance.get(`/announce/all/${id}`);

    setListAnnouncer(data.announce);
  };

  const renderListAnnounceUser = async () => {
    const { data } = await instance.get(`/announce/all/${id_user}`);

    setListAnnounceUser(data.announce);
  };

  const createAnnounce = async (announceData:ICreateAnnounce) =>{
    const {data} = await instance.post<IAnnounce>(`/announce`, announceData)

    return data
}

  const deleteAnnounce = async (idAnnounce: string | undefined) => {
    await instance.delete(`/announce/${idAnnounce}`);
    renderListAnnounceUser();
  };

  const updateAnnounce = async (
    idAnnounce: string,
    dataForm: IUpdateAnnounce
  ) => {
    await instance.patch(`/announce/${idAnnounce}`, dataForm);
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
        renderListAnnouncer,
        createAnnounce
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};
