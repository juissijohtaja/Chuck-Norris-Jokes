import { atom } from 'recoil'

const randomJoke = atom({
  key: 'randomjoke',
  default: {
    value: 'No jokes'
  }
})

export default randomJoke