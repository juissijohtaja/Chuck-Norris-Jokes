import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import materialUiTheme from './theme'
import { RecoilRoot } from 'recoil'

const theme = createTheme(materialUiTheme)

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
)