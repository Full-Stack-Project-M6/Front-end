import { NavBar } from "../../components/NavBar";
import { StyleAnnoucePage } from "./style";
import { Body1, Body2, H5, H6 } from "../../components/Typography";
import Button from "../../components/Button";
import Announcer from "../../components/Announcer";
import { Footer } from "../../components/footer";
import ModalImageCar from "../../components/Modal/ImageCar";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/modalContext";
import { AnnounceContext } from "../../context/announceContext";
import { StyledButton } from "../../components/Button/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IComment } from "../../interfaces/announce";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentSchema } from "../../validations/createCommentSchema";
import { CommentsContext } from "../../context/commentsContext";
import { ListComments } from "../../components/ListComments";
import ModalUpdateComment from "../../components/Modal/UpdateCommnets";

export const Announce = () => {
  const { openModal, setOpen, setIndexImg } = useContext(ModalContext);
  const { announce } = useContext(AnnounceContext);
  const { createComment, listComments, loading, setLoading } =
    useContext(CommentsContext);
  const navigate = useNavigate();

  useEffect(() => {
    listComments(announce?.id);
  }, [loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>({
    resolver: yupResolver(createCommentSchema),
  });

  const submit = async (data: IComment) => {
    try {
      await createComment(announce?.id, data);
      loading == 0 ? setLoading(1) : setLoading(0);
    } catch (error) {
      console.log(error);
    }
  };

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
                  {announce?.images.map((elm, index) => {
                    return (
                      <div
                        onClick={() => {
                          openModal(setOpen);
                          setIndexImg(index);
                        }}
                      >
                        <img src={elm} alt="" />
                      </div>
                    );
                  })}
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
            <ListComments />
          </div>

          <div className="divComment">
            <div>
              <Announcer />
            </div>
            <form className="divInputButton" onSubmit={handleSubmit(submit)}>
              <input
                type="text"
                className="inputComment"
                {...register("comment")}
              />
              <StyledButton className="brand1" type="submit">
                Comentar
              </StyledButton>
            </form>
            {<p className="error">{errors.comment?.message}</p>}

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
                {announce?.images.map((elm, index) => {
                  return (
                    <div
                      onClick={() => {
                        openModal(setOpen);
                        setIndexImg(index);
                      }}
                    >
                      <img src={elm} alt="" />
                    </div>
                  );
                })}
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
      <ModalUpdateComment />
      <Footer />
    </>
  );
};
