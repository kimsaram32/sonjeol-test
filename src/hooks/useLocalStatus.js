const useLocalStatus = (testId) => {
  const getStatus = () => {
    const status = window.localStorage.getItem(testId)

    if (status) {
      return status.split(',')
    }
    return false;
  }

  const setStatus = ({ nickname, progress, answerCount }) => {
    const [prevNickname, prevProgress, prevAnswerCount] = getStatus() || ['', 0, 0]

    window.localStorage.setItem(
      testId,
      `${nickname ?? prevNickname},${progress ?? prevProgress},${answerCount ?? prevAnswerCount}`
    )
  }

  const clearStatus = () => {
    window.localStorage.removeItem(testId)
  }

  return [getStatus, setStatus, clearStatus]
}

export default useLocalStatus
