import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { useQuizDispatch } from '../QuizContext'
import * as templates from '../quizTemplates'
import BottomButtons from '../components/quiz/QuizListBottomButtons'
import QuizList from '../components/quiz/QuizList'
import QuizContainer from '../components/quiz/QuizContainer'
import NicknameInput from '../components/NicknameInput'

const TestHeader = styled.h1`
  font-size: 30px;
  font-family: 'Noto Sans KR Bold';
  padding-bottom: 20px;
`

const CreateTest = () => {
  const [searchParams] = useSearchParams()
  const templateKey = searchParams.get('template') ?? 'basic'
  const dispatch = useQuizDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_QUIZZES', quizzes: templates[templateKey] })
  })

  return (
    <div className="container">
      <QuizContainer>
        <TestHeader>퀴즈 만들기</TestHeader>
        <NicknameInput />
        <QuizList />
        <BottomButtons />
        <p style={{ marginTop: '15px', color: '#333' }}>
          $는 사용자 이름으로 대체됩니다.
        </p>
      </QuizContainer>
    </div>
  )
}

export default CreateTest
