import { useContext } from "react";
import { annnounceMocked } from "../../utils";
import { Body1 } from "../Typography";
import { StyledAnnouncer } from "./style";
import { UserContext } from "../../context/userContext";
import { AnnounceContext } from "../../context/announceContext";

interface IPropsAnnouncer {
  type?: string;
}

const Announcer = (props: IPropsAnnouncer) => {
  const { user } = useContext(UserContext);
  const { announce } = useContext(AnnounceContext);

  return (
    <>
      {props.type ? (
        <StyledAnnouncer>
          <div className="divAnnouncer">
            <div className="divTagAnnouncer">
              <Body1 weight={500}>{announce?.user.name[0].toUpperCase()}</Body1>
            </div>
            <p className="body-2-500">{announce?.user.name}</p>
          </div>
        </StyledAnnouncer>
      ) : (
        <StyledAnnouncer>
          <div className="divAnnouncer">
            <div className="divTagAnnouncer">
              <Body1 weight={500}>{user?.name[0].toUpperCase()}</Body1>
            </div>
            <p className="body-2-500">{user?.name}</p>
          </div>
        </StyledAnnouncer>
      )}
    </>
  );
};

export default Announcer;
