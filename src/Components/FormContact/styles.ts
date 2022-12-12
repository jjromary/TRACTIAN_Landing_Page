import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 2rem;
`;

export const LabelField = styled.label``;

export const InputField = styled.input`
  border: 1px solid ${(props) => props.theme["base-text"]};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;

  :focus {
    outline: 2px solid ${(props) => props.theme["blue-brand"]};
  }

  ::placeholder {
    font-size: 0.825rem;
  }
`;

export const SubmitContent = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const ErroMessage = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme["red-error"]};
`;
