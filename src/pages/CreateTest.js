import React from 'react'
import BottomButtons from '../components/quiz/ListBottomButtons'
import QuizList from '../components/quiz/QuizList'
import QuizContainer from '../components/quiz/QuizContainer'

const CreateTest = () => {
  return (
    <div className="container">
      <QuizContainer>
        <QuizList />
        <BottomButtons />
      </QuizContainer>
    </div>
  )
}

export default CreateTest
