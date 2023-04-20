import { StyledTextArea } from "./style";

interface IPropsTextArea {
  width?: string;
  height?: string;
  placeholder: string;
  disabled?: boolean;
  register: Function;
  name?: string;
}

function TextArea(props: IPropsTextArea) {
  const register = props.register;

  const { width, height, placeholder, disabled = false, name } = props;

  return (
    <StyledTextArea
      width={width}
      height={height}
      placeholder={placeholder}
      disabled={disabled}
      {...register(name)}
    />
  );
}

export default TextArea;
