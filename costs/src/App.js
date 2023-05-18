import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/pages/Home'
import Company from './component/pages/Company'
import Contact from './component/pages/Contact'
import NewProject from './component/pages/NewProject'

import Container from './component/layout/Container'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/company'>Empresa</Link>
            <Link to='/contact'>Contato</Link>
            <Link to='/newproject'>Novo Projeto</Link>
        </div>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/company" element={<Company/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/newproject" element={<NewProject/>} />              
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
