export default function Home() {
  return (
    <>
      {/* Bento Grid Section */}
      <section className="bento-section" style={{ padding: 0 }}>
        <div style={{ width: '100%' }}>
          <img 
            src="/Imagens/Elementos/Mosaico.png" 
            alt="Mosaico GEIRA" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </section>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-avatars">
          <div className="avatar" title="Avatar 1"></div>
          <div className="avatar" title="Avatar 2"></div>
          <div className="avatar" title="Avatar 3"></div>
          <div className="avatar" title="Avatar 4"></div>
        </div>
        <div className="hero-credibility">
          <span>⭐</span> Pesquisa com impacto real
        </div>
        <h1 className="hero-title">Educação Inclusiva<br/>na Amazônia</h1>
        <p className="hero-subtitle">
          O GEIRA promove pesquisa, formação e práticas inclusivas para todas as pessoas.
        </p>
        <button className="btn btn-black">Conheça o GEIRA</button>
      </section>

      {/* About Section */}
      <section className="about-section grid-pattern">
        <div className="about-content">
          <span className="section-label">Sobre o GEIRA</span>
          <p>
            O GEIRA é um grupo de pesquisa acadêmica <strong>focado em educação especial inclusiva</strong> na região amazônica. 
            Nosso trabalho é criar soluções reais e <strong>práticas para educadores e famílias</strong>, transformando o 
            ambiente de aprendizado para que seja acessível a todos. Acreditamos que a inclusão <strong>muda a sociedade</strong> 
            desde a base.
          </p>
          <button className="btn btn-black">Saiba Mais</button>
        </div>
        <div className="about-bento">
          <div className="bento-cell bg-coral">
             <span style={{fontWeight:'bold'}}>Murici Inteiro</span>
          </div>
          <div className="bento-cell bg-amarelo">
             <span style={{fontWeight:'bold'}}>Iara Inteiro</span>
          </div>
          <div className="bento-cell bg-roxo">
             <span style={{fontWeight:'bold'}}>Kauan Inteiro</span>
          </div>
          <div className="bento-cell bg-rosa">
             <span style={{fontWeight:'bold'}}>Tupã Inteiro</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="projects-section">
        <span className="section-label">Nossos Projetos</span>
        <h2>Pesquisas que Fazem a Diferença</h2>
        
        <div className="projects-grid">
          <div className="project-card" style={{backgroundColor: 'var(--coral)'}}>
            <div className="project-icon">📖</div>
            <h3>Formação Docente</h3>
            <p>Capacitação contínua para professores da rede pública em práticas inclusivas.</p>
            <span className="project-tag" style={{color: 'var(--coral)'}}>Pesquisa</span>
          </div>
          
          <div className="project-card" style={{backgroundColor: 'var(--roxo)'}}>
            <div className="project-icon">🔍</div>
            <h3>Materiais Adaptados</h3>
            <p>Desenvolvimento de recursos pedagógicos para alunos com deficiência visual e TEA.</p>
            <span className="project-tag" style={{color: 'var(--roxo)'}}>Desenvolvimento</span>
          </div>
          
          <div className="project-card" style={{backgroundColor: 'var(--amarelo)'}}>
            <div className="project-icon">✋</div>
            <h3>Libras na Escola</h3>
            <p>Implementação do ensino de Libras como L2 no currículo do ensino fundamental.</p>
            <span className="project-tag" style={{color: '#ca8a04'}}>Prática</span>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="events-section grid-pattern">
        <div className="events-header">
          <span className="section-label">Agenda</span>
          <h2>Próximos Eventos</h2>
          <div style={{marginTop: '24px', width: '200px', height: '300px', backgroundColor: 'var(--rosa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
            Personagem Corpo Inteiro
          </div>
        </div>
        <div className="events-list">
          <div className="event-card" style={{borderLeftColor: 'var(--coral)'}}>
            <div className="event-date" style={{color: 'var(--coral)'}}>
              15 <span>Nov</span>
            </div>
            <div className="event-details">
              <h3>Simpósio de Educação Inclusiva</h3>
              <p>Auditório Central da UFPA</p>
            </div>
            <a href="#" className="event-link" style={{color: 'var(--coral)'}}>Ver mais</a>
          </div>

          <div className="event-card" style={{borderLeftColor: 'var(--roxo)'}}>
            <div className="event-date" style={{color: 'var(--roxo)'}}>
              28 <span>Nov</span>
            </div>
            <div className="event-details">
              <h3>Oficina de Materiais Táteis</h3>
              <p>Laboratório de Pedagogia</p>
            </div>
            <a href="#" className="event-link" style={{color: 'var(--roxo)'}}>Ver mais</a>
          </div>

          <div className="event-card" style={{borderLeftColor: 'var(--amarelo)'}}>
            <div className="event-date" style={{color: '#ca8a04'}}>
              05 <span>Dez</span>
            </div>
            <div className="event-details">
              <h3>Encontro Regional de Libras</h3>
              <p>Online via Zoom</p>
            </div>
            <a href="#" className="event-link" style={{color: '#ca8a04'}}>Ver mais</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <span className="section-label">Blog</span>
        <h2>Reflexões sobre Inclusão</h2>

        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-thumb bg-coral">
              {/* Decorative shapes can go here */}
            </div>
            <div className="blog-content">
              <span className="blog-tag" style={{color: 'var(--coral)'}}>Artigo</span>
              <h3>O papel do brincar na educação especial</h3>
              <p className="blog-date">10 de Outubro, 2025</p>
              <a href="#" className="blog-link" style={{color: 'var(--coral)'}}>Ler artigo</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumb bg-roxo"></div>
            <div className="blog-content">
              <span className="blog-tag" style={{color: 'var(--roxo)'}}>Pesquisa</span>
              <h3>Tecnologias assistivas de baixo custo</h3>
              <p className="blog-date">22 de Setembro, 2025</p>
              <a href="#" className="blog-link" style={{color: 'var(--roxo)'}}>Ler artigo</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumb bg-amarelo"></div>
            <div className="blog-content">
              <span className="blog-tag" style={{color: '#ca8a04'}}>Relato</span>
              <h3>Histórias de sucesso na alfabetização</h3>
              <p className="blog-date">05 de Setembro, 2025</p>
              <a href="#" className="blog-link" style={{color: '#ca8a04'}}>Ler artigo</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section grid-pattern">
        <div className="cta-header">
          <img src="/Imagens/Elementos/Logo.png" alt="GEIRA Logo" style={{ height: '32px' }} />
          <span className="section-label" style={{marginBottom: 0}}>Faça parte do GEIRA</span>
        </div>
        
        <h2 className="cta-title">
          Pesquise
          <span className="cta-icon-inline">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <br/>
          Transforme
        </h2>
        
        <div className="cta-bottom">
          <p className="cta-subtitle">Contribua com a educação inclusiva na Amazônia.</p>
          <button className="btn btn-black" style={{padding: '16px 32px', fontSize: '16px'}}>Entre em Contato</button>
        </div>
      </section>
    </>
  );
}
