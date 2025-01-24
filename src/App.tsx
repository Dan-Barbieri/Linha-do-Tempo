import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Regressiva from './pages/regressiva.jsx';
import Conversa from './pages/Conversa.jsx';
import Namoro from './pages/Namoro.jsx'; 

function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4">
        <ul className="flex space-x-6 justify-start">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/inicio" className="text-blue-500 hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/namoro" className="text-blue-500 hover:underline">
              Namoro
            </Link>
          </li>
          <li>
            <Link to="/regressiva" className="text-blue-500 hover:underline">
              Futuro?!?
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regressiva" element={<Regressiva />} />
        <Route path="/inicio" element={<Conversa />} />
        <Route path="/namoro" element={<Namoro />} />
      </Routes>
    </Router>
  );
}

export default App;
