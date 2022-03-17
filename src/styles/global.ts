import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }
        body {
            background: ${theme.colors.dark};
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
            width: 100vw;
            margin: 0 auto;
        }
        button {
            cursor: pointer;
            background: none;
            border: none;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
        h1 {
            color: ${theme.colors.white};
            line-height: 4.2rem;
        }
    `}
`
export default GlobalStyles
