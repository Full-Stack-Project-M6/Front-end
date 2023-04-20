import Button from "../../components/Button";
import AnnouncerCard from "../../components/Cards/AnnouncerCard";
import { NavBar } from "../../components/NavBar";
import { Body1 } from "../../components/Typography";
import { Footer } from "../../components/footer";
import {
  StyleAnnouncerInfo,
  StylePageProfileView,
  StyleSectionBg,
} from "./style";

export const ProfileView = () => {
  return (
    <>
      <NavBar variant="logged" />
      <StyleSectionBg></StyleSectionBg>
      <StylePageProfileView>
        <StyleAnnouncerInfo>
          <p className="tag">SL</p>
          <div className="divName">
            <h4>Samuel Leão</h4>
            <Button className="brandOpacity">Anunciante</Button>
          </div>
          <Body1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Body1>
          <div>
            <Button className="outlineBrand1"> Criar anuncio</Button>
          </div>
        </StyleAnnouncerInfo>
        <section>
          <ul>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
            <li>
              <AnnouncerCard />
            </li>
          </ul>
          <div>
            <p>1 de 2</p>
            <h2>Seguinte</h2>
          </div>
        </section>
      </StylePageProfileView>
      <Footer />
    </>
  );
};
