import { useWindowDimensions } from "../../utils"
import { StyledButton } from "./styles"

interface IButtonProps{
    className: string
    text: string
}

function Button({className, text}:IButtonProps){

    const {width} = useWindowDimensions()

    return(
        <StyledButton>
            <button className={className}>{text} - {width}</button>
        </StyledButton>
    )
}

export default Button