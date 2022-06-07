import { useCallback, useState } from 'react'

const useEditForm = () => {
  const [editing, setEditing] = useState(false)

  const toggleEditing = useCallback(() => setEditing((editing) => !editing), [])

  const onSubmit = useCallback((event) => {
    event.preventDefault()
    setEditing(false)
  }, [])

  return [editing, toggleEditing, onSubmit]
}

export default useEditForm
