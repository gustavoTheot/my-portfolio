import { HeaderContainer } from './styled'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import light from '../../styles/themes/light'
import { List } from 'phosphor-react'
import { useState } from 'react'

interface Props {
  typeThemes: {}
  toggleThemes: () => void
}

export function Header({ toggleThemes, typeThemes }: Props) {
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

        {typeThemes === light ? (
          <button onClick={toggleThemes}>
            <img src={moon} alt="" />
          </button>
        ) : (
          <button onClick={toggleThemes}>
            <img src={sun} alt="" />
          </button>
        )}
      </ul>
    </HeaderContainer>
  )
}
