import { useMatch } from 'react-router-dom'

const useEditable = () => {
  return useMatch('/quiz')
}

export default useEditable