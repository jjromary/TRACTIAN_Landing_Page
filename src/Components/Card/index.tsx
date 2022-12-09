import { Children, ReactNode } from "react";
import ButtonContact from "../Button";
import { CardContainer, Description, Title } from "./styles";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <CardContainer>
      <Title>
        {title}
      </Title>

      <Description>
        {description}
      </Description>

      {children}
    </CardContainer>
  )
}