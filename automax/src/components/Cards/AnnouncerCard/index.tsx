import { StyledAnnouncerCard } from "./style";
import Announcer from "../../Announcer";
import { Body1, Body2 } from "../../Typography";

const annnounce = {
  imgCar:
    "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960",
  title: "Product title stays here - max 1 line",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  imgUser:
    "https://images.goodsmile.info/cgm/images/product/20221222/13738/109345/large/74d528cb136ae1ab73a3bd933f9805f1.jpg",
  nameUser: "Anunciante",
  km: "10.000",
  year: "2010",
  price: "80.000,00",
  active: false,
};

const AnnouncerCard = () => {
  return (
    <StyledAnnouncerCard>
      <div className="divImg">
        {annnounce.active ? (
          <div className="active">
            <p>Ativo</p>
          </div>
        ) : (
          <div className="noActive">
            <p>Inativo</p>
          </div>
        )}

        <img src={annnounce.imgCar} alt="" />
      </div>
      <div className="divInfos">
        <Body1 weight={600}>{annnounce.title}</Body1>
        <Body2>{annnounce.description}</Body2>
      </div>
      <div className="divAnnouncer">
        <Announcer />
      </div>
      <div className="divKmAndPrice">
        <div>
          <Body2 weight={500}>{annnounce.km} KM</Body2>
          <Body2 weight={500}>{annnounce.year}</Body2>
        </div>
        <div>
          <Body1 weight={600}>R$ {annnounce.price}</Body1>
        </div>
      </div>
    </StyledAnnouncerCard>
  );
};

export default AnnouncerCard;
