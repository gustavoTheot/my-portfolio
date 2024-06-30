import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['black-900']};
    }


`