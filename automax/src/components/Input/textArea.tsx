import { StyledTextArea } from "./style"

interface IPropsTextArea{
    width?: string
    height?: string
    placeholder: string
    disabled?: boolean
  }

function TextArea(props:IPropsTextArea){
    
    const {width, height, placeholder, disabled=false} = props

    return(
        <StyledTextArea width={width} height={height} placeholder={placeholder} disabled={disabled}/>
    )
}

export default TextArea