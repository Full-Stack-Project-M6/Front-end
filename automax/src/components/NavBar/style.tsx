import styled from "styled-components";

interface INavBar {
  responsive: boolean;
}

export const StyledNav = styled.nav<INavBar>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;

  height: 80px;

  background-color: var(--colors-grey-10);

  border-bottom: ${(props) =>
    props.responsive
      ? "2px solid transparent"
      : "2px solid var(--colors-grey-6)"};
  /* border-bottom: 2px solid var(--colors-grey-6); */

  img {
    width: 125px;
  }
  & > div {
    display: none;
    padding: 21px 0 20px 0;
    border-left: 2px solid var(--colors-grey-6);
    height: 100%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 44px;
  }

  .menu .menu__options {
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: absolute;
    top: 40px;
    left: 28px;
    z-index: 1;

    background-color: var(--colors-grey-9);

    padding: 21px 22px;
    width: max-content;
    align-items: flex-start;
    box-shadow: 0px 0px 20px -3px var(--colors-grey-2);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 720px) {
    .mobile {
      display: none;
    }
    div {
      display: flex;
    }
  }
`;

export const StyledMenuMobile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  position: absolute;
  z-index: 1;

  width: 100%;

  background: #fff;

  box-shadow: 0px 16px 25px -18px var(--colors-grey-2);

  padding: 32px 0 32px 60px;
`;
