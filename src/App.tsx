import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Routes";
import { GlobalStyles } from "./Styles/Global";
import { defaultTheme } from "./Styles/Themes/Default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />

    </ThemeProvider>
  )
}

