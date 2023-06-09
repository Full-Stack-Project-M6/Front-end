import styled from "styled-components";

export const StylePageProfileView = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    padding: 0 60px;
  }
`;

export const StyleSectionBg = styled.section`
  width: 100vw;
  height: 270px;
  position: absolute;
  z-index: -1;
  background-color: var(--colors-brand-1);
`;

export const StyleAnnouncerInfo = styled.div`
  width: 100%;
  padding: 40px 29px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: var(--colors-grey-10);
  border-radius: 4px;
  margin-top: 65px;
  margin-bottom: 198px;

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 104px;
    border-radius: 100%;
    background-color: var(--colors-brand-1);
    color: var(--colors-whiteFixed);
    font-size: 36px;
    font-weight: 500;
  }

  .divName {
    display: flex;
    align-items: center;
    gap: 17px;
    width: 100%;
  }

  .body-1-400 {
    line-height: 28px;
  }

  @media (min-width: 720px) {
    margin-bottom: 76px;
  }
`;
export const StyledShopWindow = styled.section`
  .title {
    margin-bottom: 86px;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 51px;

    li {
      max-width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0 60px 0;

    button {
      color: var(--colors-brand-2);
      background-color: transparent;
      border: none;
      font-size: 18px;
      font-weight: 600;
      margin-left: 12px;
    }

    strong {
      color: var(--colors-grey-2);
      margin-right: 6px;
      font-weight: 800;
    }

    p {
      color: var(--colors-grey-3);
      font-weight: 600;
    }
  }

  @media (max-width: 720px) {
    padding: 0;
  }
`;
