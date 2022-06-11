import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getTestDoc from '../getTestDoc'

const StyledTable = styled.table`
  margin: 40px auto 0;
  min-width: 250px;
  border: 2px solid gray;

  thead {
    background-color: #ddd;
    border-bottom: 1px solid lightgray;
  }

  tr td:first-child {
    border-right: 1px solid lightgray;
  }

  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid lightgray;
  }

  tr:nth-child(2n) {
    background-color: #eee;
  }

  tr:last-child td {
    border-bottom: 0;
  }
`

const Message = styled.p`
  margin-top: 20px;
  line-height: 20px;
`

const ScoreTable = ({ testId }) => {
  const [scoreData, setScoreData] = useState([])

  useEffect(() => {
    ;(async () => {
      const doc = await getTestDoc(testId)
      const testScores = doc.data().scores
      setScoreData(testScores)
    })()
  }, [testId])

  return (
    <>
      {scoreData.length === 0 ? (
        <Message>
          아직 다른 사람들이 풀어보지 않았네요 허허허ㅓ
        </Message>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <td>이름</td>
              <td>점수</td>
            </tr>
          </thead>
          <tbody>
            {scoreData.map(({ nickname, score }, i) => (
              <tr key={i}>
                <td>{nickname}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </>
  )
}

export default ScoreTable
