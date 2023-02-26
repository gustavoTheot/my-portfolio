import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  max-width: 46rem;
  margin: 0 auto;
`

export const MyProjects = styled.div`
  margin: 2rem 0 9rem 0;

  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    width: 8rem;
    color: ${(props) => props.theme.colors.text_label};
    border-bottom: 4px solid ${(props) => props.theme.colors.border_bottom};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 3.75rem;
    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      padding: 2.6rem 6.5rem;

      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.text_label};

      img {
        border-radius: 8px;
        width: 22rem;
      }

      @media (max-width: 776px) {
        flex-direction: column;

        padding: 1rem;

        img {
          width: 19rem;
        }
      }
    }
  }
`

export const Project = styled.div``

export const InformProject = styled.div`
  h3 {
    color: ${(props) => props.theme.colors.text_label};
  }
  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.text_label};

    @media (max-width: 776px) {
      width: 18rem;
    }
  }
`

export const LinksProject = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    padding: 1rem 3.25rem;

    border-radius: 8px;

    color: ${(props) => props.theme.colors.text_input};
    background-color: ${(props) => props.theme.colors.buttons};
  }

  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
