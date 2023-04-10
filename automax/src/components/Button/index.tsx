import { useWindowDimensions } from "../../utils"
import { StyledButton } from "./styles"
import {
    ButtonBigText,
    ButtonMediumText
} from "../Typography"


interface IButtonProps{
    className: string
    text: string
}

function Button({className, text}:IButtonProps){

    const {width} = useWindowDimensions()
    const ButtonText = width > 768? ButtonBigText : ButtonMediumText 

    return(
        <ButtonText children = {text}></ButtonText>
    )
}

export default Button