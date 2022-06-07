import React, { useRef } from 'react'
import styled from 'styled-components'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { CenterAlignedIcon } from '../utils/Icons'
import { useQuizDispatch } from '../../QuizContext'

const StyledButton = styled.button`
  margin-top: 15px;
  position: relative;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 10px;
`

const BottomIcon = ({ onClick, size, icon }) => (
  <StyledButton onClick={onClick}>
    <CenterAlignedIcon size={size}>{icon}</CenterAlignedIcon>
  </StyledButton>
)

const QuizBottomButtons = ({ quiz }) => {
  const dispatch = useQuizDispatch()
  const nextId = useRef(quiz.answers.length)

  const onAddClick = () => {
    dispatch({
      type: 'ADD_ANSWER',
      quizId: quiz.id,
      answerId: nextId.current++
    })
  }

  const onDeleteClick = () => {
    dispatch({
      type: 'REMOVE_QUIZ',
      id: quiz.id
    })
  }

  return (
    <>
      <BottomIcon
        onClick={onAddClick}
        size="30px"
        icon={<AiOutlinePlusCircle />}
      />
      <BottomIcon onClick={onDeleteClick} size="25px" icon={<FaTrash />} />
    </>
  )
}

export default React.memo(QuizBottomButtons)
