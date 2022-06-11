import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { updateDoc } from 'firebase/firestore'
import { useQuizState, useQuizDispatch } from '../../QuizContext'
import useLocalStatus from '../../hooks/useLocalStatus'
import getTestDoc from '../../getTestDoc'

const StyledButton = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: ${(props) => props.theme.main};
  color: #fff;
`

const postScore = async (id, scoreData) => {
  const testDoc = await getTestDoc(id)
  const docRef = testDoc.ref
  const scores = testDoc.data().scores

  try {
    await updateDoc(docRef, { scores: scores.concat(scoreData) })
  } catch (e) {
    // todo
    console.log(e.message)
  }
}

const TestNextButton = () => {
  const { testId } = useParams()
  const navigate = useNavigate()
  const state = useQuizState()
  const dispatch = useQuizDispatch()
  const [, setLocalStatus, clearLocalStatus] = useLocalStatus(testId)

  // 정답 보여주는 건지 다음 퀴즈로 넘어가는 건지
  const [onNextQuiz, setOnNextQuiz] = useState(false)

  const onClick = async () => {
    const progress = state.test.progress
    const clickedAnswer = state.test.clickedAnswer

    if (clickedAnswer === -1) return

    if (onNextQuiz) {
      // 다음 퀴즈로 넘어갈때
      dispatch({ type: 'SET_TEST_ANSWER_VISIBLE', visible: false })

      if (progress === state.quizzes.length - 1) {
        clearLocalStatus()

        postScore(testId, {
          nickname: state.nickname,
          score: state.test.correctAnswerCount
        })

        navigate('result')
      } else {
        setLocalStatus({ progress: progress + 1 })
        dispatch({ type: 'INCREASE_TEST_PROGRESS' })
        dispatch({ type: 'SET_TEST_CLICKED_ANSWER', answer: -1 })
      }
    } else {
      if (state.quizzes[progress].correctAnswer === clickedAnswer) {
        setLocalStatus({ answerCount: state.test.correctAnswerCount + 1 })
        dispatch({ type: 'INCREASE_CORRECT_ANSWER_COUNT' })
      }

      dispatch({ type: 'SET_TEST_ANSWER_VISIBLE', visible: true })
    }

    setOnNextQuiz((curr) => !curr)
  }

  return (
    <StyledButton className="btn" onClick={onClick}>
      {state.test.answerVisible ? '다음' : '정답 확인'}
    </StyledButton>
  )
}

export default TestNextButton
