import { IAdCard } from "../../../interfaces/announce";
import { annnounceMocked } from "../../../utils";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { StyledAdCard } from "./style";
import { BsCurrencyDollar } from "react-icons/bs";

interface IAdCardProps {
  data: IAdCard;
}

const AdCard = (props: IAdCardProps) => {
  return (
    <StyledAdCard>
      <div className="divImg">
        {props.data.tag ? (
          <div className="goodBusiness">
            <BsCurrencyDollar />
          </div>
        ) : (
          <></>
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
          <Body1 weight={600}>R$ {props.data.price}</Body1>
        </div>
      </div>
    </StyledAdCard>
  );
};

export default AdCard;
