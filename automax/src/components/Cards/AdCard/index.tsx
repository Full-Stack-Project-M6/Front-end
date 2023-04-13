import { annnounceMocked } from "../../../utils";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { StyledAdCard } from "./style";
import { BsCurrencyDollar } from "react-icons/bs";

const AdCard = () => {
  return (
    <StyledAdCard>
      <div className="divImg">
        {annnounceMocked.bom ? (
          <div className="goodBusiness">
            <BsCurrencyDollar />
          </div>
        ) : (
          <></>
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
    </StyledAdCard>
  );
};

export default AdCard;
