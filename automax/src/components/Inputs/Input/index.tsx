import { StyledInput } from "./style";

interface IPropsInput {
  width?: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
  register: Function;
  name?: string;
  defaultValue?: string | undefined;
}

function Input(props: IPropsInput) {
  const register = props.register;

  const {
    width,
    placeholder,
    disabled = false,
    type = "text",
    name,
    defaultValue,
  } = props;

  return (
    <StyledInput
      width={width}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      {...register(name)}
      defaultValue={defaultValue}
    />
  );
}

export default Input;
