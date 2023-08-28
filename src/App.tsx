import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import { Register } from './pages/Register'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Subscribe } from './pages/Subscribe'
import { Account } from './pages/Account'
import { SubscriptionAfterReg } from './pages/SubscriptionAfterReg'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/join',
    element: <SubscriptionAfterReg />,
  },
  {
    path: '/subscribe',
    element: <Subscribe />,
  },
  {
    path: '/account',
    element: <Account />,
  },
])

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
