import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './AppStyle'
import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { GlobalStyled } from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { RoadMap } from './components/RoadMap'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyled />
        <Header toggleTheme={toggleTheme} />
        <AboutMe />
        <Skills />
        <RoadMap />
        <Projects />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
