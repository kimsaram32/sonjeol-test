import styled from 'styled-components'

const QuizContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0 40px;
  max-width: 500px;
  @media screen and (max-width: 500px){
    width: 380px;
  }
  @media screen and (max-width: 320px){
    width: 300px;
  }
`

export default QuizContainer