# 📚 Documento Relator do Projeto: Portal GEIRA

Este documento serve como o catálogo central e o "cérebro" do portal web do **GEIRA (Grupo de Educação Inclusiva da Região Amazônica)**. Ele registra tudo o que o site oferece, sua estrutura, funções de acessibilidade, design system e (futuramente) as regras de negócios, políticas e fluxos lógicos. 

*Este é um documento vivo e deverá ser atualizado a cada nova grande implementação.*

---

## 1. Visão Geral
O portal web do GEIRA é a plataforma central para comunicação, gerenciamento de conteúdo e inscrição em eventos do grupo de pesquisa. Ele é focado em acessibilidade absoluta e possui um design moderno, lúdico e amigável (estilo flat/bento grid) para atrair tanto a comunidade acadêmica quanto as famílias.

**Stack Tecnológica:**
- **Frontend:** React + Vite + TypeScript
- **Roteamento:** React Router DOM v6
- **Estilização:** Vanilla CSS (CSS puro, via variáveis e utilitários globais)
- **Hospedagem/Banco de Dados:** (A definir/Supabase)

---

## 2. Arquitetura de Páginas e Rotas
A plataforma atende atualmente a três públicos distintos: visitantes gerais, participantes de eventos e membros/bolsistas do GEIRA.

### 🌐 Rota: `/` (Landing Page Principal - `Home.tsx`)
Apresentação institucional do grupo. É estruturada nas seguintes seções:
1. **Navbar Compartilhada:** Logotipo, links âncora, controles de acessibilidade e botão "Entrar".
2. **Mosaico (Bento Grid):** Imagem visual impactante ocupando largura total da tela, transmitindo a ideia de "Inclusão que Transforma, Pesquisa que Conecta".
3. **Hero Section (Início):** Avatares dos mascotes lado a lado, prova social ("Pesquisa com impacto real") e chamada para ação.
4. **Sobre o GEIRA:** Texto descritivo e grid secundário com avatares/bustos ilustrativos.
5. **Nossos Projetos:** Vitrine (Formação Docente, Materiais Adaptados, Libras na Escola).
6. **Próximos Eventos:** Agenda de simpósios e oficinas em formato de lista (data e local).
7. **Blog:** Reflexões e artigos.
8. **Rodapé (Footer):** Missão, links de categorias, links institucionais e Redes Sociais (Instagram e Facebook).

### 🔐 Rota: `/login` (`Login.tsx`)
Tela de autenticação dividida em dois painéis (*Side-by-side*):
- **Painel Esquerdo:** Formulário limpo e centralizado (E-mail, Senha, "Lembrar de mim").
- **Painel Direito:** Grid de 4 células hiper-coloridas (Coral, Amarelo, Roxo, Rosa) contendo ilustrações dos mascotes para um visual educativo e inclusivo.

### 👥 Rota: `/dashboard-usuario` (`DashboardUsuario.tsx`)
**Perfil:** Usuários comuns (Participantes, Professores externos, Famílias).
- Navegação por Abas (*Tabs*).
- **Minhas Inscrições:** Lista de eventos inscritos com badges de status (ex: Confirmado, Aguardando Pagamento).
- **Novos Eventos:** Grade de eventos abertos disponíveis para inscrição.
- **Meus Certificados:** Lista de eventos passados com botão para baixar o PDF.

### 🛠️ Rota: `/dashboard-colaborador` (`DashboardColaborador.tsx`)
**Perfil:** Bolsistas, Pesquisadores e Colaboradores internos.
- Painel para alimentação de conteúdo.
- Contém cards de ação rápida: Gerenciar Blog, Agenda e Eventos, e Formulários (estruturas prontas para integração de backend).

---

## 3. Ecossistema de Acessibilidade (A11y)
O site implementa as melhores práticas de acessibilidade do mercado web.

- **Suite VLibras Global:** Incorporado diretamente no HTML (`index.html`), um widget do governo federal gera um avatar 3D no canto da tela que traduz qualquer texto em tempo real para a Língua Brasileira de Sinais.
- **Modo Alto Contraste (🌗):** Botão na Navbar que, ao clicado, aplica um filtro CSS global (`invert` e `hue-rotate`) que transforma a tela inteira em um esquema de cores ideal para baixa visão, sem distorcer as fotos reais.
- **Ajuste de Fonte (A+ / A-):** Botões na Navbar que escalonam todo o layout da página dinamicamente usando `zoom`, permitindo a leitura facilitada de textos e botões.
- **Navegação Inteligente (Skip Link):** Um atalho "Pular para o conteúdo principal" injetado no topo do DOM que só aparece quando um usuário de teclado ou leitor de tela foca nele, otimizando o fluxo.
- **Descrição de Imagens:** Tags `aria-label` e `alt` preenchidas de forma descritiva e técnica para softwares como NVDA e VoiceOver.

---

## 4. Design System
O portal usa uma linguagem visual focada no lúdico, limpo (*flat design*) e estruturado.
- **Tipografia:** `Sora` (pesada/extrabold) para cabeçalhos e `Inter` (legível) para parágrafos e ui-elements.
- **Paleta de Cores Oficial:**
  - Amarelo (`#FACC15`)
  - Roxo (`#A855F7`)
  - Rosa (`#F9A8D4`)
  - Coral (`#EF4444`)
  - Preto/Texto (`#1C1917`)
  - Fundo/Branco (`#FFFFFF` e `#F8FAFC`)
- **Padrões de Interface:** Células "Bento Grid" com cantos muito arredondados (16px a 32px), sem uso de sombras fortes ("flat design") e fundos com *grid-patterns* quadriculados muito sutis para remeter a ambiente de estudo.

---

## 5. Regras de Negócios e Políticas (Espaço Futuro)
*Esta seção será populada conforme desenvolvermos o backend, as permissões e as políticas institucionais.*

- **Política de Privacidade:** (A definir)
- **Termos de Uso:** (A definir)
- **Condicionantes de Inscrição:** (A definir fluxos de pagamento, emissão automática de certificado, etc).
- **Controle de Acesso (RBAC):** Bolsistas têm acesso a criar eventos; Usuários só podem consumir/visualizar.
