import './App.css'
import Nav from './Nav'
import PageContent from './PageContent'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchAppBar from './SearchAppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#393A3A',
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
      <div className='search'>
        <SearchAppBar />
      </div>
      <div className='navigation'>
        <Nav />
      </div>
      <div className='page-content'>
        <PageContent />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
