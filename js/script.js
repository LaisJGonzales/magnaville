/* ============================================================
   JAVASCRIPT DO SITE - CONSTRUTORA Magnaville
   ============================================================
   (o seu mini back-end
   ============================================================ */

/* ------------------------------------------------------------
   1) NÚMEROS DA CAPA
   Aparecem embaixo dos botões na primeira tela.
   ------------------------------------------------------------ */
const NUMEROS = [
  { valor: "qualidade", rotulo: "do inicio ao fim" },
  { valor: "garantia", rotulo: " de satisfação" },
  { valor: "equipe experiente", rotulo: "profissionais familiares" },
  { valor: "prazos cumpridos", rotulo: "com responsabilidade" },
];

/* ------------------------------------------------------------
   2) SERVIÇOS
   icone = pode ser qualquer emoji (🏗️ 🏠 📐 🔧 ...)
   ------------------------------------------------------------ */
const SERVICOS = [
  {
    icone: "📐",
    titulo: "Projeto e aprovação",
    descricao:
      "Projeto arquitetônico, estrutural e complementares, mais toda a aprovação na prefeitura e no corpo de bombeiros.",
  },
  {
    icone: "🏗️",
    titulo: "Construção completa",
    descricao:
      "Executamos a obra do gabarito ao acabamento, com equipe própria de estrutura e mestre de obras fixo no canteiro.",
  },
  {
    icone: "🏠",
    titulo: "Reformas",
    descricao:
      "Modernização de imóveis antigos, reforço estrutural, troca de instalações e fachada nova sem esvaziar o prédio.",
  },
  {
    icone: "📋",
    titulo: "Gerenciamento de obra",
    descricao:
      "Você já tem o projeto? Cuidamos de cronograma, compras, medições e fiscalização de qualidade por você.",
  },
  {
    icone: "🧱",
    titulo: "Incorporação imobiliária",
    descricao:
      "Estudo de viabilidade, memorial de incorporação e lançamento de empreendimentos residenciais.",
  },
  {
    icone: "🔧",
    titulo: "Manutenção predial",
    descricao:
      "Contratos anuais de manutenção preventiva para condomínios, lojas e galpões logísticos.",
  },
];

/* ------------------------------------------------------------
   3) PROJETOS DO PORTFÓLIO
   categoria: usada nos botões de filtro. Se você criar uma nova
   categoria aqui, o botão dela aparece automaticamente.
  foto: caminho relativo do arquivo dentro da pasta imagens/
   ficha: pequenas etiquetas (metragem, prazo, local...)
   ------------------------------------------------------------ */
const PROJETOS = [
  {
    titulo: "Conceitual Arquitetônico",
    categoria: "Arquitetônico",
    foto: "imagens/conceitual-arquitetonico.jpeg",
    descricao:
      "Um desenho pronto de como ficará a obra.",
    ficha: ["casinha"],
  },
    {
    titulo: "Planta Baixa",
    categoria: "Arquitetônico",
    foto: "imagens/planta-baixa.jpeg",
    descricao:
      "O Layout da obra, mostrando a distribuição dos ambientes.",
    ficha: ["planta baixa"],
  },

     {
    titulo: "Renderização 3D",
    categoria: "Arquitetônico",
    foto: "imagens/renderizacao.jpeg",
    descricao:
      "Visualização 3D da planta .",
    ficha: ["Renderização 3D"],
  },

 
  {
    titulo: "Fundação",
    categoria: "Construções",
    foto: "imagens/fundacao-sapata-corrida.jpeg",
    descricao:
      "Fundação em sapata corrida",
    ficha: ["60 cm x 40 cm"],
  },

    {
    titulo: "Escarificação",
    categoria: "Construções",
    foto: "imagens/escarificacao.jpeg",
    descricao:
      "Escarificação do terreno para a contrução de dois pavimentos.",
    ficha: [" 5m x 20m "],
  },

      {
    titulo: "Terraplanagem",
    categoria: "Construções",
    foto: "imagens/terraplanagem.jpeg",
    descricao:
      "Terraplanagem do terreno para a contrução de dois pavimentos.",
    ficha: [" 5m x 20m "],
  },

]
 /*{   
  titulo: "...",
    categoria: "Alto padrão",
    foto: "imagens/obra-2.jpg",
    descricao:
      "Colocar portifolio",
    ficha: ["..."],
  },
];

 {
    titulo: "...",
    categoria: "Reforma",
    foto: "imagens/obra-3.jpg",
    descricao:
      "Colocar portifolio",
    ficha: ["..."],
  },

    titulo: "...",
    categoria: "Comercial",
    foto: "imagens/obra-1.jpg",
    descricao:
      "Colocar portifolio",
    ficha: ["..."],
  },
  {
    titulo: "...",
    categoria: "Alto padrão",
    foto: "imagens/obra-2.jpg",
    descricao:
      "Colocar portifolio",
    ficha: ["..."],
  },


*/

/* ------------------------------------------------------------
   NOVO 4) Apresentação dos profissionais
   ------------------------------------------------------------ */

  const PROFSSIONAIS = [


  {
    texto:
      "Nosso Engenheiro civil, e CEO da Magnaville, é um profissional com mais de 30 anos de experiência na area de construção. Desde pequeno, ele já ajudava seu pai no campo de obras, logo, atuou como mestre de obras na construtora de seu irmão mais velho, foi chefe de manutenção de uma multinacional até que terminou seu bacharelado em Engenharia Civil, e fundou a Magnaville.",
      foto: "imagens/Leonardo-Gonzales.jpeg",
    nome: "Leonardo Gonzales",
    cargo: "Engenheiro Civil | CEO",

  },

    {
    texto:
      "Rosângela Maria é a diretora administrativa da Magnaville, responsável pelos orçamentos, conferências de prazos e demais rotinas burocraticas, formada em serviço social, cursando gestão de processos gerênciais.",
      foto: "imagens/Rosangela-Maria.jpeg",
    nome: "Rosângela Maria",
    cargo: "Diretora Administrativa",
  },

  {
    texto:
      "Nossa talentosa desenhista de 17 anos, desde cedo, vem aprimorando sua técnica com o incentivo de seu pai, Leonardo Gonzales. Hoje, ela domina o software sketchup, a arte de design de interior renderizado. Futuramente, será uma Arquiteta de renome. (Letícia faz <strong>Conceituais Arquitetônicos</strong>)",
      foto: "imagens/Leticia-Gonzales.jpeg",
    nome: "Leticia Gonzales",
    cargo: "Desenhista Arquitetônica",

  },

    {
    texto:
      "Lennon é um <strong>Eletricista Prático</strong>, com negocio próprio -Gonzales Serviços Eléticos-  parceiro da Magnaville. Possui noções elétricas elogiadas por varios clientes.",
      foto: "imagens/Lennon-Gonzales.jpeg",
    nome: "Lennon Gonzales",
    cargo: "Parceiro | Eletricista Prático",

  },

  {
    texto:
      "Laís é a nossa desenvolvedora web e de software. Cursando Engenharia da Computação, ela faz toda a parte de programação e sistemas da magnaville.",
      foto: "imagens/Lais-Gonzales.jpeg",
    nome: "Laís Gonzales",
    cargo: "Desenvolvedora Web e Software",

  },
];



/* ------------------------------------------------------------
   5) DADOS DE CONTATO
   Troque telefone, e-mail e endereço aqui.
   ------------------------------------------------------------ */
const CONTATO = [
  { icone: "📞", texto: "(47) 9 9655-8233" },
  { icone: "💬", texto: "WhatsApp (47) 9 9655-8233" },
  { icone: "✉️", texto: "magnaville.ilht@gmail.com" },
  { icone: "📍", texto: "R. Gercino José Corrêa, 163 - Cordeiros, Itajaí/SC" },
  { icone: "🕗", texto: "Seg a domingo, 8h às 18h" },
];

/* ============================================================
   A PARTIR DAQUI É A PARTE QUE MONTA A PÁGINA.
   Você normalmente NÃO precisa mexer nesta parte.
   ============================================================ */

/* Atalho para achar um elemento pelo id (deixa o código mais curto) */
function pegar(id) {
  return document.getElementById(id);
}

/* ---------- Monta os números da capa ---------- */
function montarNumeros() {
  pegar("listaNumeros").innerHTML = NUMEROS.map(
    (item) => `<li><strong>${item.valor}</strong><span>${item.rotulo}</span></li>`,
  ).join("");
}

/* ---------- Monta os cartões de serviços ---------- */
function montarServicos() {
  pegar("listaServicos").innerHTML = SERVICOS.map(
    (servico) => `
      <article class="cartao-servico">
        <div class="icone">${servico.icone}</div>
        <h3>${servico.titulo}</h3>
        <p>${servico.descricao}</p>
      </article>`,
  ).join("");
}

/* ---------- Monta os cartões de obras ----------
   filtro = "Todas" mostra tudo; qualquer outro valor mostra
   só os projetos daquela categoria.                          */
function montarProjetos(filtro) {
  const escolhidos = filtro === "Todas" ? PROJETOS : PROJETOS.filter((p) => p.categoria === filtro);

  pegar("listaProjetos").innerHTML = escolhidos
    .map(
      (projeto) => `
      <article class="cartao-obra">
        <img src="${projeto.foto}" alt="${projeto.titulo}" loading="lazy" />
        <div class="cartao-obra-texto">
          <p class="categoria">${projeto.categoria}</p>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <ul class="ficha">
            ${projeto.ficha.map((dado) => `<li>${dado}</li>`).join("")}
          </ul>
        </div>
      </article>`,
    )
    .join("");
}

/* ---------- Monta os botões de filtro ----------
   As categorias são descobertas sozinhas a partir da lista PROJETOS. */
function montarFiltros() {
  const categorias = ["Todas", ...new Set(PROJETOS.map((projeto) => projeto.categoria))];

  pegar("listaFiltros").innerHTML = categorias
    .map(
      (categoria, indice) =>
        `<button class="filtro ${indice === 0 ? "ativo" : ""}" data-categoria="${categoria}">${categoria}</button>`,
    )
    .join("");

  // Quando clicar em um filtro: marca o botão e remonta a lista de obras
  pegar("listaFiltros").addEventListener("click", (evento) => {
    const botao = evento.target.closest(".filtro");
    if (!botao) return;

    document.querySelectorAll(".filtro").forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    montarProjetos(botao.dataset.categoria);
  });
}

/* ---------- Monta os profissionais ---------- */
function montarProfissionais() {
  pegar("listaProfissionais").innerHTML = PROFSSIONAIS.map(
    (profissional) => `
      <article class="cartao-profissional">
        <div class="foto">
          <img src="${profissional.foto}" alt="${profissional.nome}" />
        </div>
        <div class="conteudo-profissional">
          <p>“${profissional.texto}”</p>
          <footer>
            <strong>${profissional.nome}</strong>
            <span>${profissional.cargo}</span>
          </footer>
        </div>
      </article>`,
  ).join("");
}

/* ---------- Monta a lista de contato ---------- */
function montarContato() {
  pegar("listaContato").innerHTML = CONTATO.map(
    (item) => `<li><span class="icone">${item.icone}</span> ${item.texto}</li>`,
  ).join("");
}

/* ---------- Menu do celular (abre e fecha) ---------- */
function ligarMenu() {
  const menu = pegar("menu");

  pegar("botaoMenu").addEventListener("click", () => menu.classList.toggle("aberto"));

  // Ao clicar em um link, fecha o menu
  menu.addEventListener("click", (evento) => {
    if (evento.target.tagName === "A") menu.classList.remove("aberto");
  });
}

/* ---------- Formulário de orçamento ----------
   ATENÇÃO: por enquanto o formulário NÃO envia e-mail.
   Ele só mostra uma mensagem de confirmação na tela.
   Quando quiser enviar de verdade, é aqui que entra a integração. */
function ligarFormulario() {
  const formulario = pegar("formularioOrcamento");
  const aviso = pegar("avisoForm");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede a página de recarregar

    const nome = formulario.nome.value.trim();
    aviso.textContent = `Obrigada, ${nome}! Recebemos seu pedido e entramos em contato em até 1 dia útil.`;
    formulario.reset();
  });
}

/* ---------- Ano do rodapé sempre atualizado ---------- */
function escreverAno() {
  pegar("anoAtual").textContent = new Date().getFullYear();
}

/* ============================================================
   LIGANDO TUDO quando a página termina de carregar
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  montarNumeros();
  montarServicos();
  montarFiltros();
  montarProjetos("Todas");
  montarProfissionais();
  montarContato();
  ligarMenu();
  ligarFormulario();
  escreverAno();
});
