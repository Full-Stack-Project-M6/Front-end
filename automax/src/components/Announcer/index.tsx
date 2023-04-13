import { annnounceMocked } from "../../utils";
import { Body1 } from "../Typography";
import { StyledAnnouncer } from "./style";

const Announcer = () => {
  return (
    <StyledAnnouncer>
      <div className="divAnnouncer">
        <div className="divTagAnnouncer">
          <Body1 weight={500}>{annnounceMocked.nameUser[0]}</Body1>
        </div>
        <p className="body-2-500">{annnounceMocked.nameUser}</p>
      </div>
    </StyledAnnouncer>
  );
};

export default Announcer;
