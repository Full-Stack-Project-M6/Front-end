import Button from "../Button";
import { StyledMenuMobile, StyledNav } from "./style";
import { FiMenu } from "react-icons/fi";
import motorsShop from "../../assets/motorsShop.png";
import Announcer from "../Announcer";
import { IoMdClose } from "react-icons/io";
import { Body1 } from "../Typography";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { ModalContext } from "../../context/modalContext";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const { userLogout, user } = useContext(UserContext);
  const { formupdateUserSetOpen, formupdateAddressSetOpen } =
    useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <>
      <StyledNav responsive={menuMobileIsOpen}>
        <img
          src={motorsShop}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
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
            <div
              className="menu"
              onClick={() => setMenuIsOpen((prev) => !prev)}
            >
              <Announcer />
              {menuIsOpen && (
                <div className="menu__options">
                  <button
                    onClick={() => {
                      formupdateUserSetOpen(true);
                    }}
                  >
                    <Body1>Editar Perfil</Body1>
                  </button>
                  <button
                    onClick={() => {
                      formupdateAddressSetOpen(true);
                    }}
                  >
                    <Body1>Editar Endereço</Body1>
                  </button>
                  {user.account_type == true ? (
                    <Link to={"/profile"}>
                      <Body1>Meus Anúncios</Body1>
                    </Link>
                  ) : (
                    <></>
                  )}
                  <button
                    onClick={() => {
                      userLogout();
                    }}
                  >
                    <Body1>Sair</Body1>
                  </button>
                </div>
              )}
            </div>
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
