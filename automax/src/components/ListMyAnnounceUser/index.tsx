import { useContext, useEffect } from "react";
import { IAnnounceCard } from "../../interfaces/announce";
import MyAnnounceCard from "../Cards/MyAnnounceCard";
import { AnnounceContext } from "../../context/announceContext";

export const ListMyAnnounceUser = () => {
  const { listAnnounceUser, renderListAnnounceUser } =
    useContext(AnnounceContext);

  useEffect(() => {
    renderListAnnounceUser();
  }, []);

  return (
    <>
      <ul>
        {listAnnounceUser.map((elm: IAnnounceCard) => {
          return (
            <li key={elm.id}>
              <MyAnnounceCard data={elm} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
