import { createGlobalStyle } from 'styled-components'

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    src: url(${process.env.PUBLIC_URL + '/fonts/NotoSansKR-Regular.otf'}) format('opentype');
  }

  @font-face {
    font-family: "Noto Sans KR Bold";
    src: url(${process.env.PUBLIC_URL + '/fonts/NotoSansKR-Bold.otf'}) format('opentype');
  }
`

export default FontStyle