import { atom } from 'recoil'

const loading = atom({
  key: 'loading',
  default: {
    loading: false
  }
})

export default loading