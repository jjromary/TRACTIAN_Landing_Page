import { ButtonContainer, ButtonContent } from "./styles";

interface ButtonProps {
  titleButton: string;
}

export default function ButtonContact({ titleButton }: ButtonProps) {
  return (
    <ButtonContainer>
      <ButtonContent>
        {titleButton}
      </ButtonContent>
    </ButtonContainer>
  )
}