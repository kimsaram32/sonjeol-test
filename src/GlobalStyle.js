import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body, button, input {
    &:not([className="icon"]) {
      font-family: "Noto Sans KR", "Nanum Gothic", sans-serif;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover, a:visited {
    color: black;
  }

  .container {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    text-align: center;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .btn {
    padding: 12px 35px;
    border: 0;
    border-radius: 15px;
    font-size: 17px;
    min-width: 180px;
    cursor: pointer;
  }
`

export default GlobalStyle
