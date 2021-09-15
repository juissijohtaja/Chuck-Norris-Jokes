import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { grey } from '@material-ui/core/colors'
import { useSetRecoilState } from 'recoil'
import requestId from '../../atoms/requestId'

const useStyles = makeStyles(theme => ({
  footerRoot: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  },
  actionRoot: {
    color: grey[600],
    '&$actionSelected': {
      color: grey[50]
    }
  },
  actionSelected: {
    color: grey[50]
  }
}))

const Footer = () => {
  const classes = useStyles()
  const actionClasses = {
    root: classes.actionRoot,
    selected: classes.actionSelected,
  }
  const [value, setValue] = React.useState(0)

  const set = useSetRecoilState(requestId)
  const refreshJoke = () => {
    set((x) => x + 1)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      classes={{ root: classes.footerRoot }}
      data-testid='footer'
    >
      <BottomNavigationAction
        onClick={refreshJoke}
        classes={actionClasses}
        label='Get new joke'
        icon={<RotateLeftIcon />}
        aria-label='reset view'
      />
    </BottomNavigation>
  )
}

export default Footer