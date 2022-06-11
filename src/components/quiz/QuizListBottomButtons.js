import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdShare } from 'react-icons/md'
import { collection, addDoc } from 'firebase/firestore'
import { useQuizState, useQuizDispatch } from '../../QuizContext'
import { CenterAlignedIcon } from '../utils/Icons'
import { firestore } from '../../firebase'

const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  position: relative;
  padding: 15px;
  font-size: 20px;
  background-color: ${(props) => props.theme.main};
  color: #eee;
  cursor: pointer;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
  }
`

const StyledMessage = styled.p`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  color: red;
`

const BottomButton = ({ onClick, icon }) => (
  <StyledButton className="btn" onClick={onClick}>
    <CenterAlignedIcon className="icon" size="35px">{icon}</CenterAlignedIcon>
  </StyledButton>
)

const BottomButtons = () => {
  const navigate = useNavigate()
  const state = useQuizState()
  const quizzes = state.quizzes
  const dispatch = useQuizDispatch()

  const [resultMessage, setResultMessage] = useState('')
  const nextId = useRef(quizzes.length)

  const onAddClick = useCallback(() => {
    dispatch({
      type: 'ADD_QUIZ',
      id: nextId.current++
    })
  }, [dispatch])

  const onSubmitClick = async () => {
    let warning = false

    const warningTests = [
      {
        cond: state.nickname.length !== 0,
        message: '이름을 입력해주세요'
      },
      {
        cond: quizzes.length !== 0,
        message: '문제가 한 개 이상 있어야 합니다'
      },
      {
        cond: quizzes.every(({ answers }) => answers.length),
        message: '정답이 한 개 이상 있어야 합니다'
      },
      {
        cond: quizzes.every(({ correctAnswer }) => correctAnswer !== -1),
        message: '모든 문제에 정답이 주어져야 합니다'
      },
      {
        cond: quizzes.every(({ title }) => title.length),
        message: '문제 이름이 주어져야 합니다'
      }
    ]

    for (const { cond, message } of warningTests) {
      if (!cond) {
        warning = true
        setResultMessage(message)
        break
      }
    }

    if (!warning) {
      setResultMessage('로딩중 (느려도 놔두세요 건들면 망해요)')
      const clearedQuizzes = quizzes.map((quiz, i) => ({
        title: quiz.title.replaceAll('$', state.nickname),
        id: i,
        answers: quiz.answers.map((answer, i) => ({
          id: i,
          text: answer.text
        })),
        correctAnswer: quiz.answers.findIndex(
          (answer) => answer.id === quiz.correctAnswer
        )
      }))

      const test = {
        quizzes: clearedQuizzes,
        nickname: state.nickname,
        scores: []
      }

      try {
        const doc = await addDoc(collection(firestore, 'tests'), test)
        navigate(`/share/${doc.id}`)
      } catch (e) {
        setResultMessage(`에러 발생: ${e.message} 재시도해 보세요`)
      }
    }
  }

  return (
    <>
      <BottomButton onClick={onAddClick} icon={<AiOutlinePlusCircle />} />
      <BottomButton onClick={onSubmitClick} icon={<MdShare />} />
      {resultMessage && <StyledMessage>{resultMessage}</StyledMessage>}
    </>
  )
}

export default BottomButtons
