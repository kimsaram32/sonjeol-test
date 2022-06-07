import React from 'react'
import QuizContainer from '../components/quiz/QuizContainer'
import QuizList from '../components/quiz/QuizList'

const Test = () => {
  return (
    <div className="container">
      <QuizContainer>
        <QuizList />
      </QuizContainer>
    </div>
  )
}

export default Test