import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuizState } from '../../QuizContext'
import NicknameInput from '../NicknameInput'
import ScoreTable from '../ScoreTable'

const StyledLobbyContainer = styled.div`
  .input {
    padding: 20px 0;
  }

  h1 {
    font-size: 30px;
    font-family: 'Noto Sans KR Bold';
  }

  h2 {
    font-size: 22px;
  }

  button {
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.main};
    color: white;
  }

  .score-display {
    padding-top: 40px;
  }
`

const TestLobby = ({ onClick }) => {
  const { testId } = useParams()
  const state = useQuizState()

  return (
    <StyledLobbyContainer>
      <h1>{state.test.creatorName}님의 테스트</h1>
      <div className="input">
        <NicknameInput />
      </div>
      <button className="btn" onClick={onClick}>
        시작
      </button>
      <div className="score-display">
        <h2>다른 사람들이 얼마나 잘했냐면요</h2>
        <ScoreTable testId={testId} />
      </div>
    </StyledLobbyContainer>
  )
}

export default TestLobby
