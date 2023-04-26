import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { annnounceMocked } from "../../utils";
import { Body1 } from "../Typography";
import { StyledAnnouncer } from "./style";

const Announcer = () => {
  const { getUSer, user } = useContext(UserContext);

  useEffect(() => {
    getUSer();
  }, []);

  return (
    <StyledAnnouncer>
      <div className="divAnnouncer">
        <div className="divTagAnnouncer">
          <Body1 weight={500}>{user?.name[0].toUpperCase()}</Body1>
        </div>
        <p className="body-2-500">{user?.name}</p>
      </div>
    </StyledAnnouncer>
  );
};

export default Announcer;
