import { StyledMyAnnounceCard } from "./style";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";
import { annnounceMocked } from "../../../utils";
import { IAnnounceCard } from "../../../interfaces/announce";
import { StyledButton } from "../../Button/styles";
import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";
import { UserContext } from "../../../context/userContext";

interface IAdCardProps {
  data: IAnnounceCard;
}

const MyAnnounceCard = (props: IAdCardProps) => {
  const { formUpdateAnnounceSetOpen } = useContext(ModalContext);
  const { setIdAnnounce } = useContext(UserContext);

  return (
    <StyledMyAnnounceCard>
      <div className="divImg">
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
      <div className="divButton">
        <StyledButton
          className="outline1"
          onClick={() => {
            setIdAnnounce(props.data.id);

            formUpdateAnnounceSetOpen(true);
          }}
        >
          Editar
        </StyledButton>
        <StyledButton className="outline1">Ver detalhes</StyledButton>
      </div>
    </StyledMyAnnounceCard>
  );
};

export default MyAnnounceCard;
