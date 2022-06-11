import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getTestDoc from '../getTestDoc'
import { useQuizDispatch, useQuizState } from '../QuizContext'

import useLocalStatus from '../hooks/useLocalStatus'
import QuizContainer from '../components/quiz/QuizContainer'
import QuizCard from '../components/quiz/QuizCard'
import TestLobby from '../components/test/TestLobby'
import TestHeader from '../components/test/TestHeader'
import TestNextButton from '../components/test/TestNextButton'

const Test = () => {
  const { testId } = useParams()
  const navigate = useNavigate()
  const state = useQuizState()
  const dispatch = useQuizDispatch()
  const [getLocalStatus, setLocalStatus] = useLocalStatus(testId)

  const [page, setPage] = useState('loading')

  const intializeCurrentTest = ({ progress, count }) => {
    dispatch({ type: 'SET_TEST_PROGRESS', progress })
    dispatch({ type: 'SET_CORRECT_ANSWER_COUNT', count })
    dispatch({ type: 'SET_TEST_CLICKED_ANSWER', answer: -1 })
  }

  const loadTest = async () => {
    const testDoc = await getTestDoc(testId)
    const test = testDoc.data()

    if (!test) {
      navigate('/error')
      return
    }

    const status = getLocalStatus()

    // 일단 기본 정보 세팅
    dispatch({ type: 'SET_QUIZZES', quizzes: test.quizzes })
    dispatch({ type: 'SET_TEST_CREATOR', name: test.nickname })

    if (status) {
      // 전에 했던 기록이 있으므로 이어한다
      const [nickname, progress, count] = status

      dispatch({ type: 'SET_NICKNAME', nickname })
      intializeCurrentTest({ progress: +progress, count: +count })

      setPage('test')
    } else {
      setPage('lobby')
    }
  }

  useEffect(() => {
    loadTest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onStartClick = () => {
    intializeCurrentTest({ progress: 0, count: 0 })

    setLocalStatus({
      nickname: state.nickname,
      progress: 0,
      answerCount: 0
    })

    setPage('test')
  }

  return (
    <div className="container">
      <QuizContainer>
        {page === 'loading' ? (
          <>로딩중</>
        ) : page === 'lobby' ? (
          <TestLobby onClick={onStartClick} />
        ) : (
          <>
            <TestHeader />
            <QuizCard quiz={state.quizzes[state.test.progress]} />
            <TestNextButton />
          </>
        )}
      </QuizContainer>
    </div>
  )
}

export default Test
