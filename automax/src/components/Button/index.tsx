import { StyledButton } from "./styles"
import React from "react"


interface IButtonProps{
    className: string
    children: React.ReactNode
}

function Button(props:IButtonProps){

    return(
        <StyledButton className={props.className}>
            {props.children}
        </StyledButton>
    )
}

export default Button