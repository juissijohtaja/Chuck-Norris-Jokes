import React from 'react'
import Box from '@material-ui/core/Box'
import { useRecoilValue } from 'recoil'
import norrisJoke from '../../selectors/selectNorrisJoke'

const RandomJoke = () => {
  const joke = useRecoilValue(norrisJoke)
  console.log('norrisJoke', joke)

  return (
    <Box>
      <p>{joke.value}</p>
    </Box>
  )
}

export default RandomJoke