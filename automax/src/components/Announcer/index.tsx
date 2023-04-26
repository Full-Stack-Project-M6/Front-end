import { useContext } from "react";
import { annnounceMocked } from "../../utils";
import { Body1 } from "../Typography";
import { StyledAnnouncer } from "./style";
import { UserContext } from "../../context/userContext";

const Announcer = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledAnnouncer>
      <div className="divAnnouncer">
        <div className="divTagAnnouncer">
          <Body1 weight={500}>{user?.name[0]}</Body1>
        </div>
        <p className="body-2-500">{user?.name}</p>
      </div>
    </StyledAnnouncer>
  );
};

export default Announcer;
