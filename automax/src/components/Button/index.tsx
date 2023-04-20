import { StyledButton } from "./styles";
import React from "react";

interface IButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

function Button(props: IButtonProps) {
  return (
    <StyledButton type={props.type} className={props.className}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
