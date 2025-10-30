import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Design from './pages/Design';
import Agri from './pages/Agri';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/agri" element={<Agri />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
