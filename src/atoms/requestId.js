import { atom } from 'recoil'

const requestId = atom({
  key: 'requestId',
  default: 0
})

export default requestId