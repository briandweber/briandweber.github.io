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
        <SearchAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="comment" element={<Comment />} />
          <Route path="contact" element={<ContactForm />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



// <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="salespeople">
//             <Route path="" element={<SalespeopleList />} />
//             <Route path="new" element={<SalespeopleForm />} />
//           </Route>
//           <Route path="customers">
//             <Route path="" element={<CustomersList />} />
//             <Route path="new" element={<CustomerForm />} />
//           </Route>
//           <Route path="sales">
//             <Route path="" element={<SalesList />} />
//             <Route path="new" element={<SaleForm />} />
