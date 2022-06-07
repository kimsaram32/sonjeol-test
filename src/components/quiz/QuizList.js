import React from 'react'
import styled from 'styled-components'
import { useQuizState } from '../../QuizContext'
import QuizCard from './QuizCard'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuizList = () => {
  const quizzes = useQuizState().quizzes

  return (
    <StyledList>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </StyledList>
  )
}

export default QuizList
