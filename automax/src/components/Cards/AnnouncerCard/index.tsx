import { StyledAnnouncerCard } from "./style";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { annnounceMocked } from "../../../utils";
import { IAnnounceCard } from "../../../interfaces/announce";

interface IAdCardProps {
  data: IAnnounceCard;
}

const AnnouncerCard = (props: IAdCardProps) => {
  return (
    <StyledAnnouncerCard>
      <div className="divImg">
        {props.data.published ? (
          <div className="active">
            <p>Ativo</p>
          </div>
        ) : (
          <div className="noActive">
            <p>Inativo</p>
          </div>
        )}

        <img src={props.data.image_cover} alt="" />
      </div>
      <div className="divInfos">
        <Body1 weight={600}>{annnounceMocked.title}</Body1>
        <Body2>{props.data.description}</Body2>
      </div>
      <div className="divAnnouncer">
        <Announcer />
      </div>
      <div className="divKmAndPrice">
        <div>
          <Body2 weight={500}>{props.data.kilometer} KM</Body2>
          <Body2 weight={500}>{annnounceMocked.year}</Body2>
        </div>
        <div>
          <Body1 weight={600}>R$ {props.data.price},00</Body1>
        </div>
      </div>
    </StyledAnnouncerCard>
  );
};

export default AnnouncerCard;
