import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage } from './pages/auth/loginPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#494949',
    },
    secondary: {
      main: '#FF5D73',
    },
    error: {
      main: '#f44336',
    },
    divider: '#7C7A7A',
  },
})


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
