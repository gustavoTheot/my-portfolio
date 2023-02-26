import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const MySkills = styled.div`
  width: 46rem;

  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    width: 5.5rem;
    border-bottom: 4px solid ${(props) => props.theme.colors.border_bottom};
    color: ${(props) => props.theme.colors.text_label};
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    margin-top: 3.75rem;

    li {
      list-style: none;
      width: 18rem;
      height: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 8px;
      color: ${(props) => props.theme.colors.text_input};
      background-color: ${(props) => props.theme.colors.buttons};
    }

    @media (max-width: 776px) {
      display: flex;
      flex-direction: column;
    }
  }
`

export const ListSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
