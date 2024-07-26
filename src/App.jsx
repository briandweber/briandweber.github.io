import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SearchAppBar from './SearchAppBar';
import Home from './Home';
import Comment from './Comment';
import ContactForm from './ContactForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='app-container'>
          {/* <SearchAppBar /> */}
          <div className='nav-page'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="comment" element={<Comment />} />
              <Route path="contact" element={<ContactForm />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
