import React from 'react'
import Button from '@material-ui/core/Button'
import { useSetRecoilState } from 'recoil'
import requestId from '../../atoms/requestId'

const RefreshJokeButton = () => {
  const set = useSetRecoilState(requestId)

  const refreshJoke = () => {
    set((x) => x + 1)
  }

  return (
    <Button onClick={refreshJoke} variant='contained' color='secondary'>Get new joke</Button>
  )
}

export default RefreshJokeButton