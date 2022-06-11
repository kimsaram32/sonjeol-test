import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h1 {
    font-family: 'Noto Sans KR Bold';
    font-size: 30px;
  }

  p {
    margin-top: 20px;
  }
`

const Error = () => {
  return (
    <StyledError className="container">
      <h1>에러가 발생했거나 존재하지 않는 페이지입니다.</h1>
      <p>우와 에러라니 너무 대단해</p>
    </StyledError>
  )
}

export default Error
