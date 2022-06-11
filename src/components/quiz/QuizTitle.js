import React from 'react'
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import EditingInput from '../utils/EditingInput'
import { VerticalAlignedIcon } from '../utils/Icons'
import useEditForm from '../../hooks/useEditForm'
import { useQuizDispatch } from '../../QuizContext'
import useEditable from '../../hooks/useEditable'

const StyledTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bbb;

  p {
    position: relative;
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .icon-edit {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: -30px;
    cursor: pointer;
    color: #444;
  }

  input {
    font-size: 20px;
    color: ${(props) => props.theme.main};

    &:focus {
      outline: none;
    }
  }
`

const QuizTitle = React.memo(({ quiz }) => {
  const [editing, toggleEditing, onSubmit] = useEditForm()
  const dispatch = useQuizDispatch()
  const editable = useEditable()

  const onInputChange = ({ target: { value } }) => {
    if (value.length <= 20) {
      dispatch({
        type: 'EDIT_TITLE',
        id: quiz.id,
        title: value
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
              value={quiz.title}
            ></EditingInput>
          </form>
        </>
      ) : (
        <>
          <p>
            {quiz.title}
            {editable && (
              <VerticalAlignedIcon
                size="20px"
                className="icon-edit"
                onClick={toggleEditing}
              >
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
