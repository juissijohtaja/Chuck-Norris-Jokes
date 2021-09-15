import { grey, indigo, pink } from '@material-ui/core/colors'

const materialUiTheme = {
  palette: {
    primary: {
      main: indigo[300],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      default: grey[200]
    },
    darkAccent: {
      main: grey[900],
    },
    lightAccent: {
      main: grey[300],
    },
    type: 'light',
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: 'white',
      },
    },
  },
}
export default materialUiTheme