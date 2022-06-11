import React from 'react'
import styled from 'styled-components'
import { useQuizState, useQuizDispatch } from '../QuizContext'

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  padding: 25px;

  label {
    font-size: 18px;
  }

  input {
    width: 200px;
    height: 30px;
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 10px;
  }

  input:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.main};
  }
`

const NicknameInput = () => {
  const state = useQuizState()
  const dispatch = useQuizDispatch()
  const onChange = ({ target: { value } }) => {
    dispatch({
      type: 'SET_NICKNAME',
      nickname: value
    })
  }
  return (
    <StyledSection>
      <label htmlFor="set-nickname">이름을 입력해주세요</label>
      <input name="set-nickname" onChange={onChange} value={state.nickname} />
    </StyledSection>
  )
}

export default NicknameInput
