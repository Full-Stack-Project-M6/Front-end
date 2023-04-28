import { useNavigate } from "react-router-dom";
import { IAdCard } from "../../../interfaces/announce";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { StyledAdCard } from "./style";
import { BsCurrencyDollar } from "react-icons/bs";
import { useContext } from "react";
import { AnnounceContext } from "../../../context/announceContext";

interface IAdCardProps {
  data: IAdCard;
}

const AdCard = (props: IAdCardProps) => {
  const navigate = useNavigate();
  const { setAnnounce } = useContext(AnnounceContext);

  return (
    <StyledAdCard>
      <div
        className="divImg"
        onClick={() => {
          navigate("/announce");
          setAnnounce(props.data);
        }}
      >
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
        <Body1 weight={600}>{props.data.model.model}</Body1>
        <Body2>{props.data.description}</Body2>
      </div>
      <div className="divAnnouncer">
        <Announcer type="announcer" />
      </div>
      <div className="divKmAndPrice">
        <div>
          <Body2 weight={500}>{props.data.kilometer} KM</Body2>
          <Body2 weight={500}>{props.data.year.year}</Body2>
        </div>
        <div>
          <Body1 weight={600}>R$ {props.data.price}</Body1>
        </div>
      </div>
    </StyledAdCard>
  );
};

export default AdCard;
