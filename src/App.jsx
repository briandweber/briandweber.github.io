import './App.css'
import Nav from './Nav'
import PageContent from './PageContent'

function App() {

  return (
    <>
    <div className='container'>
      <div className='nav'>
        <Nav />
      </div>
      <div className='page-content'>
        <PageContent />
      </div>
    </div>
    </>
  )
}

export default App
