import React from 'react'
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import EditingInput from '../utils/EditingInput'
import { VerticalAlignedIcon } from '../utils/Icons'
import useEditForm from '../../hooks/useEditForm'
import { useQuizDispatch } from '../../QuizContext'
import useEditable from '../../hooks/useEditable'

const StyledTitle = styled.div`
  position: relative;
  font-size: 20px;

  p {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .icon-edit {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
  }

  input {
    font-size: 20px;
  }
`

const QuizTitle = React.memo(({ quiz }) => {
  const [editing, toggleEditing, onSubmit] = useEditForm()
  const dispatch = useQuizDispatch()
  const editable = useEditable()

  const onInputChange = ({ target: { value } }) => {
    if (value.length <= 20) {
      dispatch({
        type: 'EDIT_QUESTION',
        id: quiz.id,
        question: value
      })
    }
  }

  return (
    <StyledTitle>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <EditingInput
              onChange={onInputChange}
              value={quiz.question}
            ></EditingInput>
          </form>
        </>
      ) : (
        <>
          <p>
            {quiz.question}
            {editable && (
              <VerticalAlignedIcon size="20px" className="icon-edit" onClick={toggleEditing}>
                <FaEdit />
              </VerticalAlignedIcon>
            )}
          </p>
        </>
      )}
    </StyledTitle>
  )
})

export default QuizTitle
