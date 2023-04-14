import { StyledAnnouncerCard } from "./style";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { annnounceMocked } from "../../../utils";

const AnnouncerCard = () => {
  return (
    <StyledAnnouncerCard>
      <div className="divImg">
        {annnounceMocked.active ? (
          <div className="active">
            <p>Ativo</p>
          </div>
        ) : (
          <div className="noActive">
            <p>Inativo</p>
          </div>
        )}

        <img src={annnounceMocked.imgCar} alt="" />
      </div>
      <div className="divInfos">
        <Body1 weight={600}>{annnounceMocked.title}</Body1>
        <Body2>{annnounceMocked.description}</Body2>
      </div>
      <div className="divAnnouncer">
        <Announcer />
      </div>
      <div className="divKmAndPrice">
        <div>
          <Body2 weight={500}>{annnounceMocked.km} KM</Body2>
          <Body2 weight={500}>{annnounceMocked.year}</Body2>
        </div>
        <div>
          <Body1 weight={600}>R$ {annnounceMocked.price}</Body1>
        </div>
      </div>
    </StyledAnnouncerCard>
  );
};

export default AnnouncerCard;
