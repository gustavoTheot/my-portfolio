import { useState, useContext } from 'react'
import { HeaderContainer } from './styled'
import { List } from 'phosphor-react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

interface Props {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  function handleMenu() {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <HeaderContainer id="arrowTop">
      <button onClick={handleMenu}>
        <List size={32} className="menu" />
      </button>
      <ul className={open === true ? 'active' : 'off'}>
        <li>
          <a href="#aboutMe">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.text_label}
          onColor={colors.text_label}
        />
      </ul>
    </HeaderContainer>
  )
}
