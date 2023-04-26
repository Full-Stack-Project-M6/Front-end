import Button from "../Button";
import { StyledLink, StyledMenuMobile, StyledNav } from "./style";
import { FiMenu } from "react-icons/fi";
import motorsShop from "../../assets/motorsShop.png";
import Announcer from "../Announcer";
import { IoMdClose } from "react-icons/io";
import { Body1 } from "../Typography";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { IUser } from "../../interfaces/user";


export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const {userLogout, user} = useContext(UserContext)
  return (
    <>
      <StyledNav responsive={menuMobileIsOpen}>
        <img src={motorsShop} alt="logo" />
        {menuMobileIsOpen ? (
          <button
            className="mobile"
            onClick={() => setMenuMobileIsOpen((prev) => !prev)}
          >
            <IoMdClose />
          </button>
        ) : (
          <button
            className="mobile"
            onClick={() => setMenuMobileIsOpen((prev) => !prev)}
          >
            <FiMenu />
          </button>
        )}
        <div>
          {user ? (
            <button
              className="menu"
              onClick={() => setMenuIsOpen((prev) => !prev)}
            >
              <Announcer />
              {menuIsOpen && (
                <div className="menu__options">
                  <StyledLink to={"/"}>
                    <Body1>Editar Perfil</Body1>
                  </StyledLink>
                  <StyledLink to={"/"}>
                    <Body1>Editar Endereço</Body1>
                  </StyledLink>
                  <StyledLink to={"/"}>
                    <Body1>Meus Anúncios</Body1>
                  </StyledLink>
                  <button onClick={userLogout}>
                    <Body1>Sair</Body1>
                  </button>
                </div>
              )}
            </button>
          ) : (
            <>
              <Link to="/login">
                <Button className="ooutlineBrand1">{"Fazer Login"}</Button>
              </Link>
              <Link to="/register">
                <Button className="outline2">{"Cadastrar"}</Button>
              </Link>
            </>
          )}
        </div>
      </StyledNav>
      {menuMobileIsOpen && (
        <StyledMenuMobile>
          <Body1 weight={600}>Fazer Login</Body1>
          <Button className="outline2">Cadastrar</Button>
        </StyledMenuMobile>
      )}
    </>
  );
};
