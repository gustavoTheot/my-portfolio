import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    :target{
        scroll-margin-top: .8rem;
    }

    body{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;

        background-color: ${(props) => props.theme.colors.background};

        
        @media (min-width: 481px){
            font-size: 1.5rem;
        }

        @media (min-width: 768px) {
            font-size: 1.25rem;
        }

        @media (min-width: 1024px) {
            font-size: 1rem;
        }
        
    }
`
