import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  span {
    color: ${(props) => props.theme.colors.text_label};
  }
`
