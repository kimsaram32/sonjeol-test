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
  background-color: white;
  color: #444;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
  }
`

const BottomIcon = ({ onClick, size, icon }) => (
  <StyledButton className="btn" onClick={onClick}>
    <CenterAlignedIcon className="icon" size={size}>{icon}</CenterAlignedIcon>
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
