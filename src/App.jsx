import './App.css'
import Nav from './Nav'
import PageContent from './PageContent'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './AppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5F1F',
    },
    secondary: {
      main: '#5D65D2',
    },
    background: {
      main: '##0D1935',
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Raleway',
  }
});


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
      <AppBar color='black' />
        </div>
      <div className='container'>
        <div className='nav'>
          <Nav />
        </div>
        <div className='page-content'>
          <PageContent />
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
