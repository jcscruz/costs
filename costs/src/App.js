import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './component/pages/Home'
import Company from './component/pages/Company'
import Projects from './component/pages/Projects'
import Contact from './component/pages/Contact'
import NewProject from './component/pages/NewProject'

import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Container from './component/layout/Container'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/company" element={<Company/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/newproject" element={<NewProject/>} />              
          </Routes>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
