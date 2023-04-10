import styled, { css } from "styled-components";

export const StyledCardAnnounce = styled.div`
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
    border: 3px solid transparent;
    margin-bottom: 16px;

    img {
      width: 70%;
    }

    :hover {
      border-color: purple;
      img {
        width: 80%;
      }
    }
  }

  .divInfos {
    h3 {
      margin: 0;
    }

    p {
      margin: 16px 0 0;
    }
    margin-bottom: 16px;
  }

  .divAnunciante {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 30px;
    }
    p {
      margin: 0;
    }
  }

  .divKmAndPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    div:first-child {
      display: flex;
    }

    p {
      margin: 0;
    }
  }
`;
