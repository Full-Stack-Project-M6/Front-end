import { createContext, useState } from "react";
import { IAnnounceProvider } from "../interfaces/announce";
import { instance } from "../services/apiKenzie";
import { IUpdateAnnounce } from "../interfaces/announce";

interface IAnnounceProviderData {
  listAllAnnounce: () => void;
  listAnnounce: [];
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  deleteAnnounce: (idAnnounce: string) => Promise<void>;
  idAnnounce: string;
  setIdAnnounce: React.Dispatch<React.SetStateAction<string>>;
  updateAnnounce: (
    idAnnounce: string,
    dataForm: IUpdateAnnounce
  ) => Promise<void>;
}

export const AnnounceContext = createContext<IAnnounceProviderData>(
  {} as IAnnounceProviderData
);

export const AnnounceProvider = ({ children }: IAnnounceProvider) => {
  const [listAnnounce, setListAnnounce] = useState<any>([]);
  const [listAnnounceUser, setListAnnounceUser] = useState<any>([]);
  const [idAnnounce, setIdAnnounce] = useState("");
  const id_user = localStorage.getItem("@User_id");

  const listAllAnnounce = async () => {
    const { data } = await instance.get("/announce");

    setListAnnounce(data);
  };

  const renderListAnnounceUser = async () => {
    const { data } = await instance.get(`/announce/all/${id_user}`);

    setListAnnounceUser(data);
  };

  const deleteAnnounce = async (idAnnounce: string) => {
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
        idAnnounce,
        setIdAnnounce,
        updateAnnounce,
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};
