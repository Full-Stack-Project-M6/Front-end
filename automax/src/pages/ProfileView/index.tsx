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
import { UserContext } from "../../context/userContext";
import { ModalContext } from "../../context/modalContext";
import { StyledButton } from "../../components/Button/styles";
import ModalFormCreateAnnounce from "../../components/Modal/FormCreateAnnounce";

export const ProfileView = () => {
  const { user } = useContext(UserContext);
  const { formAnnounceSetOpen } = useContext(ModalContext);

  return (
    <>
      <NavBar />
      <StyleSectionBg></StyleSectionBg>
      <StylePageProfileView>
        <StyleAnnouncerInfo>
          <p className="tag">{user?.name[0].toUpperCase()}</p>
          <div className="divName">
            <h4>{user?.name}</h4>
            <Button className="brandOpacity">Anunciante</Button>
          </div>
          <Body1>{user?.description}</Body1>
          <div>
            <StyledButton
              className="outlineBrand1"
              onClick={() => formAnnounceSetOpen(true)}
            >
              {" "}
              Criar anuncio
            </StyledButton>
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
      <ModalFormCreateAnnounce />
    </>
  );
};
