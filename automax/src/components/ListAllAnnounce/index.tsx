import { useContext, useEffect } from "react";
import AdCard from "../Cards/AdCard";
import { AnnounceContext } from "../../context/announceContext";
import { IAdCard } from "../../interfaces/announce";

export const ListAllAnnounce = () => {
  const { listAllAnnounce, listAnnounce, filteredList } = useContext(AnnounceContext);
  useEffect(() => {
    listAllAnnounce();
  }, []);

  return (
    <>
      <ul>
        {filteredList.map((elm: any) => {
          // console.log(elm);
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
