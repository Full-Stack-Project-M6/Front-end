import { StyledTextArea } from "./style";

interface IPropsTextArea {
  width?: string;
  height?: string;
  placeholder: string;
  disabled?: boolean;
  register: Function;
  name?: string;
  defaultValue?: string | undefined;
}

function TextArea(props: IPropsTextArea) {
  const register = props.register;

  const {
    width,
    height,
    placeholder,
    disabled = false,
    name,
    defaultValue,
  } = props;

  return (
    <StyledTextArea
      width={width}
      height={height}
      placeholder={placeholder}
      disabled={disabled}
      {...register(name)}
      defaultValue={defaultValue}
    />
  );
}

export default TextArea;
