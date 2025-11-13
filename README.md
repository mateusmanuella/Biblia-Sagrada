📖 Conheça a Bíblia - Portal de Estudos Bíblicos
🌟 Sobre o Projeto
Este é um projeto web completo desenvolvido para oferecer uma experiência rica e envolvente no estudo da Bíblia Sagrada. Criado como trabalho final da disciplina de Desenvolvimento de Sistemas Web, o site combina design moderno, funcionalidades interativas e conteúdo bíblico organizado de maneira acessível para todos os públicos.

O portal foi construído com o objetivo de ser mais do que apenas um site informativo - é uma ferramenta digital que busca inspirar, educar e fortalecer a fé através de recursos cuidadosamente selecionados e organizados.

🎯 Objetivos do Projeto
Divulgação: Tornar o conteúdo bíblico acessível de forma gratuita e organizada

Educação: Oferecer material de estudo para diferentes níveis de conhecimento

Inspiração: Proporcionar momentos de reflexão através de versículos e mensagens

Interatividade: Criar uma experiência engajante com recursos modernos

Acessibilidade: Garantir que o conteúdo seja acessível para todos os usuários

🚀 Funcionalidades Principais
📚 Conteúdo Bíblico Organizado
Versículos por Temas

Fé: Versículos que fortalecem a confiança em Deus

Coragem: Passagens para momentos de desafio

Sabedoria: Ensino para a vida prática

Esperança: Mensagens de consolo e expectativa

Reflexão: Textos para meditação profunda

Livros da Bíblia

Navegação completa por todos os 66 livros

Informações sobre autores, contexto histórico e temas principais

Divisão clara entre Antigo e Novo Testamento

Imagens ilustrativas para cada livro

Galeria de Locais Bíblicos

Belém, Jerusalém, Nazaré e outros locais importantes

Fotos atuais dos lugares sagrados

Referências bíblicas associadas a cada local

Contexto histórico e significado espiritual

🎨 Experiência do Usuário
Design Responsivo

Adaptação perfeita para desktop, tablet e smartphone

Layout que mantém a usabilidade em qualquer tamanho de tela

Otimização de imagens para carregamento rápido

Navegação intuitiva em todos os dispositivos

Sistema de Temas

Modo escuro para leitura noturna confortável

Modo claro para preferências diurnas

Transições suaves entre os temas

Persistência da escolha do usuário

Efeitos Visuais

Iluminação LED dinâmica com animações suaves

Cards interativos com efeitos de hover

Transições e animações cuidadosamente implementadas

Visual moderno sem comprometer a legibilidade

🔍 Ferramentas Interativas
Sistema de Busca Avançada

Busca em tempo real em todo o conteúdo do site

Destaque visual dos resultados encontrados

Filtragem inteligente de conteúdo

Contador de resultados em tempo real

Player de Vídeo Integrado

Conteúdo educativo sobre a Bíblia

Player customizado com controles intuitivos

Integração com plataformas de vídeo

Interface responsiva para reprodução

Galeria de Imagens

Lightbox para visualização ampliada

Navegação por teclado e mouse

Legendas informativas com referências

Carregamento otimizado de imagens

📊 Sistema de Feedback
Questionário de Avaliação

12 perguntas abrangentes sobre a experiência do usuário

Escalas de avaliação detalhadas

Campo para comentários livres

Armazenamento seguro das respostas

Painel Administrativo

Acesso protegido por senha

Visualização de todas as respostas coletadas

Exportação de dados em formato CSV

Ferramentas de análise de feedback

🛠 Tecnologias Utilizadas
Frontend
HTML5: Estrutura semântica e acessível

CSS3: Estilos avançados com variáveis customizadas

JavaScript ES6+: Interatividade e funcionalidades dinâmicas

Bootstrap 5.3.0: Framework para layout responsivo

Recursos Externos
Google Fonts: Tipografia Merriweather e Playfair Display

Bootstrap Icons: Conjunto icônico consistente

YouTube API: Integração de conteúdo em vídeo

Armazenamento
LocalStorage: Persistência de dados do usuário

JSON: Estruturação de dados internos

📁 Estrutura Detalhada do Projeto
text
conheca-a-biblia/
│
├── 📄 Páginas Principais
│   ├── index.html              # Página inicial com visão geral
│   ├── versiculos.html         # Portal de versículos por categoria
│   ├── livros-da-biblia.html   # Catálogo completo dos livros
│   ├── feedback.html           # Sistema de avaliação
│   └── feedback-admin.html     # Painel de administração
│
├── 📖 Páginas de Versículos
│   ├── fe.html                 # Versículos sobre Fé
│   ├── coragem.html            # Versículos sobre Coragem
│   ├── sabedoria.html          # Versículos sobre Sabedoria
│   ├── esperanca.html           # Versículos sobre Esperança
│   └── reflexao.html           # Versículos sobre Reflexão
│
├── 🎨 Estilos
│   └── css/
│       └── estilo.css          # Folha de estilos principal
│
├── ⚙️ Scripts
│   └── js/
│       ├── core.js             # Núcleo da aplicação
│       ├── search.js           # Motor de busca
│       ├── gallery.js          # Gerenciador de mídia
│       └── feedback.js         # Sistema de feedback
│
├── 🖼️ Recursos Visuais
│   └── Images/                 # Biblioteca de imagens
│       ├── locais-biblicos/    # Fotos de lugares sagrados
│       ├── personagens/        # Ilustrações de figuras bíblicas
│       ├── livros/             # Capas e representações
│       └── temas/              # Imagens temáticas
│
└── 🔧 Configurações
    ├── manifest.json           # Configuração PWA
    └── package.json            # Metadados do projeto
🚀 Guia de Instalação e Execução
Pré-requisitos
Navegador web moderno (Chrome, Firefox, Safari, Edge)

Servidor web local (opcional, para desenvolvimento)

Método 1: Execução Direta
bash
# Faça o download ou clone do projeto
# Navegue até a pasta principal
cd conheca-a-biblia

# Abra o arquivo index.html em seu navegador
# Ou use um servidor local para melhor experiência
Método 2: Servidor Local com Python
bash
# Navegue até a pasta do projeto
cd conheca-a-biblia

# Execute um servidor HTTP simples
python -m http.server 8000

# Acesse no navegador: http://localhost:8000
Método 3: Servidor com Node.js
bash
# Instale as dependências (se necessário)
npm install

# Inicie o servidor de desenvolvimento
npm start

# O projeto estará disponível em http://localhost:3000
🎨 Personalização e Configuração
Variáveis de Customização
No arquivo css/estilo.css, você pode personalizar:

css
:root {
  --accent: #f9d342;           /* Cor principal de destaque */
  --bg-dark: #0f0f10;          /* Cor de fundo do modo escuro */
  --bg-light: #f4e9d8;         /* Cor de fundo do modo claro */
  --led-intensity: 0.30;       /* Intensidade do efeito luminoso */
  --led-speed: 9s;             /* Velocidade das animações */
  --max-width: 1200px;         /* Largura máxima do conteúdo */
}
Adicionando Novo Conteúdo
Para adicionar novos versículos:

Crie um novo arquivo HTML na pasta raiz

Siga a estrutura dos arquivos existentes

Atualize os links de navegação

Adicione imagens na pasta Images/

Para modificar categorias:

Edite o arquivo versiculos.html

Atualize os cards na seção de categorias

Mantenha a consistência do design

🔧 Desenvolvimento e Contribuições
Estrutura de Código
HTML Semântico

html
<article class="gallery-card" data-title="Belém">
  <img src="Images/Belem.jpeg" alt="Belém" loading="lazy">
  <div class="gallery-caption">Belém — <em>Lucas 2:4-7</em></div>
</article>
CSS Organizado

css
/* Variáveis globais */
:root {
  --cor-primaria: #valor;
}

/* Componentes modulares */
.gallery-card {
  /* Estilos específicos */
}

/* Estados interativos */
.gallery-card:hover {
  /* Efeitos de hover */
}
JavaScript Modular

javascript
class BibleSearch {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupSearchHandlers();
  }
}
Padrões de Desenvolvimento
Semântica: Uso de elementos HTML apropriados

Acessibilidade: Atributos ARIA e navegação por teclado

Performance: Carregamento lazy de imagens

Manutenibilidade: Código limpo e documentado

Responsividade: Design mobile-first

📊 Sistema de Feedback - Detalhes Técnicos
Estrutura de Dados
javascript
{
  timestamp: "2024-01-01T10:30:00Z",
  userAgent: "navegador-do-usuario",
  screenResolution: "1920x1080",
  answers: {
    q1: "Resposta da pergunta 1",
    q2: "Resposta da pergunta 2"
  },
  freeText: "Comentários adicionais do usuário"
}
Fluxo de Trabalho
Usuário preenche o questionário

Dados são validados localmente

Respostas são salvas no LocalStorage

Opcionalmente enviadas para endpoint externo

Administrador acessa painel para análise

🌐 Recursos de Acessibilidade
Implementações Incluídas
Skip Links: Para pular navegação repetitiva

ARIA Labels: Descrições para leitores de tela

Contraste: Relação de cores para boa legibilidade

Navegação por Teclado: Totalmente acessível via TAB

Textos Alternativos: Descrições para todas as imagens

Testes Realizados
Leitores de tela (NVDA, VoiceOver)

Navegação apenas por teclado

Ampliação de texto até 200%

Contrastes em diferentes condições de iluminação

📱 Compatibilidade
Navegadores Testados
✅ Chrome 90+

✅ Firefox 88+

✅ Safari 14+

✅ Edge 90+

Dispositivos
✅ Desktop (Windows, macOS, Linux)

✅ Tablets (iOS, Android)

✅ Smartphones (iOS, Android)

👥 Equipe de Desenvolvimento
Integrantes - Turma INF1FT
Erick (Nº 4) - Desenvolvimento Frontend e UX

Gediane Terlesqui França (Nº 8) - Conteúdo Bíblico e Design

Mateus Paes Alves (Nº 27) - Desenvolvimento Backend e Funcionalidades

Contato do Desenvolvedor Principal
Para dúvidas técnicas, sugestões ou colaborações no projeto:

📞 Celular/WhatsApp: +55 11 96311-4812

📧 E-mail: mateuspaesalves2009@hotmail.com

💬 Disponibilidade: Segunda a Sexta, 9h às 18h

Agradecimentos Especiais
Ao professor Leandro Cruz pela orientação e ensinamentos valiosos durante o curso de Desenvolvimento de Sistemas Web.

🙏 Declaração de Fé e Propósito
Este projeto foi desenvolvido não apenas como trabalho acadêmico, mas como uma expressão de fé e compromisso com a divulgação da Palavra de Deus.

Nossa Crença:

Cremos em um único Deus, criador do céu e da terra

Cremos em Jesus Cristo como único Salvador e intermediário

Cremos no Espírito Santo como consolador e guia

Cremos na Bíblia Sagrada como palavra inspirada por Deus

Base Bíblica:
Como está escrito em João 14:6 - "Respondeu Jesus: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.'"

Compromisso:
Todo o conteúdo deste site foi desenvolvido com o propósito de glorificar a Deus e edificar a fé daqueles que buscam conhecer mais das Escrituras Sagradas.

📞 Suporte e Contato
Para dúvidas técnicas, sugestões ou relatórios de problemas relacionados ao desenvolvimento do site:

Desenvolvedor Responsável: Mateus Paes Alves

Telefone/WhatsApp: +55 11 96311-4812

E-mail: mateuspaesalves2009@hotmail.com

Horário de Atendimento: Segunda a Sexta-feira, das 9h às 18h

Para outros tipos de contato:

Verifique a documentação incluída nos arquivos

Consulte os comentários no código-fonte

Entre em contato com a equipe de desenvolvimento através dos canais listados

🔄 Atualizações Futuras
Planejado para Próximas Versões
Sistema de favoritos para versículos

Modo de leitura noturna avançado

Busca por referência bíblica específica

Planos de leitura guiada

Integração com mais traduções bíblicas

Sistema de comentários e notas do usuário

📄 Licença e Uso
Este projeto foi desenvolvido para fins educacionais como parte do curso de Desenvolvimento de Sistemas Web. O conteúdo bíblico é de domínio público, enquanto o código e design são propriedade dos desenvolvedores.

*"Lâmpada para os meus pés é a tua palavra e luz para o meu caminho." - Salmos 119:105*

Que este trabalho possa ser instrumento de bênção e edificação para todos que o utilizarem.

Para contribuições técnicas ou dúvidas sobre o desenvolvimento, entre em contato com Mateus Paes Alves através dos canais informados acima.
