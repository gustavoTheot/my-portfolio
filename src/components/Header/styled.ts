import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 2.5rem;

  button {
    border: none;
    .menu {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;

    li {
      padding-bottom: 0.5rem;
      border-bottom: 4px solid transparent;

      cursor: pointer;

      list-style: none;
      &:hover {
        border-bottom: 4px solid ${(props) => props.theme.colors.border_bottom};
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text_label};
      }
    }

    img {
      padding-bottom: 0.5rem;
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }

  @media (max-width: 1160px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 765px) {
    flex-direction: column;
    gap: 2rem;

    button {
      border: 0;
      background-color: transparent;

      .menu {
        display: block;
      }
    }

    .active {
      width: 100%;
      padding: 2rem 0;

      transition: all 0.3s ease-in-out;

      flex-direction: column;
    }

    .off {
      display: none;
    }
  }
`
