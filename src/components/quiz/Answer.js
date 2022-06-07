import React, { useRef, useCallback } from 'react'
import styled from 'styled-components'
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked
} from 'react-icons/md'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useQuizDispatch } from '../../QuizContext'
import useEditForm from '../../hooks/useEditForm'
import useEditable from '../../hooks/useEditable'
import { Icon, VerticalAlignedIcon } from '../utils/Icons'
import EditingInput from '../utils/EditingInput'

const StyledAnswer = styled.li`
  position: relative;
  box-sizing: content-box;
  margin: 10px 0;
  padding: 13px;

  p {
    margin: auto;
    @media screen and (max-width: 500px) {
      width: 60%;
    }
  }

  .icon-check,
  .side-icons {
    position: absolute;
  }

  .icon-check {
    left: 0;
  }

  .side-icons {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

const Answer = ({ quizId, answer, checked }) => {
  const dispatch = useQuizDispatch()
  const [editing, toggleEditing, onSubmit] = useEditForm()
  const clickedIcon = useRef(false) // 전체 클릭했는지 아이콘만 클릭했는지 판별하라고 있는거
  const editable = useEditable()

  const onInputChange = ({ target: { value } }) => {
    if (value.length <= 16) {
      dispatch({
        type: 'EDIT_ANSWER',
        quizId,
        answerId: answer.id,
        text: value
      })
    }
  }

  const onIconClick = useCallback((callback) => {
    clickedIcon.current = true
    callback()
  }, [])

  const onEditClick = () => onIconClick(toggleEditing)

  const onDeleteClick = () =>
    onIconClick(() =>
      dispatch({
        type: 'REMOVE_ANSWER',
        quizId,
        answerId: answer.id
      })
    )

  const onAllClick = () => {
    if (clickedIcon.current) {
      clickedIcon.current = false
      return
    }
    if (editing) {
      return
    }
    
    dispatch({
      type: 'SET_CORRECT_ANSWER',
      id: quizId,
      correctAnswer: answer.id
    })
  }

  return (
    <StyledAnswer onClick={onAllClick}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <EditingInput value={answer.text} onChange={onInputChange}></EditingInput>
          </form>
        </>
      ) : (
        <>
          <VerticalAlignedIcon size="27px" className="icon-check ">
            {checked ? (
              <MdOutlineRadioButtonChecked />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
          </VerticalAlignedIcon>
          <p>{answer.text}</p>
          {editable && (
            <div className="side-icons">
              <Icon size="20px" className="icon-edit" onClick={onEditClick}>
                <FaEdit />
              </Icon>
              <Icon size="20px" className="icon-trash" onClick={onDeleteClick}>
                <FaTrash />
              </Icon>
            </div>
          )}
        </>
      )}
    </StyledAnswer>
  )
}

export default React.memo(Answer)
