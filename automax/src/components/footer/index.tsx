import { StyledFooter } from "./style"
import { BsFillCaretUpFill } from 'react-icons/bs'

export const Footer = () => {
    return (
        <StyledFooter>
            <h2>AutoMax</h2>
            <p>© 2023 -  Todos os direitos reservados.</p>
            <button><BsFillCaretUpFill /></button>
        </StyledFooter>
    )
}