import { useContext, useEffect } from "react";
import Button from "../../components/Button";
import { NavBar } from "../../components/NavBar";
import { Body1, H5 } from "../../components/Typography";
import { Footer } from "../../components/footer";
import {
  StyleAnnouncerInfo,
  StylePageAnnouncePublic,
  StyleSectionBg,
  StyledShopWindow,
} from "./style";
import { AnnounceContext } from "../../context/announceContext";
import { ListAnnouncer } from "../../components/ListAnnouncer";

export const AnnouncePublic = () => {
  const { announce, pageAnnounce, setPageAnnounce, numberOfAnnounces, renderListAnnounceUser } = useContext(AnnounceContext);

  useEffect(() => {
    renderListAnnounceUser(pageAnnounce);
  }, [pageAnnounce]);

  return (
    <>
      <NavBar />
      <StyleSectionBg></StyleSectionBg>
      <StylePageAnnouncePublic>
        <StyleAnnouncerInfo>
          <p className="tag">{announce?.user.name[0].toUpperCase()}</p>
          <div className="divName">
            <h4>{announce?.user.name}</h4>
            <Button className="brandOpacity">Anunciante</Button>
          </div>
          <Body1>{announce?.user.description}</Body1>
        </StyleAnnouncerInfo>
        <StyledShopWindow>
          <div className="title">
            <H5>Anúncios</H5>
          </div>
          <ListAnnouncer />
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
      </StylePageAnnouncePublic>
      <Footer />
    </>
  );
};
