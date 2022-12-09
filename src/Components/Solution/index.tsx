import { DescriptionSolution, TitleSolution, SolutionContainer } from "./styles";

interface SolutionProps {
  icon?: string;
  title?: string;
  description?: string;
}

export default function Solution({ icon, title, description }: SolutionProps) {
  return (
    <SolutionContainer>
      <TitleSolution>
        <img src={icon} />
        <span>{title}</span>
      </TitleSolution><DescriptionSolution>
        {description}
      </DescriptionSolution>
    </SolutionContainer>
  )
}