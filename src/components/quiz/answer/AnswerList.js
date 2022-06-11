import React from 'react'
import { useQuizState } from '../../../QuizContext'
import useEditable from '../../../hooks/useEditable'
import Answer from './Answer'

const AnswerList = ({ quiz }) => {
  const { test } = useQuizState()
  const editable = useEditable()

  return (
    <ul style={{ marginTop: '20px' }}>
      {quiz.answers.map((answer) => {
        const correctAnswer = quiz.correctAnswer
        const testAnswer = test.clickedAnswer
        const isCorrect = (editable ? correctAnswer : testAnswer) === answer.id

        return (
          <Answer
            key={answer.id}
            quizId={quiz.id}
            answer={answer}
            checked={isCorrect}
            filled={test.answerVisible && correctAnswer === answer.id}
            clickable={!test.answerVisible}
          />
        )
      })}
    </ul>
  )
}

export default React.memo(AnswerList)
