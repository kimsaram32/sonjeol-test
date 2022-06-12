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
    title: '$님의 생일은 언제인가요',
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
    title: '$님은 여가시간에 주로 무엇을 하나요',
    answers: [
      { text: '나가서 놀기' },
      { text: '잠자기' },
      { text: '공부하기' },
      { text: '게임하기' },
      { text: '폰하기' },
      { text: '책읽기' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님이 좋아하는 계절은 무엇인가요',
    answers: [
      { text: '봄' },
      { text: '여름' },
      { text: '가을' },
      { text: '겨울' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 강아지와 고양이 중 뭘 더 좋아할까요',
    answers: [{ text: '강아지' }, { text: '고양이' }, { text: '둘다' }],
    correctAnswer: -1
  },
  {
    title: '$님에게 가장 중요한 것은 무엇일까요',
    answers: [
      { text: '돈' },
      { text: '자기 자신' },
      { text: '가족' },
      { text: '친구' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님이 가장 좋아하는 간식은 무엇일까요',
    answers: [
      { text: '초콜릿' },
      { text: '과자' },
      { text: '젤리' },
      { text: '사탕' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 무엇을 가장 많이 쓸까요',
    answers: [
      { text: '스마트폰' },
      { text: 'TV' },
      { text: '컴퓨터' },
      { text: '타블렛' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 어떻게 지내는 걸 좋아할까요',
    answers: [{ text: '혼자' }, { text: '여러명' }],
    correctAnswer: -1
  },
  {
    title: '$님은 무슨 요일을 가장 좋아할까요',
    answers: [
      { text: '월요일' },
      { text: '화요일' },
      { text: '수요일' },
      { text: '목요일' },
      { text: '금요일' },
      { text: '토요일' },
      { text: '일요일' }
    ],
    correctAnswer: -1
  },
  {
    title: '이 중 $님이 좋아하는 색깔은 무엇일까요',
    answers: [{ text: '흰색' }, { text: '회색' }, { text: '검은색' }],
    correctAnswer: -1
  },
  {
    title: '$님은 뭘 타고 이동하는 걸 좋아할까요',
    answers: [
      { text: '그냥 걷기' },
      { text: '자전거' },
      { text: '버스' },
      { text: '지하철' },
      { text: '자동차' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 뭘로 필기하는 걸 좋아할까요',
    answers: [{ text: '볼펜' }, { text: '샤프' }, { text: '연필' }],
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
    title: '$님은 무슨 붕어빵을 먹을까요',
    answers: [
      { text: '팥' },
      { text: '슈크림' },
      { text: '둘다' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 진라면 순한맛을 먹을까요',
    answers: [
      { text: '먹음' },
      { text: '..???' }
    ],
    correctAnswer: -1
  },
  {
    title: '$님은 민초파인가요',
    answers: [{ text: '민초파' }, { text: '반민초파' }, { text: '중립' }],
    correctAnswer: -1
  },
  {
    title: '$님은 탕수육을',
    answers: [{ text: '찍먹하는데요' }, { text: '부먹함' }],
    correctAnswer: -1
  },
  {
    title: '$님은 파인애플 피자를 먹나요',
    answers: [{ text: '먹음' }, { text: '그걸왜먹냐' }],
    correctAnswer: -1
  },
  {
    title: '$님의 MBTI는 무엇일까요',
    answers: [
      { text: 'ENFP' },
      { text: 'ENFJ' },
      { text: 'ENTP' },
      { text: 'ENTJ' },
      { text: 'ESFP' },
      { text: 'ESFJ' },
      { text: 'ESTP' },
      { text: 'ESTJ' },
      { text: 'INFP' },
      { text: 'INFJ' },
      { text: 'INTP' },
      { text: 'INTJ' },
      { text: 'ISFP' },
      { text: 'ISFJ' },
      { text: 'ISTP' },
      { text: 'ISTJ' },
    ],
    correctAnswer: -1
  }
])
