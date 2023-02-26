import styled from 'styled-components'

export const RoadMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  max-width: 46rem;
  margin: 0 auto;

  @media (max-width: 781px) {
    justify-content: center;
    align-items: center;
  }
`

export const RoadMapInformas = styled.div`
  margin: 9rem 0;

  @media (max-width: 781px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;
  }

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 20rem;
  }

  h1 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3.75rem;

    padding-bottom: 0.125rem;
    width: 9.4rem;
    border-bottom: 4px solid ${(props) => props.theme.colors.border_bottom};

    color: ${(props) => props.theme.colors.text_label};
  }

  ul {
    border-left: 1px solid ${(props) => props.theme.colors.line_arrow};

    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 3rem;

      @media (max-width: 781px) {
        gap: 1rem;
      }
    }
  }
`

export const Informs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors.text_label};

  p {
    margin-top: 0.5rem;
    text-align: justify;
  }

  // 800

  span {
    margin-top: 0.25rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Bulletede = styled.div`
  width: 1rem;
  height: 1rem;

  background-color: ${(props) => props.theme.colors.bulleted};
  border-radius: 99%;

  margin-left: -0.5rem;
`
