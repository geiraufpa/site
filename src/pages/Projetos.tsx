import React, { useState } from 'react';

const characters = [
  {
    name: 'Iara',
    age: '8 anos',
    description: 'Criança com deficiência visual · Traços indígenas amazônicos. Menina de traços suaves com referências indígenas amazônicas — olhos amendoados, sobrancelhas marcadas, cabelo preto liso e comprido. Usa óculos com lentes muito espessas (deficiência visual baixa visão) e segura uma bengala branca de identificação. Expressão curiosa e sorridente.',
    tag: 'Deficiência visual',
    image: '/Imagens/Personagens/Iara - Busto.png',
    color: 'var(--amarelo)'
  },
  {
    name: 'Kauan',
    age: '10 anos',
    description: 'Criança surda · Implante coclear visível. Menino de cabelo crespo curto, com implante coclear claramente visível atrás da orelha direita. Usa camiseta com o símbolo das mãos em Libras estampado. Expressão animada, boca aberta em sorriso largo. Traços afro-brasileiros.',
    tag: 'Surdez / implante coclear',
    image: '/Imagens/Personagens/Kauan - Busto.png',
    color: 'var(--roxo)'
  },
  {
    name: 'Murici',
    age: '7 anos',
    description: 'Criança autista · Cordão sensorial com quebra-cabeças. Menina de cabelo cacheado com muito volume, nome inspirado na fruta amazônica. Usa um cordão sensorial pendurado no pescoço com peças coloridas em formato de quebra-cabeça. Expressão concentrada, olhar levemente para baixo (introspecção), mas com um sorriso tímido. Traços miscigenados brasileiros.',
    tag: 'Autismo',
    image: '/Imagens/Personagens/Murici - Busto.png',
    color: 'var(--coral)'
  },
  {
    name: 'Tupã',
    age: '12 anos',
    description: 'Criança com deficiência física · Cadeira de rodas · Traços ribeirinhos. Menino com traços de criança ribeirinha amazônica — pele escura, cabelo preto liso levantado em topete. Está sentado em cadeira de rodas manual. Expressão descontraída, um braço apoiado na roda com postura confiante.',
    tag: 'Deficiência física',
    image: '/Imagens/Personagens/Tupã - Busto.png',
    color: 'var(--rosa)'
  },
  {
    name: 'Naara',
    age: '9 anos',
    description: 'Criança sem deficiência · Cabelo black power · Traços afro-brasileiros. Menina com cabelo black power extremamente volumoso e redondo, traços afro-brasileiros marcantes. Expressão muito animada e expressiva, boca aberta em gargalhada. Representa a criança neurotípica dentro do ambiente inclusivo — alegre, acolhedora.',
    tag: 'Sem deficiência',
    image: '/Imagens/Personagens/Naara - Busto.png',
    color: 'var(--lilas)'
  },
  {
    name: 'Pirá',
    age: 'Adulto, ~35 anos',
    description: 'Professor / pesquisador · Sem deficiência · Traços indígenas amazônicos. Adulto com traços indígenas amazônicos evidentes — pômulos altos, olhos amendoados, cabelo preto liso e reto. Aparência de professor ou pesquisador: usa camisa social, segura um livro ou caderno. Expressão séria mas acolhedora.',
    tag: 'Adulto sem deficiência',
    image: '/Imagens/Personagens/Pirá -  Busto.png',
    color: 'var(--preto)'
  },
  {
    name: 'Beija',
    age: 'Adulta, ~30 anos',
    description: 'Pesquisadora surda · Usa Libras · Cabelo cacheado médio. Mulher adulta surda, pesquisadora da área. Cabelo cacheado médio solto. Uma de suas mãos está posicionada em um sinal de Libras, tornando sua identidade surda visível e positiva. Expressão determinada e confiante.',
    tag: 'Surdez',
    image: '/Imagens/Personagens/Beija - Busto.png',
    color: 'var(--roxo)'
  },
  {
    name: 'Solano',
    age: 'Adulto, ~40 anos',
    description: 'Professor com deficiência física · Prótese no braço · Traços afro-amazônicos. Homem adulto com traços afro-amazônicos, barba curta, cabelo crespo. Usa uma prótese de braço direito. Expressão firme e acolhedora — representa o professor com deficiência como referência positiva de representatividade.',
    tag: 'Deficiência física',
    image: '/Imagens/Personagens/Solano - Busto.png',
    color: 'var(--coral)'
  }
];

export default function Projetos() {
  const [modalOpen, setModalOpen] = useState(false);

  const identityText = {
    title: "IDENTIDADE VISUAL DO GEIRA",
    subtitle: "Grupo de Educação Inclusiva da Região Amazônica",
    sections: [
      {
        title: "O Símbolo",
        content: "A marca do GEIRA é composta por cinco figuras humanas fluidas dispostas em movimento circular, cada uma representada por uma cor distinta e vibrante. Juntas, essas figuras formam uma roda viva — um símbolo de comunidade, pertencimento e ação coletiva. Cada figura é composta por dois elementos essenciais: um círculo que representa a cabeça — a identidade, o pensamento, a singularidade de cada pessoa — e um corpo orgânico e dinâmico que se curva em direção ao centro, sugerindo movimento, dança e aproximação. Não há rigidez nas formas: tudo é fluido, vivo e em transformação, assim como é o processo da inclusão."
      },
      {
        title: "As Cores",
        content: "As cinco cores da marca não são escolhas estéticas aleatórias — são declarações de diversidade. Cada cor representa uma pessoa diferente, uma história diferente, uma forma diferente de existir no mundo. O azul, o verde, o vermelho, o amarelo e o roxo coexistem em harmonia sem que nenhuma cor precise apagar ou diminuir a outra para brilhar. Essa é a essência da educação inclusiva: a diferença não como obstáculo, mas como riqueza."
      },
      {
        title: "O Movimento Circular",
        content: "As figuras não estão paradas — estão em rotação, em abraço, em dança. O movimento circular da composição evoca três ideias centrais ao trabalho do GEIRA: A primeira é a roda de conversa, forma ancestral e democrática de construção coletiva do conhecimento, profundamente enraizada nas culturas amazônicas e nas práticas pedagógicas inclusivas. A segunda é o ciclo contínuo da pesquisa, da formação e da prática — conhecimento que se renova, que volta ao ponto de origem transformado. A terceira é o abraço coletivo — ninguém está de fora do círculo. Todas as pessoas, com suas diferenças e singularidades, ocupam um lugar igual e essencial na roda."
      },
      {
        title: "A Unidade na Diversidade",
        content: "Olhando para a marca como um todo, o que se vê é uma só forma — um círculo coeso, harmonioso, completo. Mas ao aproximar o olhar, percebe-se que esse todo é feito de partes distintas, cada uma com sua cor, seu ritmo, sua direção. É a síntese visual da missão do GEIRA: construir espaços educativos onde cada pessoa — com ou sem deficiência, de qualquer etnia, origem ou modo de ser — encontre seu lugar no círculo. Não apesar das diferenças. Por causa delas."
      },
      {
        title: "A Região Amazônica como Contexto",
        content: "O GEIRA nasce e atua na Amazônia — território de biodiversidade inigualável, de povos originários, ribeirinhos e quilombolas, de culturas que sempre souberam que a riqueza está na pluralidade. A marca carrega esse DNA regional: as formas orgânicas e fluidas evocam a natureza amazônica, os rios que serpenteiam, as folhas que se curvam ao vento. A inclusão que o GEIRA pratica não é importada — ela cresce daqui, enraizada nessa terra e nessa gente."
      }
    ]
  };

  return (
    <div className="projetos-page">
      <section className="hero-simple">
        <span className="section-label">Amostra Provisória</span>
        <h1>Diretrizes de Marca e Personagens</h1>
        <p>Apresentação da identidade visual e dos mascotes para avaliação da equipe.</p>
      </section>

      <section className="characters-grid-section">
        <div className="characters-grid">
          {/* Card da Identidade Visual */}
          <div className="character-card identity-card" onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
            <div className="character-image-container" style={{ backgroundColor: 'var(--off-white)', padding: '40px' }}>
              <img src="/Imagens/Elementos/Logo.png" alt="GEIRA Logo" style={{ objectFit: 'contain' }} />
            </div>
            <div className="character-info">
              <div className="character-header">
                <h3>Identidade Visual</h3>
              </div>
              <span className="character-tag" style={{ color: 'var(--roxo)' }}>Marca do GEIRA</span>
              <p>Conheça a proposta e o conceito por trás do símbolo, cores e movimento que representam nosso grupo.</p>
              <button className="btn-text" style={{ marginTop: 'auto', textAlign: 'left', padding: 0, fontWeight: 'bold', color: 'var(--roxo)', border: 'none', background: 'none', cursor: 'pointer' }}>
                Ver conceito completo →
              </button>
            </div>
          </div>

          {characters.map((char, index) => (
            <div key={index} className="character-card">
              <div className="character-image-container" style={{ backgroundColor: char.color }}>
                <img src={char.image} alt={char.name} />
              </div>
              <div className="character-info">
                <div className="character-header">
                  <h3>{char.name}</h3>
                  <span className="character-age">{char.age}</span>
                </div>
                <span className="character-tag" style={{ color: char.color === 'var(--preto)' ? 'var(--preto)' : char.color }}>{char.tag}</span>
                <p>{char.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal da Identidade Visual */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Fechar modal">×</button>
            <div className="modal-header">
              <img src="/Imagens/Elementos/Logo.png" alt="Logo GEIRA" style={{ height: '60px', marginBottom: '20px' }} />
              <h2>{identityText.title}</h2>
              <p className="modal-subtitle">{identityText.subtitle}</p>
            </div>
            <div className="modal-body">
              <div className="modal-main-image">
                <img src="/Imagens/Elementos/GEIRA LOGO.png" alt="Aplicações da Logo GEIRA" style={{ width: '100%', borderRadius: '12px', marginBottom: '40px', border: '1px solid #eee' }} />
              </div>
              {identityText.sections.map((section, idx) => (
                <div key={idx} className="modal-section">
                  <h4>{section.title}</h4>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-black" onClick={() => setModalOpen(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* Galeria de Versões Alternativas (Corpo Inteiro) */}
      <section className="gallery-section">
        <div className="gallery-header">
          <span className="section-label">Galeria de Versões</span>
          <h2>Personagens - Corpo Inteiro</h2>
          <p>Confira as versões completas desenvolvidas para os materiais pedagógicos.</p>
        </div>
        
        <div className="gallery-container">
          <div className="gallery-scroller">
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Iara - Corpo + cor.png" alt="Iara" />
              <span>Iara</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Kauan -  Corpo inteiro.png" alt="Kauan" />
              <span>Kauan</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Murici - Corpo inteiro.png" alt="Murici" />
              <span>Murici</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Tupã - Corpo inteiro.png" alt="Tupã" />
              <span>Tupã</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Naara - Corpo inteiro + cor.png" alt="Naara" />
              <span>Naara</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Pirá - Corpo inteiro.png" alt="Pirá" />
              <span>Pirá</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Beija - corpo inteiro.png" alt="Beija" />
              <span>Beija</span>
            </div>
            <div className="gallery-item">
              <img src="/Imagens/Personagens/Solano - Corpo inteiro.png" alt="Solano" />
              <span>Solano</span>
            </div>
          </div>
        </div>
      </section>

      <section className="provisional-footer">
        <p>Esta página é uma amostra técnica para visualização dos personagens e será integrada ao fluxo final do site após a aprovação.</p>
      </section>
    </div>
  );
}
