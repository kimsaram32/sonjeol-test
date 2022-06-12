import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Link, useNavigate } from 'react-router-dom'

const templateList = [
  {
    title: '처음부터',
    desc: '당신의 머릿속처럼 텅 빈 상태로 시작합니다.',
    key: 'empty'
  },
  {
    title: '일반',
    desc: '맨날 보던 그 문제들입니다.',
    key: 'basic'
  },
  {
    title: '호불호 + 밈',
    desc: '우리는 한국인이니까 한국식 문제로도 해봅시다.',
    key: 'likes'
  }
]

const StyledHome = styled.div`
  & > div {
    padding: 80px 10px;
  }

  .title {
    background-color: ${(props) => props.theme.main};

    .text {
      height: 100px;

      h1 {
        font-size: 30px;
        font-family: 'Noto Sans KR Bold';
        color: #fff;
      }

      p {
        margin-top: 20px;
        font-size: 20px;
        color: #ddd;
      }
    }

    button {
      margin-top: 40px;
      background-color: ${(props) => darken(0.3, props.theme.main)};
      color: #fff;
    }
  }

  h2 {
    font-size: 25px;
    margin-bottom: 20px;
    font-family: 'Noto Sans KR Bold';
  }

  .start {
    background-color: #eee;

    ul {
      display: flex;
      padding-top: 30px;
      min-height: 200px;
      gap: 30px;

      @media screen and (max-width: 512px) {
        flex-direction: column;
      }
    }

    li {
      flex-basis: 0;
      flex-grow: 1;
      padding: 30px;
      border: 1px solid #ddd;
      border-radius: 15px;
      cursor: pointer;
      background-color: #fff;

      h3 {
        font-size: 20px;
      }

      p {
        margin-top: 20px;
      }
    }
  }

  .about {
    p {
      padding-top: 15px;
      line-height: 26px;
    }
  }
`

const Home = () => {
  const navigate = useNavigate()

  return (
    <StyledHome>
      <div className="title">
        <div className="container">
          <div className="text">
            <h1>손절 테스트 Sonjeol Test</h1>
            <p>당신의 친구를 손절할지 알아보세요</p>
          </div>
          <Link to="/quiz">
            <button className="btn">지금 만드세요</button>
          </Link>
        </div>
      </div>
      <div className="start">
        <div className="container">
          <h2>시작하기</h2>
          <ul>
            {templateList.map((template, index) => (
              <li
                key={index}
                onClick={() => navigate(`/quiz?template=${template.key}`)}
              >
                <h3>{template.title}</h3>
                <p>{template.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <h2>참고사항</h2>
          <p>
            이거 관련해서 쓰는 서비스가 일정량 쓰면 유료라서
            <br />
            퀴즈에 문제를 너무 많이 넣으면 서비스 터질수도 있어요
            <br />
            물론 엄청 많이 넣어야 그렇긴 한데 혹시 몰라서
            <br />
            그러니까 도배하려고 이상한 짓거리 하지 마세요 얼네ㅡ에ㅡㄴㅇ
          </p>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home
