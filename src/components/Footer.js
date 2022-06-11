import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  min-height: 120px;
  text-align: center;
  background-color: #444;

  .title {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Noto Sans KR Bold';
    text-align: left;
    color: #eee;
  }

  ul {
    display: flex;
    gap: 20px;

    li {
      position: relative;
      color: #ddd;

      &::after {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        right: -10px;
        background-color: #888;
      }

      &:last-child::after {
        content: none;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="title">SonjeolTest</div>
        <ul>
          <li>쓸말없음</li>
          <li>김사람이 만듦ㄴㅇㄹ</li>
          <li>럴럴럴럴럴</li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer
