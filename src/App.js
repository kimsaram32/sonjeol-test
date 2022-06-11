import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FontStyle from './FontStyle'
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home'
import Test from './pages/Test'
import CreateTest from './pages/CreateTest'
import Error from './pages/Error'
import Layout from './components/Layout'
import { QuizProvider } from './QuizContext'
import ShareTest from './pages/ShareTest'
import TestResult from './pages/TestResult'

const theme = {
  main: '#4D5BFA'
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FontStyle />
        <GlobalStyle />
        <QuizProvider>
          <Routes>
            <Route path="*" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="quiz">
                <Route index element={<CreateTest />} />
                <Route path=":testId">
                  <Route index element={<Test />} />
                  <Route path="result" element={<TestResult />} />
                </Route>
              </Route>
              <Route path="share/:testId" element={<ShareTest />} />
              <Route
                path="*"
                element={<Error />}
              />
            </Route>
          </Routes>
        </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
