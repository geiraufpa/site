import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Projetos from './pages/Projetos';
import Eventos from './pages/Eventos';
import DashboardUsuario from './pages/DashboardUsuario';
import DashboardColaborador from './pages/DashboardColaborador';
import VLibras from './components/VLibras';
import './App.css';

function App() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }
  }, [largeText]);

  return (
    <BrowserRouter>
      <div className="app-container grid-pattern">
        <a href="#inicio" className="skip-link">Pular para o conteúdo principal</a>
        
        {/* Shared Navbar */}
        <nav className="navbar">
          <Link to="/" className="nav-logo" aria-label="GEIRA - Início. Grupo de Educação Inclusiva da Região Amazônica">
            <img src="/Imagens/Elementos/Logo.png" alt="" style={{ height: '40px' }} aria-hidden="true" />
            <span>GEIRA</span>
          </Link>
          <div className="nav-links">
            <Link to="/#inicio">Início</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/eventos">Eventos</Link>
            <Link to="/#blog">Blog</Link>
          </div>
          <div className="nav-actions">
            
            {/* Acessibilidade */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginRight: '8px', borderRight: '1px solid rgba(0,0,0,0.1)', paddingRight: '20px' }}>
              <button 
                onClick={() => setHighContrast(!highContrast)}
                title="Alternar Alto Contraste"
                aria-label="Alternar Alto Contraste"
                style={{
                  backgroundColor: highContrast ? 'var(--preto)' : 'var(--off-white)',
                  color: highContrast ? 'var(--branco)' : 'var(--preto)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                🌗
              </button>
              <div style={{ display: 'flex' }}>
                <button 
                  onClick={() => setLargeText(false)}
                  title="Tamanho de texto normal"
                  aria-label="Tamanho de texto normal"
                  style={{
                    backgroundColor: !largeText ? 'var(--preto)' : 'var(--off-white)',
                    color: !largeText ? 'var(--branco)' : 'var(--preto)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    padding: '6px 10px',
                    borderRadius: '6px 0 0 6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  A-
                </button>
                <button 
                  onClick={() => setLargeText(true)}
                  title="Aumentar tamanho do texto"
                  aria-label="Aumentar tamanho do texto"
                  style={{
                    backgroundColor: largeText ? 'var(--preto)' : 'var(--off-white)',
                    color: largeText ? 'var(--branco)' : 'var(--preto)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderLeft: 'none',
                    padding: '6px 10px',
                    borderRadius: '0 6px 6px 0',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  A+
                </button>
              </div>
            </div>

            <Link to="/login" className="btn btn-black" style={{ textDecoration: 'none' }}>Entrar</Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard-usuario" element={<DashboardUsuario />} />
          <Route path="/dashboard-colaborador" element={<DashboardColaborador />} />
        </Routes>

        {/* Shared Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-brand">
              <h2>GEIRA</h2>
              <p style={{marginBottom: '24px'}}>Grupo de Educação Inclusiva da Região Amazônica. Pesquisa, formação e práticas para todos.</p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'var(--branco)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Ícone Facebook (SVG) */}
                  <svg width="20" height="20" fill="var(--preto)" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'var(--branco)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Ícone Instagram (SVG) */}
                  <svg width="20" height="20" fill="var(--preto)" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-col">
                <h4>Pesquisas</h4>
                <ul>
                  <li><a href="#">Projetos Atuais</a></li>
                  <li><a href="#">Publicações</a></li>
                  <li><a href="#">Grupos de Estudo</a></li>
                  <li><a href="#">Repositório</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Eventos</h4>
                <ul>
                  <li><a href="#">Simpósios</a></li>
                  <li><a href="#">Oficinas</a></li>
                  <li><a href="#">Cursos</a></li>
                  <li><a href="#">Calendário Anual</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Institucional</h4>
                <ul>
                  <li><a href="#">Sobre Nós</a></li>
                  <li><a href="#">Membros</a></li>
                  <li><a href="#">Parceiros</a></li>
                  <li><a href="#">Contato</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 GEIRA. Todos os direitos reservados.</p>
            <div className="footer-legal">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </footer>
        
        {/* VLibras Widget */}
        <VLibras />
      </div>
    </BrowserRouter>
  );
}

export default App;
