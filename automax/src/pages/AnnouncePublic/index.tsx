import { useContext } from "react";
import Button from "../../components/Button";
import { ListMyAnnounceUser } from "../../components/ListMyAnnounceUser";
import { NavBar } from "../../components/NavBar";
import { Body1, H5 } from "../../components/Typography";
import { Footer } from "../../components/footer";
import {
  StyleAnnouncerInfo,
  StylePageProfileView,
  StyleSectionBg,
  StyledShopWindow,
} from "./style";
import { AnnounceContext } from "../../context/announceContext";

export const AnnouncePublic = () => {
  const { announce } = useContext(AnnounceContext);

  return (
    <>
      <NavBar />
      <StyleSectionBg></StyleSectionBg>
      <StylePageProfileView>
        <StyleAnnouncerInfo>
          <p className="tag">{announce?.user.name[0].toUpperCase()}</p>
          <div className="divName">
            <h4>{announce?.user.name}</h4>
            <Button className="brandOpacity">Anunciante</Button>
          </div>
          <Body1>{announce?.user.description}</Body1>
          <div>
            <Button className="outlineBrand1"> Criar anuncio</Button>
          </div>
        </StyleAnnouncerInfo>
        <StyledShopWindow>
          <div className="title">
            <H5>Anúncios</H5>
          </div>
          <ListMyAnnounceUser />
          <div className="pagination">
            <p>
              <strong>1</strong>de 2
            </p>
            <button>Seguinte &gt;</button>
          </div>
        </StyledShopWindow>
      </StylePageProfileView>
      <Footer />
    </>
  );
};
