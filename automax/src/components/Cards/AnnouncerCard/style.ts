import styled from "styled-components";

export const StyledAnnouncerCard = styled.div`
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

    .active {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      padding: 8px;
      background-color: var(--colors-brand-1);
      color: var(--colors-whiteFixed);

      position: absolute;
      left: 16px;
      top: 11px;
    }

    .noActive {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      padding: 8px;
      background-color: var(--colors-grey-4);
      color: var(--colors-whiteFixed);

      position: absolute;
      left: 16px;
      top: 11px;
    }

    img {
      width: 70%;
    }
  }

  .divInfos {
    display: flex;
    flex-direction: column;
    align-items: start;
    h3 {
      margin: 0;
    }

    p {
      text-align: left;
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
      gap: 20px;
      display: flex;
    }

    p {
      margin: 0;
    }
  }

  @media (max-width: 430px) {
    width: 83%;
  }
`;
