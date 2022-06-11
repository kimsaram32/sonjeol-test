import styled from 'styled-components'

const QuizContainer = styled.div`
  margin: 0 auto;
  padding: 80px 0;
  max-width: 500px;
  min-height: 80vh;

  @media screen and (max-width: 500px){
    padding: 80px 10px;
    max-width: 380px;
  }
  @media screen and (max-width: 320px){
    max-width: 300px;
  }
`

export default QuizContainer