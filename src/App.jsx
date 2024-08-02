import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SearchAppBar from './SearchAppBar';
import Home from './Home';
import Comment from './Comment';
import ContactForm from './ContactForm';
import ContactUs from './ContactUs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// });


function App() {
  return (
        // <ThemeProvider theme={theme}>

    <BrowserRouter>
      <div className='app-container'>
          <div className='nav-page'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="comment" element={<Comment />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="contactus" element={<ContactUs />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
        // </ThemeProvider>
  )
}

export default App
