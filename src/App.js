import React from 'react'
import './App.css'
import MainNav from './components/MainNav/MainNav'
import Intro from './components/Intro/Intro'
import Footer from './components/Footer/Footer'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

function App() {
  return (
    <div>
      <Box data-testid='app'>
        <MainNav />
        <Container>
          <Intro />
        </Container>
        <Footer />
      </Box>
    </div>
  )
}

export default App