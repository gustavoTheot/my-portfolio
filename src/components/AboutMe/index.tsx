import {
  AboutMeContainer,
  ArrowTop,
  Description,
  MyName,
  SocialMidia,
} from './styled'

import { socialMedia } from '../../utils/data'
import { ArrowBendLeftUp } from 'phosphor-react'
import { useState } from 'react'

export function AboutMe() {
  const [visible, setVisible] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)
  const contacts = socialMedia

  function toggleScroll() {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  function handleUpWards() {
    setScrollTop(scrollTop === false && true)
  }

  window.addEventListener('scroll', toggleScroll)

  return (
    <AboutMeContainer id="aboutMe">
      <ArrowTop onClick={handleUpWards} href="#arrowTop">
        <ArrowBendLeftUp
          size={24}
          className={visible === true ? 'active' : 'off'}
        />
      </ArrowTop>

      <MyName>
        <p>Hello, my name is</p>
        <h1>Gustavo Theotnio</h1>
        <p>. I am a web developer.</p>
      </MyName>

      <Description>
        <p>
          Passionate about technology and the possibility of solving problems
          and making improvements in the world through it.
        </p>
      </Description>

      <SocialMidia>
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <img src={contact.img} alt="" />
                </a>
              </li>
            )
          })}
        </ul>
      </SocialMidia>
    </AboutMeContainer>
  )
}
