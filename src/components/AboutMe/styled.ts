import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  margin: 15rem 0;
`

export const ArrowTop = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  svg {
    position: fixed;
    bottom: 3.5rem;
    right: 4rem;

    visibility: hidden;
  }

  .active {
    visibility: visible;
  }
`

export const MyName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;

    padding: 1rem;
  }
`

export const Description = styled.div`
  max-width: 48rem;
  text-align: center;

  @media (max-width: 776px) {
    padding: 1rem;
  }
`

export const SocialMidia = styled.div`
  ul {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;
    }
  }
`
