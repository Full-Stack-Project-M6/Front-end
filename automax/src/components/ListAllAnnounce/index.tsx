import { useContext, useEffect, useState } from "react";
import AdCard from "../Cards/AdCard";
import { AnnounceContext } from "../../context/announceContext";
import { IAdCard } from "../../interfaces/announce";

export const ListAllAnnounce = () => {
  const { listAllAnnounce, listAnnounce, filteredList, page } = useContext(AnnounceContext);
  useEffect(() => {
    listAllAnnounce(page);
  }, [page]);

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
