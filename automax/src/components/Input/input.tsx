import { StyledInput } from "./style"

interface IPropsInput{
    width?: string
    placeholder: string
    disabled?: boolean
    type?:string
  }

function Input(props:IPropsInput){

    const {width, placeholder, disabled=false, type="text"} = props

    return (
        <StyledInput width={width} disabled={disabled} placeholder={placeholder} type={type}/>
    )
}

export default Input