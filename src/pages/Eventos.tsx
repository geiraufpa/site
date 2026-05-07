import React from 'react';

export default function Eventos() {
  return (
    <div className="eventos-page">
      <section className="hero-simple" style={{ backgroundColor: 'var(--roxo)', color: 'var(--branco)' }}>
        <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.3)' }}>Conceito do Projeto</span>
        <h1 style={{ color: 'var(--branco)' }}>Estrutura e Visão do Site</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)' }}>Guia técnico e conceitual para a equipe sobre o desenvolvimento do Portal GEIRA.</p>
      </section>

      <section className="concept-grid-section">
        <div className="concept-grid">
          
          {/* Ideia do Site */}
          <div className="concept-card full-width">
            <div className="card-header">
              <span className="icon">💡</span>
              <h3>A Ideia do Site</h3>
            </div>
            <p>O portal GEIRA foi concebido para ser o centro de gravidade da Educação Inclusiva na Região Amazônica. Mais do que um site institucional, é uma plataforma de <strong>pesquisa, formação e práticas reais</strong>. Ele serve como ponte entre a academia e a comunidade (professores e famílias), oferecendo recursos acessíveis e facilitando a disseminação de conhecimento inclusivo.</p>
          </div>

          {/* Design e Formas */}
          <div className="concept-card">
            <div className="card-header">
              <span className="icon">🎨</span>
              <h3>Design e Formas</h3>
            </div>
            <p>O design segue a filosofia <strong>"Bento Grid"</strong> e <strong>Flat Design</strong>, com cantos muito arredondados e cores vibrantes. As formas são orgânicas e fluidas, evitando rigidez para representar a vida e a adaptação constante necessária na inclusão.</p>
            <div className="design-preview">
              <div className="shape bg-coral"></div>
              <div className="shape bg-amarelo"></div>
              <div className="shape bg-roxo"></div>
            </div>
          </div>

          {/* Grafismo e Desenhos */}
          <div className="concept-card">
            <div className="card-header">
              <span className="icon">🍃</span>
              <h3>Grafismo e DNA Regional</h3>
            </div>
            <p>Os grafismos utilizam elementos da <strong>biodiversidade amazônica</strong> (folhas, rios, pétalas) de forma estilizada. Os desenhos dos mascotes e elementos visuais são baseados em linhas bold e preenchimentos sólidos, criando uma identidade lúdica e acolhedora.</p>
            <div className="grafismo-sample">
              <img src="/Imagens/Elementos/Grafismo 1.png" alt="Exemplo de Grafismo" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Acessibilidade */}
          <div className="concept-card full-width bg-off-white">
            <div className="card-header">
              <span className="icon">♿</span>
              <h3>Acessibilidade Nativa</h3>
            </div>
            <div className="access-features">
              <div className="feature">
                <strong>VLibras</strong>
                <p>Tradução em tempo real para Libras via avatar 3D.</p>
              </div>
              <div className="feature">
                <strong>Alto Contraste</strong>
                <p>Esquema de cores otimizado para baixa visão.</p>
              </div>
              <div className="feature">
                <strong>Escalabilidade</strong>
                <p>Ajuste dinâmico do tamanho das fontes e layout.</p>
              </div>
              <div className="feature">
                <strong>Navegação</strong>
                <p>Skip links e estrutura semântica para leitores de tela.</p>
              </div>
            </div>
          </div>

          {/* Usuário: Colaborador */}
          <div className="concept-card highlight-blue">
            <div className="card-header">
              <span className="icon">🛠️</span>
              <h3>Perfil: Colaborador</h3>
            </div>
            <p>Destinado a bolsistas e integrantes do grupo. Permite a gestão total do ecossistema:</p>
            <ul className="concept-list">
              <li>Manutenção de conteúdos do site</li>
              <li>Criação e edição de eventos</li>
              <li>Gerenciamento de formulários e inscrições</li>
              <li>Alimentação do blog e repositório</li>
            </ul>
          </div>

          {/* Usuário: Participante */}
          <div className="concept-card highlight-green">
            <div className="card-header">
              <span className="icon">🎓</span>
              <h3>Perfil: Participante</h3>
            </div>
            <p>Destinado ao público geral (professores, famílias, alunos):</p>
            <ul className="concept-list">
              <li>Inscrição simplificada em eventos</li>
              <li>Acompanhamento via Meet ou YouTube</li>
              <li>Download de certificados automáticos</li>
              <li>Acesso a materiais e publicações</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="provisional-footer">
        <p>Esta página de diretrizes auxilia a equipe a manter a unidade visual e funcional do projeto GEIRA.</p>
      </section>
    </div>
  );
}
