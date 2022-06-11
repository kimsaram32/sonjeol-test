const quizWithIds = (quizzes) => {
  return quizzes.map((quiz, quizn) => ({
    ...quiz,
    id: quizn,
    answers: quiz.answers.map((answer, answern) => ({
      ...answer,
      id: answern
    }))
  }))
}

export const empty = quizWithIds([
  {
    id: 0,
    title: '질문 입력',
    answers: [{ text: '정답 입력' }]
  }
])

export const basic = quizWithIds([
  {
    title: '생일이 언제인가요',
    answers: [
      { text: '1월' },
      { text: '2월' },
      { text: '3월' },
      { text: '4월' },
      { text: '5월' },
      { text: '6월' },
      { text: '7월' },
      { text: '8월' },
      { text: '9월' },
      { text: '10월' },
      { text: '11월' },
      { text: '12월' }
    ],
    correctAnswer: -1
  },
  {
    title: '우왕ㄹㄹ',
    answers: [
      { text: '테스트1' },
      { text: '테스트2' },
      { text: '테스트3' },
      { text: '테스트4' }
    ],
    correctAnswer: -1
  }
])

export const likes = quizWithIds([
  {
    title: '$님은 붕어빵을 어디부터 먹나요',
    answers: [
      { text: '머리' },
      { text: '꼬리' },
      { text: '몸통' },
      { text: '다른곳' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 민초파인가요',
    answers: [
      { text: '민초파' },
      { text: '반민초파' },
      { text: '중립' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 탕수육을',
    answers: [
      { text: '찍먹하는데요' },
      { text: '부먹함' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 파인애플 피자를 먹나요',
    answers: [
      { text: '먹음' },
      { text: '그걸왜먹냐' }
    ],
    correctAnswer: -1
  }
])