import {  RouterProvider } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { router } from './Router'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3db760',
      light: '#afc365',
    },
    secondary: {
      main: '#e4dd09',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}

export default App
