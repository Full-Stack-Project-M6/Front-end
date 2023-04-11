import { StyledAdCard } from "./style";
import { BsCurrencyDollar } from "react-icons/bs";

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
  bom: true,
};

const AdCard = () => {
  return (
    <StyledAdCard>
      <div className="divImg">
        {annnounce.bom ? (
          <div className="goodBusiness">
            <BsCurrencyDollar />
          </div>
        ) : (
          <></>
        )}

        <img src={annnounce.imgCar} alt="" />
      </div>
      <div className="divInfos">
        <h3 className="Heading-7-600">{annnounce.title}</h3>
        <p className="body-2-400">{annnounce.description}</p>
      </div>
      <div className="divAnunciante">
        <div className="divImgAnunciante">
          <img src={annnounce.imgUser} alt="" />
        </div>
        <p className="body-2-500">{annnounce.nameUser}</p>
      </div>
      <div className="divKmAndPrice">
        <div>
          <p className="body-2-500">{annnounce.km} KM</p>
          <p className="body-2-500">{annnounce.year}</p>
        </div>
        <div>
          <p className="Heading-7-500">R$ {annnounce.price}</p>
        </div>
      </div>
    </StyledAdCard>
  );
};

export default AdCard;
