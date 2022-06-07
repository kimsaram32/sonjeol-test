import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  background-color: lightgray;
  height: 60px;
  text-align: center;

  div {
    padding: 20px;
    height: 100%;
  }
`

function Layout() {
  return (
    <>
      <Header>
        <div className="container">손절 테스트 Sonjeol Test</div>
      </Header>
      <Outlet />
    </>
  )
}

export default Layout
