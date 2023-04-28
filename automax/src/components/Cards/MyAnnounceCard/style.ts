import styled from "styled-components";

export const StyledMyAnnounceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  height: 350px;

  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 150px;
    margin-bottom: 16px;
    position: relative;

    img {
      width: 70%;
    }
  }

  .divInfos {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    p {
      text-align: left;
      margin: 16px 0 0;
      color: var(--colors-grey-0);
    }
    margin-bottom: 16px;
  }

  .divAnnouncer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .divKmAndPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    div:first-child {
      gap: 20px;
      display: flex;
      p {
        color: var(--colors-brand-1);
      }
    }

    div:nth-child(2) {
      p {
        color: var(--colors-grey-0);
      }
    }
  }

  .divButton {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    width: 100%;
    margin-top: 20px;

    button {
      width: max-content;
      height: max-content;
      padding: 8px 15px;
    }
  }

  @media (max-width: 430px) {
    width: 83%;
  }
`;
