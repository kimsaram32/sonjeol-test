import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  quizzes: [],
  test: {
    creatorName: '',
    progress: 0,
    clickedAnswer: -1,
    correctAnswerCount: 0,
    answerVisible: false
  },
  nickname: '익명'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname
      }
    case 'SET_QUIZZES':
      return {
        ...state,
        quizzes: action.quizzes
      }
    case 'ADD_QUIZ':
      return {
        ...state,
        quizzes: [
          ...state.quizzes,
          {
            id: action.id,
            title: '질문 입력',
            answers: [{ id: 0, text: '정답 입력' }],
            correctAnswer: -1
          }
        ]
      }
    case 'REMOVE_QUIZ':
      return {
        ...state,
        quizzes: state.quizzes.filter((quiz) => quiz.id !== action.id)
      }
    case 'EDIT_TITLE':
      return {
        ...state,
        quizzes: [
          ...state.quizzes.map((quiz) =>
            quiz.id === action.id
              ? {
                  ...quiz,
                  title: action.title
                }
              : quiz
          )
        ]
      }
    case 'ADD_ANSWER':
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) =>
          quiz.id === action.quizId
            ? {
                ...quiz,
                answers: [
                  ...quiz.answers,
                  {
                    id: action.answerId,
                    text: '정답 입력'
                  }
                ]
              }
            : quiz
        )
      }
    case 'REMOVE_ANSWER':
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) =>
          quiz.id === action.quizId
            ? {
                ...quiz,
                answers: quiz.answers.filter(
                  (answer) => answer.id !== action.answerId
                ),
                correctAnswer: quiz.correctAnswer === action.answerId ? -1 : quiz.correctAnswer
              }
            : quiz
        )
      }
    case 'EDIT_ANSWER':
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) =>
          quiz.id === action.quizId
            ? {
                ...quiz,
                answers: [
                  ...quiz.answers.map((answer) =>
                    answer.id === action.answerId
                      ? {
                          ...answer,
                          text: action.text
                        }
                      : answer
                  )
                ]
              }
            : quiz
        )
      }
    case 'SET_CORRECT_ANSWER':
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) =>
          quiz.id === action.id
            ? {
                ...quiz,
                correctAnswer: action.answer
              }
            : quiz
        )
      }
    case 'SET_TEST_CREATOR':
      return {
        ...state,
        test: {
          ...state.test,
          creatorName: action.name
        }
      }
    case 'SET_TEST_PROGRESS':
      return {
        ...state,
        test: {
          ...state.test,
          progress: action.progress
        }
      }
    case 'INCREASE_TEST_PROGRESS':
      return {
        ...state,
        test: {
          ...state.test,
          progress: state.test.progress + 1
        }
      }
    case 'SET_TEST_CLICKED_ANSWER':
      return {
        ...state,
        test: {
          ...state.test,
          clickedAnswer: action.answer
        }
      }
    case 'SET_TEST_ANSWER_VISIBLE':
      return {
        ...state,
        test: {
          ...state.test,
          answerVisible: action.visible
        }
      }
    case 'SET_CORRECT_ANSWER_COUNT':
      return {
        ...state,
        test: {
          ...state.test,
          correctAnswerCount: action.count
        }
      }
    case 'INCREASE_CORRECT_ANSWER_COUNT':
      return {
        ...state,
        test: {
          ...state.test,
          correctAnswerCount: state.test.correctAnswerCount + 1
        }
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

const QuizStateContext = createContext()
const QuizDispatchContext = createContext()

export const useQuizState = () => useContext(QuizStateContext)
export const useQuizDispatch = () => useContext(QuizDispatchContext)

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}
