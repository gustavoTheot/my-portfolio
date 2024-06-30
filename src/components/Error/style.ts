import styled from "styled-components";


export const ErrorContainer = styled.div`
    height: 88vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p{
        color: ${props => props.theme['gray-200']};
    }
`