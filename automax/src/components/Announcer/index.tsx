import { useContext } from "react";
import { annnounceMocked } from "../../utils";
import { Body1 } from "../Typography";
import { StyledAnnouncer } from "./style";
import { UserContext } from "../../context/userContext";
import { AnnounceContext } from "../../context/announceContext";
import { IAdCard } from "../../interfaces/announce";

interface IPropsAnnouncer {
  type?: string;
  data?: IAdCard;
}

const Announcer = (props: IPropsAnnouncer) => {
  const { user } = useContext(UserContext);
  const { announce } = useContext(AnnounceContext);

  if (props.data) {
    return (
      <StyledAnnouncer>
        <div className="divAnnouncer">
          <div className="divTagAnnouncer">
            <Body1 weight={500}>{props.data.user.name[0].toUpperCase()}</Body1>
          </div>
          <p className="body-2-500">{props.data.user.name}</p>
        </div>
      </StyledAnnouncer>
    );
  } else {
    return (
      <>
        {props.type ? (
          <StyledAnnouncer>
            <div className="divAnnouncer">
              <div className="divTagAnnouncer">
                <Body1 weight={500}>
                  {announce?.user.name[0].toUpperCase()}
                </Body1>
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
  }
};

export default Announcer;
