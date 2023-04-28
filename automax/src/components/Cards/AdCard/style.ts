import styled from "styled-components";

export const StyledAdCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  height: 350px;
  background-color: white;

  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 150px;
    border: 2.5px solid transparent;
    margin-bottom: 16px;
    position: relative;
    cursor: pointer;

    .goodBusiness {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 27px;
      background-color: var(--colors-ramdom-7);
      color: var(--colors-whiteFixed);
      border-radius: 2px;

      position: absolute;
      right: 0;
      top: 0;
    }

    img {
      width: 70%;
    }

    :hover {
      border-color: var(--colors-brand-1);
    }
  }

  .divInfos {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

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

    p {
      color: var(--colors-grey-0);
    }
  }

  @media (max-width: 430px) {
    width: 83%;
  }
`;
