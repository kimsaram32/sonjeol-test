import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuizState } from '../QuizContext'
import ScoreTable from '../components/ScoreTable'

const StyledResult = styled.div`
  padding: 80px 10px;

  h1 {
    font-size: 30px;
    font-family: 'Noto Sans KR Bold';
    padding-bottom: 40px;
  }

  h2 {
    font-size: 22px;
  }

  .score-display {
    padding-top: 20px;
    .score {
      padding: 20px;
      font-family: 'Noto Sans KR Bold';
    }

    strong {
      font-weight: 700;
      font-size: 25px;
      color: ${(props) => props.theme.main};
      padding-right: 5px;
    }

    p {
      color: #666;
      text-decoration: line-through;
    }
  }

  .score-table {
    padding-top: 80px;
  }

  .create {
    padding-top: 80px;

    p {
      margin-bottom: 30px;
      font-size: 18px;
    }
  }
`

const TestResult = () => {
  const { testId } = useParams()
  const navigate = useNavigate()
  const state = useQuizState()

  const score = state.test.correctAnswerCount
  const max = state.quizzes.length

  return (
    <StyledResult className="container">
      <h1>퀴즈 결과</h1>
      <div className="score-display">
        <h2>당신의 점수는</h2>
        <div className="score">
          <strong>
            {score} / {max}
          </strong>{' '}
          점
        </div>
        <p>와 퀴즈 주인이 보면 정말 좋아하겠네요 허허허헣허ㅓㅓ허</p>
      </div>
      <div className="score-table">
        <h2>다른 사람들의 점수도 확인해보세요</h2>
        <ScoreTable testId={testId} />
      </div>
      <div className="create">
        <p>당신도 어서 퀴즈를 만드세요</p>
        <button className="btn" onClick={() => navigate('/quiz')}>만들러 가셈</button>
      </div>
    </StyledResult>
  )
}

export default TestResult
