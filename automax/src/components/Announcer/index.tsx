import { StyledAnnouncer } from "./style";

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

const Announcer = () => {
  return (
    <StyledAnnouncer>
      <div className="divAnnouncer">
        <div className="divTagAnnouncer">
          <p>{annnounce.nameUser[0]}</p>
        </div>
        <p className="body-2-500">{annnounce.nameUser}</p>
      </div>
    </StyledAnnouncer>
  );
};

export default Announcer;
