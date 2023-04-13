import styled from "styled-components";

export const StyleAnnoucePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  gap: 17px;

  .backGround {
    width: 100vw;
    height: 436px;
    background-color: var(--colors-brand-1);

    position: absolute;
    z-index: -1;
  }

  .divImgCard {
    height: 355px;
    background-color: var(--colors-grey-10);
    margin: 0 auto;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  .divInfosCar {
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
    padding: 36px 28px;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
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
    padding: 36px 28px;
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

    input {
      height: 130px;
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
`;
