import { StyledButton } from "./styles"

interface IButtonProps{
    className: string
    text: string
}

function Button({className, text}:IButtonProps){

    return(
        <StyledButton>
            <button className={className}>{text}</button>
        </StyledButton>
    )
}

export default Button