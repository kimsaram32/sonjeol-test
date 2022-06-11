import { firestore } from './firebase'
import { doc, getDoc } from 'firebase/firestore'

const getTestDoc = async (id) => {
  try {
    const docRef = doc(firestore, 'tests', id)
    const testDoc = await getDoc(docRef)

    return testDoc
  } catch (e) {
    return
  }
}

export default getTestDoc