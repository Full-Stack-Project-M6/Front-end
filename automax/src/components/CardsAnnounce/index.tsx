import { StyledCardAnnounce } from "./style";

const CardAnnounce = () => {
  return (
    <StyledCardAnnounce>
      <div className="divImg">
        <img
          src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"
          alt=""
        />
      </div>
      <div className="divInfos">
        <h3>Product title stays here - max 1 line</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
      </div>
      <div className="divAnunciante">
        <div className="divImgAnunciante">
          <img
            src="https://images.goodsmile.info/cgm/images/product/20221222/13738/109345/large/74d528cb136ae1ab73a3bd933f9805f1.jpg"
            alt=""
          />
        </div>
        <p>Anunciante</p>
      </div>
      <div className="divKmAndPrice">
        <div>
          <p>0 KM</p>
          <p>2019</p>
        </div>
        <div>
          <p>R$ 00.000,00</p>
        </div>
      </div>
    </StyledCardAnnounce>
  );
};

export default CardAnnounce;
