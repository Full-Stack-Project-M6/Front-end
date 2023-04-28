import { useContext, useEffect } from "react";
import AdCard from "../Cards/AdCard";
import { AnnounceContext } from "../../context/announceContext";
import { IAdCard } from "../../interfaces/announce";

export const ListAllAnnounce = () => {
  const { listAllAnnounce, listAnnounce } = useContext(AnnounceContext);

  useEffect(() => {
    listAllAnnounce();
  }, []);

  return (
    <>
      <ul>
        {listAnnounce.map((elm: IAdCard) => {
          console.log(elm);
          return (
            <li key={elm.id}>
              <AdCard data={elm} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
