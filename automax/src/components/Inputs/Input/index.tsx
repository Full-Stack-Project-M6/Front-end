import { IAnnounceCard } from "../../../interfaces/announce";
import { StyledInput } from "./style";

interface IPropsInput {
  width?: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
  register: Function;
  name?: string;
  defautValue?: string | undefined;
}

function Input(props: IPropsInput) {
  const register = props.register;

  const {
    width,
    placeholder,
    disabled = false,
    type = "text",
    name,
    defautValue,
  } = props;

  return (
    <StyledInput
      width={width}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      {...register(name)}
      defaultValue={defautValue}
    />
  );
}

export default Input;
