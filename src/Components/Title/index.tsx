import { TitleContainer, TitleContent } from "./styles";

interface TitleProps {
  title: string
}

export default function TitleSection({ title }: TitleProps) {
  return (
    <TitleContainer>
      <TitleContent>
        {title}

      </TitleContent>
    </TitleContainer>
  )
}