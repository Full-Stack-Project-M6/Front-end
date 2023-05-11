import { useContext, useEffect } from "react";
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
import { AnnounceContext } from "../../context/announceContext";

export const ProfileView = () => {
  const { user } = useContext(UserContext);
  const { formAnnounceSetOpen } = useContext(ModalContext);
  const { pageAnnounce, numberOfAnnounces, setPageAnnounce, renderListAnnounceUser } = useContext(AnnounceContext);

  useEffect(() => {
    renderListAnnounceUser(pageAnnounce);
  }, [pageAnnounce]);

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
          {pageAnnounce + 1 > 1 ?
            <button
            onClick={() => setPageAnnounce((oldPage) => oldPage - 1)}
            >
            &lt; Anterior
            </button>
            :
            <></>
          }
            <p>
              <strong>{pageAnnounce + 1}</strong>de {Math.ceil(numberOfAnnounces/8)}
            </p>
            {pageAnnounce + 1 != Math.ceil(numberOfAnnounces/8) ?
            <button
            onClick={() => setPageAnnounce((oldPage) => oldPage + 1)}
            >
            Seguinte &gt;
            </button>
            :
            <></>
          }
          </div>
        </StyledShopWindow>
      </StylePageProfileView>
      <Footer />
      <ModalFormCreateAnnounce />
    </>
  );
};
