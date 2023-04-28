import { useContext, useEffect } from "react";
import { IAnnounceCard } from "../../interfaces/announce";
import MyAnnounceCard from "../Cards/MyAnnounceCard";
import { AnnounceContext } from "../../context/announceContext";
import AnnouncerCard from "../Cards/AnnouncerCard";

export const ListAnnouncer = () => {
  const { listAnnouncer, renderListAnnouncer } = useContext(AnnounceContext);
  const { announce } = useContext(AnnounceContext);

  useEffect(() => {
    renderListAnnouncer(announce?.user.id);
  }, []);

  return (
    <>
      <ul>
        {listAnnouncer.map((elm: IAnnounceCard) => {
          return (
            <li key={elm.id}>
              <AnnouncerCard data={elm} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
