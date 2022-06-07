import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  quizzes: [
    {
      id: 0,
      question: '생일이 언제인가요',
      answers: [
        { id: 0, text: '1월' },
        { id: 1, text: '2월' },
        { id: 2, text: '3월' },
        { id: 3, text: '4월' },
        { id: 4, text: '5월' },
        { id: 5, text: '6월' },
        { id: 6, text: '7월' },
        { id: 7, text: '8월' },
        { id: 8, text: '9월' },
        { id: 9, text: '10월' },
        { id: 10, text: '11월' },
        { id: 11, text: '12월' }
      ],
      correctAnswer: -1
    },
    {
      id: 1,
      question: '우왕ㄹㄹ',
      answers: [
        { id: 0, text: '테스트1' },
        { id: 1, text: '테스트2' },
        { id: 2, text: '테스트3' },
        { id: 3, text: '테스트4' }
      ],
      correctAnswer: -1
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUIZ':
      return {
        ...state,
        quizzes: [
          ...state.quizzes,
          {
            id: action.id,
            question: '질문 입력',
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
    case 'EDIT_QUESTION':
      return {
        ...state,
        quizzes: [
          ...state.quizzes.map((quiz) =>
            quiz.id === action.id
              ? {
                  ...quiz,
                  question: action.question
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
                correctAnswer: action.correctAnswer
              }
            : quiz
        )
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
