import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid #ccc;
  height: 65px;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .title {
    position: absolute;
    left: 30px;
    font-size: 20px;

    b {
      color: ${(props) => props.theme.main};
    }
  }

  .link-container {
    position: absolute;
    right: 30px;
  }

  @media screen and (max-width: 250px) {
    .title {
      left: 0;
      right: 0;
      margin: auto;
    }

    .link-container {
      display: none;
    }
  }
`

const StyledLink = styled(NavLink).attrs(() => ({
  activeclassname: 'active',
  end: true
}))`
  position: relative;
  margin-right: 25px;

  &.active {
    font-family: 'Noto Sans KR Bold';
    color: ${(props) => props.theme.main};
  }

  &:hover {
    color: gray;
  }

  &:last-child {
    margin-right: 0;
  }

  &::before {
    content: '';
    background-color: gray;
    width: 1px;
    height: 100%;
    position: absolute;
    right: -12.5px;
  }

  &:last-child::before {
    content: none;
  }
`

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <div className="title">
          <Link to="/"><b>S</b>onjeol <b>T</b>est</Link>
        </div>
        <div className="link-container">
          <StyledLink to="/">홈</StyledLink>
          <StyledLink to="/quiz">만들기</StyledLink>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
