import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, Stack, Projects, Ideas } from './pages';
import './App.css'

{/* 
  import { Navbar } from './components';
*/}

function App() {

  return (
    <>
      <Router>
        {/*        
          <Navbar />
        */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/ideas' element={<Ideas />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
