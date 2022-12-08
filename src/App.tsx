import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/Global";
import { defaultTheme } from "./Styles/Themes/Default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello, Romary</h1>

    </ThemeProvider>
  )
}

