import React from 'react'
import Answer from './Answer'

const AnswerList = ({ quiz }) => {
  return (
    <ul style={{ marginTop: '20px' }}>
      {quiz.answers.map((answer) => (
        <Answer key={answer.id} quizId={quiz.id} answer={answer} checked={quiz.correctAnswer === answer.id} />
      ))}
    </ul>
  )
}

export default React.memo(AnswerList)
