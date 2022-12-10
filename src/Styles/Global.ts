import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme["blue-brand"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        padding-bottom: 5rem;
    }

    body, input, text-area, button, span {
        font: 400 1rem Poppins, sans-serif;
    }
`;
