import { useContext, useEffect } from "react";
import { IAnnounceCard } from "../../interfaces/announce";
import AnnouncerCard from "../Cards/AnnouncerCard";
import { UserContext } from "../../context/userContext";

export const ListAnnounceUser = () => {
  const { listAnnounceUser, renderListAnnounceUser } = useContext(UserContext);

  useEffect(() => {
    renderListAnnounceUser();
  }, []);

  return (
    <>
      <ul>
        {listAnnounceUser.map((elm: IAnnounceCard) => {
          console.log(elm);
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
