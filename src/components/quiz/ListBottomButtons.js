import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdShare } from 'react-icons/md'
import { useQuizState, useQuizDispatch } from '../../QuizContext'
import { CenterAlignedIcon } from '../utils/Icons'

const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  position: relative;
  padding: 15px;
  font-size: 20px;
  border: 0;
  border-radius: 15px;
  background-color: lightgray;
`

const StyledWarning = styled.p`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  color: red;
`

const BottomButton = ({ onClick, icon }) => (
  <StyledButton onClick={onClick}>
    <CenterAlignedIcon size="35px">{icon}</CenterAlignedIcon>
  </StyledButton>
)

const BottomButtons = () => {
  const quizzes = useQuizState().quizzes
  const dispatch = useQuizDispatch()
  const nextId = useRef(quizzes.length)

  const [warningMessage, setWarningMessage] = useState('')

  const onAddClick = useCallback(() => {
    dispatch({
      type: 'ADD_QUIZ',
      id: nextId.current++
    })
  }, [dispatch])

  const onSubmitClick = () => {
    let warning = false

    const warningTests = [
      {
        cond: quizzes.length !== 0,
        message: '문제가 한 개 이상 있어야 합니다'
      },
      {
        cond: quizzes.every(({ answers }) => answers.length),
        message: '정답이 한 개 이상 있어야 합니다'
      },
      {
        cond: quizzes.every(({ correctAnswer }) => correctAnswer !== -1),
        message: '모든 문제에 정답이 주어져야 합니다'
      },
      {
        cond: quizzes.every(({ question }) => question.length),
        message: '문제 이름이 주어져야 합니다'
      }
    ]

    for (const { cond, message } of warningTests) {
      if (!cond) {
        warning = true
        setWarningMessage(message)
        break
      }
    }

    if (!warning) {
      setWarningMessage('')
      const clearedQuizzes = quizzes.map((quiz, i) => ({
        id: i,
        question: quiz.question,
        answers: quiz.answers.map((answer, i) => ({ id: i, text: answer.text })),
        correctAnswer: quiz.answers.findIndex((answer) => answer.id === quiz.correctAnswer)
      }))

      console.log(clearedQuizzes)
    }
  }

  return (
    <>
      <BottomButton onClick={onAddClick} icon={<AiOutlinePlusCircle />} />
      <BottomButton onClick={onSubmitClick} icon={<MdShare />} />
      {warningMessage && <StyledWarning>{warningMessage}</StyledWarning>}
    </>
  )
}

export default BottomButtons
