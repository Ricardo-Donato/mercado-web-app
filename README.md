<h1>ConectaVagas - Encontre talentos, encontre futuro</h1>

![Image](https://github.com/user-attachments/assets/576a4333-358e-485f-86ef-e32b7f67a094)

<p>A partir de um "Mercado de Trabalho Web App", este projeto tem como objetivo facilitar a integração de pessoas no mercado de trabalho por meio de um Web App que disponibiliza o cadastro de pessoas e empresas a fim de aproximar a comunicação entre o local de trabalho e o candidato. </p>
<p>Além disso, haverá a recomendação/sugestões tanto para empresas quanto pessoas utilizando Inteligência Artificial (IA)/agentes de IA, como também a integração de Web APIs para obter localização do usuário e sugerir candidatos perto da empresa e vagas perto do candidato.</p>
<p>Adiante, é possível transformar o projeto em um Micro SaaS ou até SaaS, como também, a partir do conhecimento em React e React Native, a criação de um aplicativo mobile.</p>
<p>Este é um projeto que está desenvolvido durante a matéria de <b>Desenvolvimento Web</b> do curso de Ciência da Computação - Bacharelado.</p>
<h2>Funcionalidades prévias</h2>
<ul>
  <li>Cadastro + Login</li>
  <ul>
    <li>Pessoa</li>
    <ul>
      <li>Currículo/Curriculum Vitae (POST)</li>
      <li>O cadastro será feito a partir de um formulário que permitirá traçar o perfil do candidato de forma automática, isto é, pelo próprio sistema com IA.</li>
      <li>A partir deste perfil, o usuário terá à disposição noções para criar uma “trilha de desenvolvimento” que poderá ser feita a distância ou presencialmente (parceira com centros de educação, como os técnicos da ETE 25 de Julho, SEG, Senac)</li>
    </ul>
  </ul>
  <ul>
    <li>Empresa</li>
    <ul>
      <li>Vagas (POST)</li>
    </ul>
  </ul>
  <li>Busca de currículos e vagas</li>
    <ul>
      <li>Pessoa</li>
      <ul>
        <li>Exibe sugestão de vagas que combinam com o perfil e currículo disponibilizada pela empresa (GET)</li>
      </ul>
      <li>Empresa</li>
      <ul>
        <li>Exibe sugestão de currículos que combinam com o perfil desejado pela vaga disponibilizada pela empresa (GET)</li>
      </ul>
    </ul>
</ul>   
<h2>Requisições</h2>
<ul>
  <li>Métodos HTTP - Front-End</li>
  <ul>
    <li>POST</li>
    <li>GET</li>
    <li>PUT</li>
    <li>DELETE</li>
    <li>Para manutenção dos seguintes aspectos:</li>
    <ul>
      <li>Pessoa (editar dados pessoais, excluir conta)</li>
      <ul>
        <li>Currículo (atualizar currículo)</li>
      </ul>
      <li>Empresa (editar localização)</li>
      <ul>
        <li>Vaga (atualizar requisitos da vaga, excluir)</li>
      </ul>
      <li>Comunicação com o back-end</li>
    </ul>
  </ul>
  <li>Métodos CRUD para banco de dados no Back-end</li>
      <ul>
        <li>Validação de dados vindos do front-end</li>
      </ul>
  <li>Arquitetura Cliente/Servidor</li>
</ul>
<h2>Ideia de layout</h2>
Com base nas funcionalidades descritas, segue uma proposta de layout para o Web App Mercado de Trabalho:

 1. Homepage (Página Inicial)
- Hero Section  
  - Título chamativo: "Encontre oportunidades ideais ou talentos excepcionais!"  
  - Dois botões destacados em cores contrastantes:  
    - "Sou Candidato" (ex.: azul) → Redireciona para cadastro/login de pessoa.  
    - "Sou Empresa" (ex.: verde) → Redireciona para cadastro/login de empresa.  
  - Background ilustrativo (ex.: pessoas trabalhando em diferentes profissões + ícones de localização).  

- Recursos em Destaque  
  - Cards com ícones e textos curtos:  
    - "Sugestões personalizadas por IA"
    - "Vagas próximas à sua localização"
    - "Parcerias com instituições de ensino" 

 2. Página de Cadastro/Login
- Design Minimalista  
  - Formulário dividido em etapas (para cadastro):  
    1. Tipo de usuário (Pessoa/Empresa).  
    2. Dados básicos (nome, e-mail, senha).  
    3. Detalhes específicos:  
      - Pessoa: Profissão, localização (auto-preenchida via Web API de geolocalização).  
      - Empresa: Nome da empresa, CNPJ, segmento.  
  - Opção de login rápido com redes sociais (Google, LinkedIn).  

 3. Dashboard (Após Login)
 Para Candidatos  
- Seção Esquerda (Menu Lateral Fixo)  
  - Foto de perfil + nome.  
  - Links rápidos:  
    - Meu Currículo  
    - Vagas Recomendadas  
    - Trilha de Desenvolvimento  
    - Configurações  

- Seção Central  
  - Vagas Recomendadas (IA)  
    - Cards com:  
      - Título da vaga + nome da empresa.  
      - Localização (distância em km).  
      - Match % (compatibilidade IA).  
      - Botão "Candidatar-se".  
  - Mapa de Vagas Próximas  
    - Integração com Google Maps API para visualização geográfica.  

- Seção Direita  
  - Status do Currículo  
    - Barra de progresso (ex.: "Seu currículo está 80% completo!").  
  - Sugestões de Melhoria (IA)  
    - Ex.: "Adicione certificações para aumentar suas chances em vagas de TI!"  

 Para Empresas  
- Seção Esquerda (Menu Lateral Fixo)  
  - Logo da empresa + nome.  
  - Links rápidos:  
    - Publicar Vaga  
    - Candidatos Recomendados  
    - Vagas Ativas  
    - Configurações  

- Seção Central  
  - Candidatos Recomendados (IA)  
    - Cards com:  
      - Foto + nome do candidato.  
      - Habilidades principais.  
      - Match % (compatibilidade com a vaga).  
      - Botão "Entrar em Contato".  
  - Análise de Vagas  
    - Gráficos de desempenho (ex.: número de candidaturas por vaga).  

- Seção Direita  
  - Publicar Vaga (formulário simplificado)  
    - Campos: Título, descrição, requisitos, localização (mapa integrado).  
  - Sugestões de Redação (IA)  
    - Ex.: "Evite termos genéricos como 'proativo'. Especifique competências técnicas!"  

 4. Página de Currículo (Candidatos)  
- Editor Visual Simples  
  - Divisão em abas:  
    1. Dados Pessoais  
    2. Experiência Profissional  
    3. Formação Acadêmica  
    4. Habilidades (com sugestão de palavras-chave por IA).  
  - Botão "Análise Automática" (IA verifica clareza e sugere melhorias).  

 5. Página de Vagas (Empresas)  
- Formulário Inteligente  
  - Campo de texto com sugestão de requisitos via IA (ex.: "Para 'Desenvolvedor Front-End', inclua React, HTML/CSS").  
  - Opção de vincular a "Trilhas de Desenvolvimento" (parcerias com instituições de ensino).  

 6. Acessibilidade  
- Recursos Inclusivos  
  - Toggle para alto contraste.  
  - Leitor de tela integrado.  
  - Legendas em vídeos tutoriais (no manual de uso).  



 7. Manual de Uso  
- Guia Interativo  
  - Abas com GIFs/telas interativas explicando funcionalidades.  
  - Botão flutuante de "Ajuda Rápida" em todas as páginas.  

 Paleta de Cores e Tipografia  
- Cores Principais: Azul (confiança) + Verde (crescimento) + Branco (clean).  
- Tipografia: Fontes sem serifa (ex.: Inter ou Open Sans) para legibilidade.  

 Tecnologias Passíveis para Utilização  
- Front-end: React (com Material-UI ou Chakra UI para componentes acessíveis).  
- Mapas: Google Maps API ou Mapbox.  
- IA: Integração com OpenAI (GPT para análise de texto) ou soluções pré-treinadas (ex.: TensorFlow.js). 

Este layout prioriza a usabilidade e a personalização via IA, mantendo a interface intuitiva mesmo para usuários menos tech-savvy.
<br>
<br>
<h2>Referências</h2>
<ul>
	<li>https://jaimeneeves.medium.com/explorando-a-api-geolocation-em-javascript-um-guia-passo-a-passo-94d332c96f0d</li>
	<li>https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API</li>
	<li>https://www.escoladnc.com.br/blog/crud-o-que-e-e-como-funciona</li>
	<li>https://apidog.com/pt/blog/http-methods/</li>
</ul>
<br>
