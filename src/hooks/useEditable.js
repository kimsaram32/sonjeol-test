import { useLocation } from 'react-router-dom'

const useEditable = () => {
  const { pathname } = useLocation()
  return pathname === '/create'
}

export default useEditable