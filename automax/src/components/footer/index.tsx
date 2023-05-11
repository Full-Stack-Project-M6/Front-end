import { StyledFooter } from "./style";
import { BsFillCaretUpFill } from "react-icons/bs";
import whitelogo from "../../assets/motorsShop.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <img src={whitelogo} alt="logo" />
      <p>© 2023 - Todos os direitos reservados.</p>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <BsFillCaretUpFill />
      </button>
    </StyledFooter>
  );
};
