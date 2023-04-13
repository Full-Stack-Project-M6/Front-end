import Button from "../Button"
import { StyledNav } from "./style"
import { FiMenu } from 'react-icons/fi'
import blacklogo from '../../assets/blackLogo.png'

export const NavBar = () => {
    return (
        <StyledNav>
            <img src={blacklogo} alt="logo" />
            <FiMenu />
            <div>
                <Button className="ooutlineBrand1" >
                    {"Fazer Login"}
                </ Button> 
                <Button className="outline2" >
                    {"Cadastrar"}
                </ Button> 
            </div>
        </StyledNav>
    )
}