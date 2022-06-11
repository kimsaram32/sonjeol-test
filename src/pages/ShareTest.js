import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 40px 10px 100px;
  height: 100vh;

  h1 {
    font-size: 30px;
    margin-bottom: 15px;
    font-family: 'Noto Sans KR Bold';
  }

  .copy-text {
    cursor: pointer;
    margin-top: 20px;
    padding: 13px 23px;
    border-radius: 20px;
    background-color: ${(props) => lighten(0.35, props.theme.main)};
    border: 2px solid ${(props) => props.theme.main};
    font-size: 18px;
    max-width: 100%;
    word-wrap: break-word;
  }

  .click-to-copy {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }

  .desc {
    margin-top: 30px;
  }
`

const ShareTest = () => {
  const { testId } = useParams()
  const link = `https://${window.location.hostname}/quiz/${testId}`

  return (
    <div className="container">
      <StyledPage>
        <h1>퀴즈 생성 완료!</h1>
        <CopyToClipboard text={link}>
          <p className="copy-text">{link}</p>
        </CopyToClipboard>
        <p className="click-to-copy">(클릭해서 복사하세요)</p>
        <p className="desc">
          어서 이 테스트를 공유해서 친구들을 손절할지 알아보세요!
        </p>
      </StyledPage>
    </div>
  )
}

export default ShareTest
