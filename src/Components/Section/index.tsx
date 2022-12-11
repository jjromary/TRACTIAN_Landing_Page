import { ReactNode } from "react";
import { SectionContainer } from "./styles";

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
}

export default function Section({ children, bgColor }: SectionProps) {
  return (
    <SectionContainer style={{ background: bgColor }}>
      {children}
    </SectionContainer>
  )
}