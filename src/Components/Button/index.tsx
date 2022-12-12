import { FormEvent, FormEventHandler } from "react";
import { FormProps } from "react-router-dom";
import { ButtonContainer, ButtonContent } from "./styles";

interface ButtonProps {
  titleButton: string;
  typeButton?: 'submit' | "reset" | 'button';
}

export default function ButtonContact({ titleButton, typeButton }: ButtonProps) {
  return (
    <ButtonContainer>
      <ButtonContent type={typeButton}>
        {titleButton}
      </ButtonContent>
    </ButtonContainer>
  )
}