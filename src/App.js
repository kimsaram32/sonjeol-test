import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home'
import Test from './pages/Test'
import CreateTest from './pages/CreateTest'
import Layout from './components/Layout'
import { QuizProvider } from './QuizContext'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QuizProvider>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Test />} />
            <Route path="create" element={<CreateTest />} />
            <Route path="*" element={<div>에러창 나중에</div>} />
          </Route>
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  )
}

export default App
