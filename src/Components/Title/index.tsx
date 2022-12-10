import { TitleContainer, TitleContent } from "./styles";

interface TitleProps {
  title: string
  colorText?: string;
}

export default function TitleSection({ title, colorText }: TitleProps) {
  return (
    <TitleContainer>
      <TitleContent style={{ color: colorText }}>
        {title}

      </TitleContent>
    </TitleContainer>
  )
}