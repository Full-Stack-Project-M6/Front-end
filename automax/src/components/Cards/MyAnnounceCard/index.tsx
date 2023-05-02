import { StyledMyAnnounceCard } from "./style";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { IAnnounceCard } from "../../../interfaces/announce";
import { StyledButton } from "../../Button/styles";
import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";
import { AnnounceContext } from "../../../context/announceContext";
import { useNavigate } from "react-router-dom";

interface IAdCardProps {
  data: IAnnounceCard;
}

const MyAnnounceCard = (props: IAdCardProps) => {
  const { formUpdateAnnounceSetOpen } = useContext(ModalContext);
  const { setAnnounce } = useContext(AnnounceContext);
  const navigate = useNavigate();

  return (
    <StyledMyAnnounceCard>
      <div className="divImg">
        <img src={props.data.image_cover} alt="" />
      </div>
      <div className="divInfos">
        <Body1 weight={600}>{props.data.model.model}</Body1>
        <Body2>{props.data.description}</Body2>
      </div>
      <div className="divAnnouncer">
        <Announcer />
      </div>
      <div className="divKmAndPrice">
        <div>
          <Body2 weight={500}>{props.data.kilometer} KM</Body2>
          <Body2 weight={500}>{props.data.year.year}</Body2>
        </div>
        <div>
          <Body1 weight={600}>R$ {props.data.price},00</Body1>
        </div>
      </div>
      <div className="divButton">
        <StyledButton
          className="outline1"
          onClick={() => {
            setAnnounce(props.data);
            formUpdateAnnounceSetOpen(true);
          }}
        >
          Editar
        </StyledButton>
        <StyledButton
          className="outline1"
          onClick={() => {
            // console.log(props.data);

            setAnnounce(props.data);
            navigate("/announce", { replace: true });
          }}
        >
          Ver detalhes
        </StyledButton>
      </div>
    </StyledMyAnnounceCard>
  );
};

export default MyAnnounceCard;
