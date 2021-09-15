import React, { Suspense } from 'react'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'
import RandomJoke from './RandomJoke'

const useStyles = makeStyles((theme) => ({
  introTheme: {
    backgroundColor: theme.palette.darkAccent.main,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    fontSize: '4.0rem',
    color: theme.palette.lightAccent.main,
    minHeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.0rem',
    },
  },
}))

const Intro = () => {
  const classes = useStyles()

  return (
    <Box flexGrow={1} className={classes.introTheme}>
      <Suspense fallback={<LinearProgress color='secondary' />}>
        <RandomJoke />
      </Suspense>
    </Box>
  )
}

export default Intro