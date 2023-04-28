import { NavBar } from "../../components/NavBar";
import { StyleAnnoucePage } from "./style";
import { Body1, Body2, H5, H6 } from "../../components/Typography";
import Button from "../../components/Button";
import Comment from "../../components/Coments/index";
import Announcer from "../../components/Announcer";
import { annnounceMocked } from "../../utils";
import { Footer } from "../../components/footer";
import ModalImageCar from "../../components/Modal/ImageCar";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import { AnnounceContext } from "../../context/announceContext";
import { StyledButton } from "../../components/Button/styles";
import { useNavigate } from "react-router-dom";

export const Announce = () => {
  const { openModal, setOpen } = useContext(ModalContext);
  const { announce } = useContext(AnnounceContext);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <StyleAnnoucePage>
        <div className="backGround" />
        <div className="body">
          <div className="divImgCard">
            <img src={announce?.image_cover} alt="" />
          </div>
          <div className="divInfosCar">
            <H6>{announce?.model.model}</H6>
            <div className="divInfoNumbers">
              <div>
                <Body2>{announce?.year.year}</Body2>
                <Body2>{announce?.kilometer} KM</Body2>
              </div>
              <div>
                <Body1 weight={600}>R$ {announce?.price},00</Body1>
              </div>
            </div>
            <div>
              <Button className="brand1">Comprar</Button>
            </div>
          </div>
          <div className="divDescription">
            <H6>Descrição</H6>
            <Body1>{announce?.description}</Body1>
          </div>
          <div>
            <div className="divPhotos">
              <div>
                <H6>Fotos</H6>
              </div>
              <div className="divImgs">
                <div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                </div>
                <div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                  <div onClick={() => openModal(setOpen)}>
                    <img src={annnounceMocked.imgCar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divAnnoucer">
            <div className="divTagName">
              <div>
                <H5 weight={500}>{announce?.user.name[0].toUpperCase()}</H5>
              </div>
              <H6>{announce?.user.name}</H6>
            </div>
            <Body1>{announce?.user.description}</Body1>
            <StyledButton
              className="grey1"
              onClick={() => {
                navigate("/announce/public");
              }}
            >
              Ver todos anuncios
            </StyledButton>
          </div>
          <div className="divComments">
            <div>
              <H6>Comentários</H6>
            </div>
            <Comment />
            <Comment />
            <Comment />
          </div>

          <div className="divComment">
            <div>
              <Announcer />
            </div>
            <div className="divInputButton">
              <input type="text" className="inputComment" />
              <Button className="brand1">Comentar</Button>
            </div>

            <div className="divDirt">
              <p>Gostei muito</p>
              <p>Incrível</p>
              <p>Recomendo para emus amigos</p>
            </div>
          </div>
        </div>
        <aside className="aside">
          <div className="divPhotosDesck">
            <div>
              <H6>Fotos</H6>
            </div>
            <div className="divImgs">
              <div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
              </div>
              <div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
                <div onClick={() => openModal(setOpen)}>
                  <img src={annnounceMocked.imgCar} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="divAnnoucerDesck">
            <div className="divTagName">
              <div>
                <H5 weight={500}>{announce?.user.name[0].toUpperCase()}</H5>
              </div>
              <H6>{announce?.user.name}</H6>
            </div>
            <Body1>{announce?.user.description}</Body1>
            <StyledButton
              className="grey1"
              onClick={() => {
                navigate("/announce/public");
              }}
            >
              Ver todos anuncios
            </StyledButton>
          </div>
        </aside>
      </StyleAnnoucePage>
      <ModalImageCar />
      <Footer />
    </>
  );
};
