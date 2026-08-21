/* ============================================================
   JAVASCRIPT DO SITE - CONSTRUTORA ALICERCE & OURO
   ============================================================
   ESTE É O "MIOLO" DO SITE (o seu mini back-end).

   Toda a informação que muda com frequência (obras, serviços,
   depoimentos, telefone, e-mail) está guardada em LISTAS aqui em cima.
   Você edita a lista e o site se atualiza sozinho — não precisa
   mexer no HTML.

   Regras simples para não quebrar nada:
   - Cada item fica dentro de { chaves } e separado por vírgula.
   - Texto sempre entre "aspas".
   - O último item da lista NÃO precisa de vírgula depois.
   ============================================================ */

/* ------------------------------------------------------------
   1) NÚMEROS DA CAPA
   Aparecem embaixo dos botões na primeira tela.
   ------------------------------------------------------------ */
const NUMEROS = [
  { valor: "", rotulo: "obras entregues" },
  { valor: "", rotulo: "topo de mercado" },
  { valor: "", rotulo: "profissionais familiares" },
  { valor: "", rotulo: "obras no prazo" },
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
    titulo: "Reformas e retrofit",
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
   3) OBRAS DO PORTFÓLIO
   categoria: usada nos botões de filtro. Se você criar uma nova
   categoria aqui, o botão dela aparece automaticamente.
   foto: caminho do arquivo dentro da pasta public/imagens/
   ficha: pequenas etiquetas (metragem, prazo, local...)
   ------------------------------------------------------------ */
const OBRAS = [
  {
    titulo: "Residencial Aurora",
    categoria: "Residencial",
    foto: "/imagens/obra-1.jpg",
    descricao:
      "Edifício de 6 pavimentos com 24 apartamentos, estrutura em concreto armado e fachada ventilada.",
    ficha: ["3.400 m²", "18 meses", "Bairro Jardim Real"],
  },
  {
    titulo: "Edifício Corporativo Ipê",
    categoria: "Comercial",
    foto: "/imagens/obra-2.jpg",
    descricao:
      "Sede corporativa com pele de vidro, certificação de eficiência energética e 3 subsolos de garagem.",
    ficha: ["9.100 m²", "26 meses", "Centro Empresarial"],
  },
  {
    titulo: "Casa Mirante do Lago",
    categoria: "Alto padrão",
    foto: "/imagens/obra-3.jpg",
    descricao:
      "Residência de alto padrão com piscina de borda infinita, automação completa e laje protendida.",
    ficha: ["620 m²", "14 meses", "Condomínio Lago Azul"],
  },
  {
    titulo: "Retrofit Galeria Central",
    categoria: "Reforma",
    foto: "/imagens/obra-2.jpg",
    descricao:
      "Modernização de galeria comercial dos anos 70: reforço estrutural, nova fachada e instalações refeitas.",
    ficha: ["2.150 m²", "9 meses", "Rua XV de Novembro"],
  },
  {
    titulo: "Condomínio Vila Dourada",
    categoria: "Residencial",
    foto: "/imagens/obra-1.jpg",
    descricao:
      "Doze casas geminadas com área de lazer comum, entregues em duas fases sem atraso no cronograma.",
    ficha: ["4.800 m²", "22 meses", "Zona Sul"],
  },
  {
    titulo: "Casa Pátio Sereno",
    categoria: "Alto padrão",
    foto: "/imagens/obra-3.jpg",
    descricao:
      "Casa térrea de pátio interno, com estrutura metálica aparente e grandes vãos envidraçados.",
    ficha: ["410 m²", "11 meses", "Alphaville"],
  },
];

/* ------------------------------------------------------------
   4) DEPOIMENTOS DE CLIENTES
   estrelas: um número de 1 a 5
   ------------------------------------------------------------ */
const DEPOIMENTOS = [
  {
    texto:
      "Entregaram a obra 3 semanas antes do prazo e com o orçamento fechado. O relatório semanal com fotos me deixou tranquila morando em outra cidade.",
    nome: "Cláudia Ferraz",
    cargo: "Proprietária — Casa Mirante do Lago",
    estrelas: 5,
  },
  {
    texto:
      "Trabalhamos juntos em três empreendimentos. A engenharia deles resolve problema em obra sem repassar custo escondido para o incorporador.",
    nome: "Rogério Salles",
    cargo: "Diretor — Salles Incorporadora",
    estrelas: 5,
  },
  {
    texto:
      "Reformaram nossa galeria com as lojas abertas. Poeira controlada, obra limpa e nenhum lojista reclamou de barulho fora de hora.",
    nome: "Síndico Paulo Menezes",
    cargo: "Galeria Central",
    estrelas: 4,
  },
];

/* ------------------------------------------------------------
   5) DADOS DE CONTATO
   Troque telefone, e-mail e endereço aqui.
   ------------------------------------------------------------ */
const CONTATO = [
  { icone: "📞", texto: "(11) 4002-8922" },
  { icone: "💬", texto: "WhatsApp (11) 99876-5432" },
  { icone: "✉️", texto: "obras@alicerceouro.com.br" },
  { icone: "📍", texto: "Av. das Construções, 1250 — sala 704" },
  { icone: "🕗", texto: "Seg a sex, 8h às 18h" },
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
   só as obras daquela categoria.                          */
function montarObras(filtro) {
  const escolhidas = filtro === "Todas" ? OBRAS : OBRAS.filter((o) => o.categoria === filtro);

  pegar("listaObras").innerHTML = escolhidas
    .map(
      (obra) => `
      <article class="cartao-obra">
        <img src="${obra.foto}" alt="${obra.titulo}" loading="lazy" />
        <div class="cartao-obra-texto">
          <p class="categoria">${obra.categoria}</p>
          <h3>${obra.titulo}</h3>
          <p>${obra.descricao}</p>
          <ul class="ficha">
            ${obra.ficha.map((dado) => `<li>${dado}</li>`).join("")}
          </ul>
        </div>
      </article>`,
    )
    .join("");
}

/* ---------- Monta os botões de filtro ----------
   As categorias são descobertas sozinhas a partir da lista OBRAS. */
function montarFiltros() {
  const categorias = ["Todas", ...new Set(OBRAS.map((obra) => obra.categoria))];

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
    montarObras(botao.dataset.categoria);
  });
}

/* ---------- Monta os depoimentos ---------- */
function montarDepoimentos() {
  pegar("listaDepoimentos").innerHTML = DEPOIMENTOS.map(
    (item) => `
      <article class="cartao-depoimento">
        <div class="estrelas">${"★".repeat(item.estrelas)}${"☆".repeat(5 - item.estrelas)}</div>
        <p>“${item.texto}”</p>
        <footer>
          <strong>${item.nome}</strong>
          <span>${item.cargo}</span>
        </footer>
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
  montarObras("Todas");
  montarDepoimentos();
  montarContato();
  ligarMenu();
  ligarFormulario();
  escreverAno();
});
