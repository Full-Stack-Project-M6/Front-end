import { useContext, useEffect } from "react";
import { IAnnounceCard } from "../../interfaces/announce";
import MyAnnounceCard from "../Cards/MyAnnounceCard";
import { UserContext } from "../../context/userContext";

export const ListMyAnnounceUser = () => {
  const { listAnnounceUser, renderListAnnounceUser } = useContext(UserContext);

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
