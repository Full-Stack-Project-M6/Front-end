import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyleAnnoucePage = styled.div`
  .body {
    padding: 40px 12px 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
  }

  .backGround {
    width: 100vw;
    height: 436px;
    background-color: var(--colors-brand-1);

    position: absolute;
    z-index: -1;
  }

  .divImgCard {
    width: 100%;
    height: 355px;
    background-color: var(--colors-grey-10);
    margin: 0 auto;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 441px;
    }
  }

  .divInfosCar {
    width: 100%;
    padding: 44px 24px 28px 24px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .divInfoNumbers {
      display: flex;
      flex-direction: column;
      gap: 30px;

      div:first-child {
        display: flex;
        gap: 12px;

        p {
          padding: 4px 8px;
          background-color: var(--colors-brand-3);
          color: var(--colors-brand-1);
          border-radius: 4px;
        }
      }
    }
  }

  .divDescription {
    width: 100%;
    padding: 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    p {
      line-height: 28px;
    }
  }

  .divPhotos {
    padding: 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    div:first-child {
      display: flex;
    }

    .divImgs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
        display: flex;
        gap: 10px;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          width: 33.33%;
          height: 90px;
          background-color: var(--colors-grey-5);
          padding: 20px;
        }
      }
      img {
        width: 100%;
      }
    }
  }

  .divAnnoucer {
    padding: 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

    .divTagName {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 28px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 77px;
        height: 77px;
        border-radius: 50%;
        background-color: var(--colors-brand-1);
        color: var(--colors-whiteFixed);
        h5 {
          color: var(--colors-whiteFixed);
        }
      }
    }

    p {
      line-height: 28px;
    }

    button {
      width: 80%;
    }
  }

  .divComments {
    width: 100%;
    padding: 0 28px 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .divComment {
    width: 100%;
    padding: 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .divInputButton {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .inputComment {
        height: 130px;
        border-radius: 4px;
        border: 1.5px solid var(--colors-grey-0);
        padding: 0 10px;

        font-weight: 400;
        font-size: 16px;

        text-align: initial;

        &:focus {
          border: 2px solid var(--colors-brand-2);
          outline: none;
          background-color: var(--colors-grey-9);
          font-weight: 400;
          font-size: 16px;
        }
      }
    }

    .divDirt {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;

      p {
        background-color: var(--colors-grey-5);
        padding: 0 12px;
        color: var(--colors-grey-3);
      }
    }
  }

  .divAnnoucerDesck,
  .divPhotosDesck {
    display: none;
  }

  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    gap: 46px;

    .body {
      max-width: 752px;
      padding: 40px 0 0 0;
    }

    .divInfoNumbers {
      flex-direction: row !important;
      align-items: center;
      justify-content: space-between;
    }
    .divPhotosDesck {
      max-width: 440px;
      padding: 36px 28px;
      background-color: var(--colors-grey-10);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      div:first-child {
        display: flex;
      }

      .divImgs {
        display: flex;
        flex-direction: column;
        gap: 10px;
        div {
          display: flex;
          gap: 10px;
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            width: 33.33%;
            height: 90px;
            background-color: var(--colors-grey-5);
            padding: 20px;
          }
        }
        img {
          width: 100%;
        }
      }
    }

    .divAnnoucerDesck {
      max-width: 440px;
      padding: 36px 28px;
      background-color: var(--colors-grey-10);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;

      .divTagName {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 77px;
          height: 77px;
          border-radius: 50%;
          background-color: var(--colors-brand-1);
          h5 {
            color: var(--colors-whiteFixed);
          }
        }
      }

      p {
        line-height: 28px;
        text-align: center;
      }

      button {
        width: 80%;
      }
    }

    .aside {
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 34px;
    }

    .backGround {
      height: 576px;
    }

    .divComment {
      .divInputButton {
        position: relative;
      }

      button {
        position: absolute;
        right: 11px;
        bottom: 13px;
      }
    }
    .divPhotos,
    .divAnnoucer {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 146px;
  height: 48px;

  border: none;
  border-radius: 4px;

  background-color: var(--colors-brand-1);
  color: var(--colors-whiteFixed);

  font-weight: 600;
  font-size: 16px;

  @media (max-width: 768px){
  width: 119px;
  height: 38px;

  font-size: 14 px;
}

  :hover{
    background-color: var(--colors-brand-2);
    color: var(--colors-whiteFixed);
  }
`
