import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Regressiva from './pages/Regressiva.jsx';
import Conversa from './pages/Conversa.jsx';
import Namoro from './pages/Namoro.jsx';
import TextinhosPage from './pages/TextinhosPage.jsx';
import NamoroPuzzle from './pages/QuebraCabeca.jsx';
import MapaMagico from './pages/MapaMagico.jsx';
import { useEffect } from 'react';
import { ReactNode } from 'react';  // Importando ReactNode para tipar children

// Componente para aplicar destaque à rota ativa
interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isActive ? 'text-luna-blue font-semibold' : 'text-blue-500'
      } hover:underline transition`}
    >
      {children}
    </Link>
  );
};

// Scroll para o topo ao mudar de rota (melhora UX)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <nav className="bg-white/80 backdrop-blur-md shadow p-4 sticky top-0 z-50">
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/inicio">Início</NavLink></li>
          <li><NavLink to="/namoro">Namoro</NavLink></li>
          <li><NavLink to="/regressiva">Futuro?!?</NavLink></li>
          <li><NavLink to="/textinhos">Textinhos</NavLink></li>
          <li><NavLink to="/surpresa">Surpresa!!</NavLink></li>
          <li><NavLink to="/mapa">Mapa Mágico</NavLink></li>
        </ul>
      </nav>

      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regressiva" element={<Regressiva />} />
          <Route path="/inicio" element={<Conversa />} />
          <Route path="/namoro" element={<Namoro />} />
          <Route path="/textinhos" element={<TextinhosPage />} />
          <Route path="/surpresa" element={<NamoroPuzzle />} />
          <Route path="/mapa" element={<MapaMagico />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
