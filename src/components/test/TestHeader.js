import React from 'react'
import styled, { css } from 'styled-components'
import { useQuizState } from '../../QuizContext'

const StyledHeader = styled.div`
  h1 {
    font-size: 23px;
  }

  .progress {
    margin-top: 20px;

    .progress-text {
      margin-top: 15px;
      font-size: 18px;
    }
  }
`

const Progress = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 20px;
  background-color: #ccc;
  border-radius: 15px;

  &::before {
    position: absolute;
    left: 0;
    content: '';
    ${({ min, max }) => css`
      width: calc(100% * ${min / max ?? 0});
    `}
    height: 100%;
    background-color: ${(props) => props.theme.main};
    border-radius: 15px;
  }
`

const TestHeader = () => {
  const { test, quizzes } = useQuizState()

  return (
    <StyledHeader>
      <h1>{test.creatorName}님의 퀴즈</h1>
      <div className="progress">
        <Progress width="100%" min={test.progress + 1} max={quizzes.length} />
        <p className="progress-text">{test.progress + 1} / {quizzes.length}</p>
        <br />
      </div>
    </StyledHeader>
  )
}

export default TestHeader
