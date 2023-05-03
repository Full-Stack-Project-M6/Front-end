import styled from "styled-components";
import banner from "../../assets/bmwRoxa.png";

export const StyledBannerDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  background-size: cover;
  height: 400px;
  padding-bottom: 1.5rem;

  &::before {
    content: "";
    background-image: url(${banner});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.8;
  }
  p {
    position: relative;
  }
  img {
    margin-top: 2.5rem;
    position: relative;
  }
  @media (min-width: 720px) {
    &::before {
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
`;
export const StyledAnnounceList = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px 86px 40px;

  aside {
    display: none;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    width: 74%;
  }
  ul li {
    margin-right: 0.4rem;
  }
  ul li:last-child {
    margin-right: 0;
  }
  button {
    text-align: inherit;
    color: var(--colors-grey-3);

    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 6px;

    cursor: pointer;
  }
  @media (min-width: 720px) {
    aside {
      display: flex;
      width: 30%;
      max-width: 285px;
    }
  }
`;
export const StyledFiltersAside = styled.aside`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
  }
  div h2 {
    margin-bottom: 0.4rem;
  }
  div a {
    margin-left: 0.4rem;
    color: var(--colors-grey-3);
  }
  .km div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .km div button {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }
  .km div button:first-child {
    margin-right: 0.6rem;
  }
`;

export const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  margin-bottom: 2rem;
  button {
    width: 200px;
  }
  div {
    display: flex;
    height: 86px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 720px) {
    .brand1 {
      display: none;
    }
  }
`;
