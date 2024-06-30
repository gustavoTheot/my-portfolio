import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/globa"
import { MyRoutes } from "./routes"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/my-portfolio">
        <Header />
        <MyRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider >
  )
}
export default App
