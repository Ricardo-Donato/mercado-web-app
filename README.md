<h1>Mercado de Trabalho Web App</h1>

<p>Este projeto tem como objetivo facilitar a integração de pessoas no mercado de trabalho por meio de um Web App que disponibiliza o cadastro de pessoas e empresas a fim de aproximar a comunicação entre o local de trabalho e o candidato. </p>
<p>Além disso, haverá a recomendação/sugestões tanto para empresas quanto pessoas utilizando Inteligência Artificial (IA)/agentes de IA, como também a integração de Web APIs para obter localização do usuário e sugerir candidatos perto da empresa e vagas perto do candidato.</p>
<p>Adiante, é possível transformar o projeto em um Micro SaaS ou até SaaS, como também, a partir do conhecimento em React e React Native, a criação de um aplicativo mobile.</p>
<p>Este é um projeto que está desenvolvido durante a matéria de <b>Desenvolvimento Web</b> do curso de Ciência da Computação - Bacharelado.</p>
<br>
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
<br>
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
<br>
<h2>Referências</h2>
<ul>
	<li>https://jaimeneeves.medium.com/explorando-a-api-geolocation-em-javascript-um-guia-passo-a-passo-94d332c96f0d</li>
	<li>https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API</li>
	<li>https://www.escoladnc.com.br/blog/crud-o-que-e-e-como-funciona</li>
	<li>https://apidog.com/pt/blog/http-methods/</li>
</ul>
<br>
<p>Documentação desenvolvida por: PEDRO RICARDO DONATO DA SILVA.</p>
