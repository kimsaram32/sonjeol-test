import React from 'react'
import styled from 'styled-components'
import QuizTitle from './QuizTitle'
import AnswerList from './answer/AnswerList'
import BottomButtons from './QuizBottomButtons'
import useEditable from '../../hooks/useEditable'

const StyledCard = styled.div`
  margin: 20px 0;
  width: 100%;
  background-color: #eee;
  border: 2px solid #bbb;
  border-radius: 30px;
  padding: 40px 55px;
  text-align: center;
`

const QuizCard = ({ quiz }) => {
  const editable = useEditable()

  return (
    <StyledCard>
      <QuizTitle quiz={quiz} />
      <AnswerList quiz={quiz} />
      {editable && <BottomButtons quiz={quiz} />}
    </StyledCard>
  )
}

export default React.memo(QuizCard)
