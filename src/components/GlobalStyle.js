import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }
`

export default GlobalStyle
