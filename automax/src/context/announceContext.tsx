import { createContext, useState } from "react";
import { IAnnounceProvider } from "../interfaces/announce";
import { instance } from "../services/apiKenzie";

interface IAnnounceProviderData {
  listAllAnnounce: () => void;
  listAnnounce: [];
}

export const AnnounceContext = createContext<IAnnounceProviderData>(
  {} as IAnnounceProviderData
);

export const AnnounceProvider = ({ children }: IAnnounceProvider) => {
  const [listAnnounce, setListAnnounce] = useState<any>([]);

  const listAllAnnounce = async () => {
    const { data } = await instance.get("/announce");

    setListAnnounce(data);
  };

  return (
    <AnnounceContext.Provider value={{ listAllAnnounce, listAnnounce }}>
      {children}
    </AnnounceContext.Provider>
  );
};
