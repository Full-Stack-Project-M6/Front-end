import { createContext, useEffect, useState } from "react";
import {
  IAdCard,
  IAnnounceProvider,
  IAnnounceResponceAll,
  ICreateAnnounce,
  ICreateResponse,
  IUpdateAnnounceResponse,
} from "../interfaces/announce";
import { instance } from "../services/apiKenzie";
import { IAnnounceCard } from "../interfaces/announce";
import { filterArray, filterArrayByRange } from "../utils/filter";

interface IAnnounceProviderData {
  listAllAnnounce: (page: number, limit?: number) => Promise<void>;
  listAnnounce: [];
  setListAnnounce: React.Dispatch<any>;
  renderListAnnounceUser: () => void;
  listAnnounceUser: [];
  deleteAnnounce: (idAnnounce: string | undefined) => Promise<void>;
  announce: IAnnounceCard | undefined;
  setAnnounce: React.Dispatch<React.SetStateAction<IAnnounceCard | undefined>>;
  updateAnnounce: (
    idAnnounce: string | undefined,
    dataForm: IUpdateAnnounceResponse
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
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMinKm: React.Dispatch<React.SetStateAction<string>>;
  rangeKm: string[];
  setRangeKm: React.Dispatch<React.SetStateAction<string[]>>;
  minPrice: string;
  minKm: string;
  setRangePrice: React.Dispatch<React.SetStateAction<string[]>>;
  rangePrice: string[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfItems: number;
  setNumberOfItems: React.Dispatch<React.SetStateAction<number>>;
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
  const [keyFilter, setKeyFilter] = useState<string>("");
  const [elemToCompare, setElemToCompare] = useState<string>("");
  const [filteredList, setFilteredList] = useState<IAdCard[] | object[]>([]);
  const [minKm, setMinKm] = useState("0");
  const [minPrice, setMinPrice] = useState("0");
  const [rangeKm, setRangeKm] = useState<string[]>(["0", "0"]);
  const [rangePrice, setRangePrice] = useState<string[]>(["0", "0"]);
  const [page, setPage] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const fuel = ["", "Flex", "Híbrido", "Életrico"];

  useEffect(() => {
    const filteredList = filterArray(listAnnounce, keyFilter, elemToCompare);
    setFilteredList(filteredList);
  }, [keyFilter, elemToCompare]);

  useEffect(() => {
    const filteredListByRangeKm = filterArrayByRange(
      filteredList,
      "kilometer",
      rangeKm
    );
    setFilteredList(filteredListByRangeKm);
  }, [rangeKm]);

  useEffect(() => {
    const filteredListByRangePrice = filterArrayByRange(
      filteredList,
      "price",
      rangePrice
    );
    setFilteredList(filteredListByRangePrice);
  }, [rangePrice]);

  const id_user = localStorage.getItem("@User_id");

  const listAllAnnounce = async (page: number, limit = 12) => {
    const { data } = await instance.get<IAnnounceResponceAll>("/announce", {
      params: {
        limit,
        offset: page * 12,
      },
    });

    setListAnnounce(data.AnnounceRepository);
    setFilteredList(data.AnnounceRepository);
    setNumberOfItems(data.total);
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
    try {
      const { data } = await instance.post(`/announce`, announceData);
      renderListAnnounceUser();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAnnounce = async (idAnnounce: string | undefined) => {
    await instance.delete(`/announce/${idAnnounce}`);
    renderListAnnounceUser();
  };

  const updateAnnounce = async (
    idAnnounce: string | undefined,
    dataForm: IUpdateAnnounceResponse
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
        setFilteredList,
        setMinPrice,
        setMinKm,
        setRangeKm,
        rangeKm,
        minPrice,
        minKm,
        setRangePrice,
        rangePrice,
        setPage,
        page,
        setNumberOfItems,
        numberOfItems,
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};
