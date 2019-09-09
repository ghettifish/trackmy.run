import {createGlobalStyle} from './theme'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0px;
        margin: 0px;
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => props.theme.black};
        background-color: ${props => props.theme.dark};
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.gray};
    }
`

export default GlobalStyle;