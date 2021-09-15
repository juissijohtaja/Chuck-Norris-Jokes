import { selector } from 'recoil'
import requestId from '../atoms/requestId'

const url = 'https://api.chucknorris.io/jokes/random'

const selectNorrisJoke = selector({
  key: 'norrisJoke',
  get: async ({ get }) => {
    get(requestId)
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch(error) {
      console.log(error)
    }
  }
})

export default selectNorrisJoke