
/* ==========================================
   GUERREIRO STORE — PARTE 3/4
   Montador de look, sacola e totais
========================================== */

const sacola = [];

const pecasSelecionadas = new Map();

function gerarIdCarrinho() {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function adicionarItemSacola(item) {
  sacola.push({
    id: gerarIdCarrinho(),
    ...item,
    quantidade: Math.max(1, Number(item.quantidade) || 1)
  });

  renderizarSacola();
  mostrarAviso("Produto adicionado à sacola.");
}

function removerItemSacola(id) {
  const indice = sacola.findIndex(item => item.id === id);

  if (indice !== -1) {
    sacola.splice(indice, 1);
    renderizarSacola();
  }
}

function alterarQuantidadeSacola(id, quantidade) {
  const item = sacola.find(item => item.id === id);
  if (!item) return;

  const numero = Math.max(1, Math.min(20, Number(quantidade) || 1));
  item.quantidade = numero;
  renderizarSacola();
}

function totalSacola() {
  return sacola.reduce((total, item) => {
    return total + item.precoUnitario * item.quantidade;
  }, 0);
}

function quantidadeSacola() {
  return sacola.reduce((total, item) => total + item.quantidade, 0);
}

function renderizarSacola() {
  const area = document.getElementById("itens-sacola");
  const total = document.getElementById("total-sacola");
  const contador = document.getElementById("contador-sacola");

  if (contador) contador.textContent = quantidadeSacola();

  if (total) total.textContent = formatarPreco(totalSacola());

  if (!area) return;

  if (!sacola.length) {
    area.innerHTML = `<p class="sacola-vazia">Sua sacola está vazia.</p>`;
    return;
  }

  area.innerHTML = sacola.map(item => `
    <article class="item-sacola">
      ${item.imagem ? `
        <img
          src="${escaparHTML(item.imagem)}"
          alt="${escaparHTML(item.nome)}"
          loading="lazy"
        >
      ` : ""}

      <div class="item-sacola-info">
        <h3>${escaparHTML(item.nome)}</h3>
        <p>${escaparHTML(item.detalhes || "")}</p>

        <strong>${formatarPreco(item.precoUnitario)}</strong>

        <label class="seletor-produto">
          <span>Quantidade</span>
          <input
            type="number"
            min="1"
            max="20"
            value="${item.quantidade}"
            data-quantidade-sacola="${item.id}"
          >
        </label>

        <p>
          Subtotal:
          <strong>${formatarPreco(item.precoUnitario * item.quantidade)}</strong>
        </p>

        <button
          type="button"
          class="botao-remover"
          data-remover-sacola="${item.id}"
        >
          Remover
        </button>
      </div>
    </article>
  `).join("");
}

/* Montador personalizado */


function renderizarMontador() {
  const area = document.getElementById("pecas-para-montar");
  if (!area) return;

  const nomesParteDeCima = [
    "Camisa Dubai",
    "Camisa Canelada",
    "T-shirt Texturada",
    "T-shirt Tricô",
    "T-shirt Algodão",
    "Regata"
  ];

  const nomesParteDeBaixo = [
    "Short Linho",
    "Short Mauricinho de Algodão",
    "Short Sarja",
    "Bermuda Brim"
  ];

  function renderizarPeca(produto) {
    const primeiraOpcao = produto.opcoes[0];
    const primeiraCor = primeiraOpcao?.cor || "";

    return `
      <article class="cartao-montagem">
        <label class="seletor-produto">
          <span>
            <input
              type="checkbox"
              data-selecionar-montagem="${produto.id}"
            >
            <strong>${escaparHTML(produto.nome)}</strong>
          </span>
        </label>

        <img
          data-imagem-montagem="${produto.id}"
          src="${escaparHTML(obterImagemProduto(produto))}"
          alt="${escaparHTML(produto.nome)}"
          loading="lazy"
        >

        <p>${formatarPreco(produto.preco)}</p>

        <div class="paleta-montagem">
          <span class="titulo-paleta">Escolha a cor</span>

          <div class="botoes-paleta">
            ${produto.opcoes.map(opcao => `
              <button
                type="button"
                class="bolinha-montagem ${opcao.cor === primeiraCor ? "cor-montagem-ativa" : ""}"
                data-escolher-cor-montagem="${produto.id}"
                data-valor-cor-montagem="${escaparHTML(opcao.cor)}"
                aria-label="${escaparHTML(opcao.cor)}"
                aria-pressed="${opcao.cor === primeiraCor}"
                title="${escaparHTML(opcao.cor)}"
                style="--cor-bolinha:${obterCorCSS(opcao.cor)}"
              ></button>
            `).join("")}
          </div>

          <span data-nome-cor-montagem="${produto.id}">
            ${escaparHTML(primeiraCor)}
          </span>
        </div>

        <select
          data-cor-montagem="${produto.id}"
          class="cor-montagem-interna"
          aria-label="Cor de ${escaparHTML(produto.nome)}"
          tabindex="-1"
        >
          ${produto.opcoes.map(opcao => `
            <option
              value="${escaparHTML(opcao.cor)}"
              ${opcao.cor === primeiraCor ? "selected" : ""}
            >${escaparHTML(opcao.cor)}</option>
          `).join("")}
        </select>

        <label class="seletor-produto">
          <span>Tamanho</span>
          <select data-tamanho-montagem="${produto.id}">
            <option value="">Selecione a cor primeiro</option>
          </select>
        </label>

        <label class="seletor-produto">
          <span>Quantidade</span>
          <input
            type="number"
            min="1"
            max="20"
            value="1"
            data-quantidade-montagem="${produto.id}"
          >
        </label>
      </article>
    `;
  }

  const parteDeCima = produtos.filter(produto =>
    nomesParteDeCima.includes(produto.nome)
  );

  const parteDeBaixo = produtos.filter(produto =>
    nomesParteDeBaixo.includes(produto.nome)
  );

  area.innerHTML = `
    <section class="secao-montagem">
      <h3 class="titulo-secao-montagem">PARTE DE CIMA</h3>
      <p class="descricao-secao-montagem">
        Escolha suas camisas, camisetas e regatas.
      </p>
      <div class="grade-montagem">
        ${parteDeCima.map(renderizarPeca).join("")}
      </div>
    </section>

    <section class="secao-montagem">
      <h3 class="titulo-secao-montagem">PARTE DE BAIXO</h3>
      <p class="descricao-secao-montagem">
        Escolha seus shorts e bermudas.
      </p>
      <div class="grade-montagem">
        ${parteDeBaixo.map(renderizarPeca).join("")}
      </div>
    </section>
  `;

  produtos.forEach(produto => {
    const opcao = produto.opcoes[0];
    const seletorTamanho = area.querySelector(
      `[data-tamanho-montagem="${produto.id}"]`
    );

    if (seletorTamanho && opcao) {
      seletorTamanho.innerHTML =
        `<option value="">Selecione</option>` +
        opcao.tamanhos.map(t =>
          `<option value="${escaparHTML(t)}">${escaparHTML(t)}</option>`
        ).join("");
    }
  });

  atualizarResumoMontagem();
}


function obterSelecaoMontagem() {
  const selecionados = [];

  produtos.forEach(produto => {
    const marcado = document.querySelector(
      `[data-selecionar-montagem="${produto.id}"]`
    );

    if (!marcado?.checked) return;

    const cor = document.querySelector(
      `[data-cor-montagem="${produto.id}"]`
    )?.value;

    const tamanho = document.querySelector(
      `[data-tamanho-montagem="${produto.id}"]`
    )?.value;

    const quantidade = Number(document.querySelector(
      `[data-quantidade-montagem="${produto.id}"]`
    )?.value || 1);

    const opcao = obterOpcao(produto, cor);

    if (!opcao || !opcao.tamanhos.includes(tamanho)) return;

    selecionados.push({
      produto,
      cor,
      tamanho,
      quantidade: Math.max(1, Math.min(20, quantidade)),
      imagem: opcao.imagem
    });
  });

  return selecionados;
}

function atualizarResumoMontagem() {
  const area = document.getElementById("resumo-selecao");
  const totalElemento = document.getElementById("total-montagem");
  const selecionados = obterSelecaoMontagem();

  const total = selecionados.reduce((soma, item) => {
    return soma + item.produto.preco * item.quantidade;
  }, 0);

  if (area) {
    area.innerHTML = selecionados.length
      ? selecionados.map(item => `
          <div class="resumo-item">
            <strong>${escaparHTML(item.produto.nome)}</strong>
            <p>
              ${escaparHTML(item.cor)} ·
              Tam. ${escaparHTML(item.tamanho)} ·
              Qtd. ${item.quantidade}
            </p>
            <span>${formatarPreco(item.produto.preco * item.quantidade)}</span>
          </div>
        `).join("")
      : "Nenhuma peça selecionada ainda.";
  }

  if (totalElemento) totalElemento.textContent = formatarPreco(total);
}

function adicionarMontagemSacola() {
  const selecionados = obterSelecaoMontagem();

  if (!selecionados.length) {
    mostrarAviso("Selecione pelo menos uma peça com cor e tamanho.");
    return;
  }

  const total = selecionados.reduce((soma, item) => {
    return soma + item.produto.preco * item.quantidade;
  }, 0);

  const detalhes = selecionados.map(item =>
    `${item.produto.nome} — ${item.cor}, tamanho ${item.tamanho}, quantidade ${item.quantidade}`
  ).join(" | ");

  adicionarItemSacola({
    tipo: "montagem",
    nome: "Look personalizado",
    detalhes,
    precoUnitario: total,
    quantidade: 1,
    imagem: selecionados[0].imagem,
    pecas: selecionados.map(item => ({
      nome: item.produto.nome,
      cor: item.cor,
      tamanho: item.tamanho,
      quantidade: item.quantidade,
      preco: item.produto.preco
    }))
  });
}

function mostrarAviso(mensagem) {
  let aviso = document.getElementById("aviso-js");

  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso-js";
    aviso.setAttribute("role", "status");
    aviso.style.cssText = [
      "position:fixed",
      "bottom:20px",
      "left:50%",
      "transform:translateX(-50%)",
      "z-index:9999",
      "background:#c99b58",
      "color:#11100e",
      "padding:12px 18px",
      "border-radius:8px",
      "max-width:90%",
      "font-weight:600",
      "box-shadow:0 8px 25px #0005"
    ].join(";");

    document.body.appendChild(aviso);
  }

  aviso.textContent = mensagem;
  aviso.hidden = false;

  clearTimeout(aviso._temporizador);
  aviso._temporizador = setTimeout(() => {
    aviso.hidden = true;
  }, 2800);
                                 }
                                    
/* ==========================================
   GUERREIRO STORE — PARTE 1/4
   Catálogo, produtos, preços, cores e tamanhos
========================================== */

"use strict";

const WHATSAPP_LOJA = "557588033637";

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const escaparHTML = (valor = "") =>
  String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);

const produtos = [
  {
    id: "camisa-dubai",
    nome: "Camisa Dubai",
    preco: 169.90,
    categoria: "Camisas",
    opcoes: [
      { cor: "Branca", tamanhos: ["P", "G", "GG"], imagem: "04_1000073883_peca_04.jpg" },
      { cor: "Preta", tamanhos: ["P", "M", "G", "GG"], imagem: "01_1000073883_peca_01.jpg" },
      { cor: "Verde", tamanhos: ["P", "G", "GG"], imagem: "02_1000073883_peca_02.jpg" },
      { cor: "Azul claro", tamanhos: ["P", "G", "GG"], imagem: "03_1000073883_peca_03.jpg" }
    ]
  },
  {
    id: "short-linho",
    nome: "Short Linho",
    preco: 129.90,
    categoria: "Shorts",
    opcoes: [
      { cor: "Branco", tamanhos: ["P", "G"], imagem: "01_Short_Linho_Branco.png" },
      { cor: "Preto", tamanhos: ["M", "G"], imagem: "02_Short_Linho_Preto.png" },
      { cor: "Marrom", tamanhos: ["G"], imagem: "03_Short_Linho_Marrom.png" },
      { cor: "Bege", tamanhos: ["P", "M", "G"], imagem: "04_Short_Linho_Verdeclaro.png" },
      { cor: "Rosa", tamanhos: ["P"], imagem: "06_Short_Linho_Rosa.png" }
    ]
  },
  {
    id: "short-mauricinho",
    nome: "Short Mauricinho de Algodão",
    preco: 129.90,
    categoria: "Shorts",
    opcoes: [
      { cor: "Azul água", tamanhos: ["M", "G"], imagem: "28_1000073891_individual.jpg" }
    ]
  },
  {
    id: "short-sarja",
    nome: "Short Sarja",
    preco: 159.90,
    categoria: "Shorts",
    opcoes: [
      { cor: "Azul", tamanhos: ["P"], imagem: "25_1000073889_peca_03.jpg" },
      { cor: "Branco", tamanhos: ["G"], imagem: "24_1000073889_peca_02.jpg" },
      { cor: "Marrom", tamanhos: ["M"], imagem: "23_1000073889_peca_01.jpg" },
      { cor: "Azul escuro", tamanhos: ["M"], imagem: "26_1000073889_peca_04.jpg" }
    ]
  },
  {
    id: "bermuda-brim",
    nome: "Bermuda Brim",
    preco: 159.90,
    categoria: "Bermudas",
    opcoes: [
      { cor: "Preta", tamanhos: ["38", "40", "42", "44", "46"], imagem: "06_1000073885_peca_01.jpg" },
      { cor: "Cinza", tamanhos: ["42", "44"], imagem: "07_1000073885_peca_02.jpg" },
      { cor: "Branca", tamanhos: ["42", "44"], imagem: "08_1000073885_peca_03.jpg" },
      { cor: "Marrom escuro", tamanhos: ["42"], imagem: "09_1000073885_peca_04.jpg" },
      { cor: "Bege", tamanhos: ["38", "40", "42", "44"], imagem: "10_1000073885_peca_05.jpg" },
      { cor: "Caqui", tamanhos: ["38", "40"], imagem: "11_1000073885_peca_06.jpg" }
    ]
  },
  {
    id: "tshirt-texturada",
    nome: "T-shirt Texturada",
    preco: 119.90,
    categoria: "T-shirts",
    opcoes: [
      { cor: "Preta", tamanhos: ["M", "G", "GG"], imagem: "05_1000073884_individual.jpg" }
    ]
  },
  {
    id: "tshirt-trico",
    nome: "T-shirt Tricô",
    preco: 119.90,
    categoria: "T-shirts",
    opcoes: [
      { cor: "Azul claro", tamanhos: ["M"], imagem: "trico_azulclaro_02.jpg" },
      { cor: "Branca", tamanhos: ["M", "G"], imagem: "trico_branca_01.jpg" }
    ]
  },
  {
    id: "tshirt-algodao",
    nome: "T-shirt Algodão",
    preco: 69.90,
    categoria: "T-shirts",
    opcoes: [
      { cor: "Marrom", tamanhos: ["M", "G", "GG"], imagem: "17_1000073888_peca_01.jpg" },
      { cor: "Preta", tamanhos: ["P", "M", "G", "GG"], imagem: "19_1000073888_peca_03.jpg" },
      { cor: "Branca", tamanhos: ["P", "M", "G", "GG"], imagem: "18_1000073888_peca_02.jpg" },
      { cor: "Marrom claro", tamanhos: ["M", "GG"], imagem: "20_1000073888_peca_04.jpg" }
    ]
  },
  {
    id: "regata",
    nome: "Regata",
    preco: 89.90,
    categoria: "Regatas",
    opcoes: [
      { cor: "Preta", tamanhos: ["P"], imagem: "12_1000073887_peca_01.jpg" },
      { cor: "Bege claro", tamanhos: ["G"], imagem: "14_1000073887_peca_03.jpg" },
      { cor: "Branca", tamanhos: ["G", "GG"], imagem: "15_1000073887_peca_04.jpg" },
      { cor: "Verde claro", tamanhos: ["P", "M", "GG"], imagem: "13_1000073887_peca_02.jpg" },
      { cor: "Laranja", tamanhos: ["M"], imagem: "16_1000073887_peca_05.jpg" }
    ]
  },
  {
    id: "camisa-canelada",
    nome: "Camisa Canelada",
    preco: 87.00,
    categoria: "Camisas",
    opcoes: [
      { cor: "Marrom", tamanhos: ["M"], imagem: "30_1000073892_peca_02.jpg" },
      { cor: "Branca", tamanhos: ["M"], imagem: "31_1000073892_peca_03.jpg" },
      { cor: "Bege", tamanhos: ["M"], imagem: "29_1000073892_peca_01.jpg" }
    ]
  }
];

const obterCorCSS = (cor = "") => {
  const cores = {
    "Branca": "#f5f5f0",
    "Branco": "#f5f5f0",
    "Preta": "#171717",
    "Preto": "#171717",
    "Verde": "#477653",
    "Azul claro": "#a9d4e8",
    "Azul": "#315b91",
    "Azul escuro": "#1d3154",
    "Azul água": "#80d6d0",
    "Marrom": "#76513b",
    "Marrom escuro": "#493023",
    "Marrom claro": "#b58b68",
    "Bege": "#d9c5a1",
    "Bege claro": "#e4d5b7",
    "Bege clarinho": "#e4d5b7",
    "Rosa": "#e8a8b8",
    "Cinza": "#929292",
    "Cinza claro": "#c4c4c4",
    "Caqui": "#a99b73",
    "Laranja": "#df803b"
  };

  return cores[cor] || "#c99b58";
};

function obterProduto(id) {
  return produtos.find(produto => produto.id === id);
}

function obterOpcao(produto, cor) {
  return produto?.opcoes.find(opcao => opcao.cor === cor);
}

function obterImagemProduto(produto) {
  return produto.opcoes[0]?.imagem || "";
}

function criarSeletor(label, opcoes, atributo) {
  return `
    <label class="seletor-produto">
      <span>${escaparHTML(label)}</span>
      <select ${atributo} required>
        <option value="">Selecione</option>
        ${opcoes.map(opcao => `
          <option value="${escaparHTML(opcao)}">
            ${escaparHTML(opcao)}
          </option>
        `).join("")}
      </select>
    </label>
  `;
}

/* ==========================================
   GUERREIRO STORE — PARTE 2/4
   Renderização do catálogo e looks prontos
========================================== */

const gruposCategorias = [...new Set(produtos.map(produto => produto.categoria))];

function renderizarCatalogo() {
  const listaCategorias = document.getElementById("lista-categorias");
  if (!listaCategorias) return;

  listaCategorias.innerHTML = gruposCategorias.map(categoria => {
    const itens = produtos.filter(p => p.categoria === categoria);

    return `
      <section class="grupo-categoria">
        <h3>${escaparHTML(categoria)}</h3>

        <div class="grade-produtos">
          ${itens.map(produto => `
            <article class="cartao-produto">
              <button
                type="button"
                class="foto-produto"
                data-ampliar="${produto.id}"
                aria-label="Ampliar ${escaparHTML(produto.nome)}"
              >
                <img
                  src="${escaparHTML(obterImagemProduto(produto))}"
                  alt="${escaparHTML(produto.nome)}"
                  loading="lazy"
                >
              </button>

              <div class="informacoes-produto">
                <h4>${escaparHTML(produto.nome)}</h4>

                <p class="preco-produto">
                  ${formatarPreco(produto.preco)}
                </p>

                <button
                  type="button"
                  class="botao-ver-mais"
                  data-ver-mais="${produto.id}"
                  aria-expanded="false"
                >
                  Ver mais
                </button>

                <div
                  class="detalhes-produto"
                  data-detalhes-produto="${produto.id}"
                  hidden
                >
                  <span class="titulo-opcoes">Escolha a cor</span>

                  <select data-cor-produto="${produto.id}" hidden aria-hidden="true" tabindex="-1">
                    ${produto.opcoes.map((opcao, indice) => `
                      <option value="${escaparHTML(opcao.cor)}" ${indice === 0 ? "selected" : ""}>${escaparHTML(opcao.cor)}</option>
                    `).join("")}
                  </select>

                  <div class="paleta-produto">
                    ${produto.opcoes.map((opcao, indice) => `
                      <button
                        type="button"
                        class="cor-produto ${indice === 0 ? "cor-ativa" : ""}"
                        data-escolher-cor="${produto.id}"
                        data-valor-cor="${escaparHTML(opcao.cor)}"
                        aria-label="${escaparHTML(opcao.cor)}"
                        aria-pressed="${indice === 0}"
                        title="${escaparHTML(opcao.cor)}"
                        style="--cor-amostra:${obterCorCSS(opcao.cor)}"
                      ></button>
                    `).join("")}
                  </div>

                  <p
                    class="nome-cor-escolhida"
                    data-nome-cor="${produto.id}"
                  >
                    ${escaparHTML(produto.opcoes[0]?.cor || "")}
                  </p>

                  <label class="seletor-produto">
                    <span>Tamanho</span>
                    <select
                      data-tamanho-produto="${produto.id}"
                      required
                    >
                      <option value="">Selecione um tamanho</option>
                    </select>
                  </label>

                  <label class="seletor-produto">
                    <span>Quantidade</span>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value="1"
                      data-quantidade-produto="${produto.id}"
                      required
                    >
                  </label>

                  <button
                    type="button"
                    class="botao-adicionar"
                    data-adicionar-produto="${produto.id}"
                  >
                    Adicionar à sacola
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  produtos.forEach(produto => {
    const primeiraOpcao = produto.opcoes[0];

    if (primeiraOpcao) {
      atualizarTamanhosProduto(produto.id, primeiraOpcao.cor);
    }
  });
}

function atualizarTamanhosProduto(id, cor) {
  const produto = obterProduto(id);
  const seletor = document.querySelector(
    `[data-tamanho-produto="${id}"]`
  );

  if (!produto || !seletor) return;

  const opcao = obterOpcao(produto, cor);

  seletor.innerHTML = opcao
    ? `<option value="">Selecione</option>` +
      opcao.tamanhos.map(tamanho =>
        `<option value="${escaparHTML(tamanho)}">${escaparHTML(tamanho)}</option>`
      ).join("")
    : `<option value="">Selecione a cor primeiro</option>`;

  atualizarImagemProduto(id, cor);
}

function atualizarImagemProduto(id, cor) {
  const produto = obterProduto(id);
  const opcao = obterOpcao(produto, cor);
  const cartao = document.querySelector(
    `[data-adicionar-produto="${id}"]`
  )?.closest(".cartao-produto");

  const imagem = cartao?.querySelector("img");

  if (opcao && imagem) {
    imagem.src = opcao.imagem;
    imagem.alt = `${produto.nome} — ${opcao.cor}`;
  }
}

/* Combinações dos looks prontos.
   Cada look é formado por duas peças.
   O desconto é calculado sobre a soma. */

const looksProntos = [
  {
    id: "texturada-brim",
    nome: "T-shirt Texturada + Bermuda Brim",
    opcoes: [
      {
        nome: "Texturada preta + Bermuda cinza",
        imagem: "32_1000073931_peca_01.jpg",
        pecas: [
          { produto: "tshirt-texturada", cor: "Preta", tamanho: "M" },
          { produto: "bermuda-brim", cor: "Cinza", tamanho: "42" }
        ]
      },
      {
        nome: "Texturada preta + Bermuda branca",
        imagem: "33_1000073931_peca_02.jpg",
        pecas: [
          { produto: "tshirt-texturada", cor: "Preta", tamanho: "M" },
          { produto: "bermuda-brim", cor: "Branca", tamanho: "42" }
        ]
      },
      {
        nome: "Texturada preta + Bermuda marrom",
        imagem: "34_1000073931_peca_03.jpg",
        pecas: [
          { produto: "tshirt-texturada", cor: "Preta", tamanho: "M" },
          { produto: "bermuda-brim", cor: "Marrom escuro", tamanho: "42" }
        ]
      },
      {
        nome: "Texturada preta + Bermuda caqui",
        imagem: "35_1000073931_peca_04.jpg",
        pecas: [
          { produto: "tshirt-texturada", cor: "Preta", tamanho: "M" },
          { produto: "bermuda-brim", cor: "Caqui", tamanho: "38" }
        ]
      }
    ]
  },
  {
    id: "algodao-sarja",
    nome: "T-shirt Algodão + Short Sarja",
    opcoes: [
      { nome: "Preta + amarelo", imagem: "algodao_preta_short_sarja_amarelo_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Preta", tamanho: "M" }, { produto: "short-sarja", cor: "Azul", tamanho: "P" }] },
      { nome: "Preta + branca", imagem: "algodao_preta_short_sarja_branco_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Preta", tamanho: "M" }, { produto: "short-sarja", cor: "Branco", tamanho: "G" }] },
      { nome: "Preta + cinza", imagem: "algodao_preta_short_sarja_cinza_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Preta", tamanho: "M" }, { produto: "short-sarja", cor: "Azul escuro", tamanho: "M" }] },
      { nome: "Bege + branco", imagem: "algodao_bege_short_sarja_branco_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Marrom claro", tamanho: "M" }, { produto: "short-sarja", cor: "Branco", tamanho: "G" }] },
      { nome: "Bege + marrom", imagem: "algodao_bege_short_sarja_marrom_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Marrom claro", tamanho: "M" }, { produto: "short-sarja", cor: "Marrom", tamanho: "M" }] },
      { nome: "Bege + preto", imagem: "algodao_bege_short_sarja_preto_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Marrom claro", tamanho: "M" }, { produto: "short-sarja", cor: "Azul escuro", tamanho: "M" }] },
      { nome: "Marrom + branco", imagem: "algodao_marrom_short_sarja_branco_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Marrom", tamanho: "M" }, { produto: "short-sarja", cor: "Branco", tamanho: "G" }] },
      { nome: "Marrom + amarelo", imagem: "algodao_marrom_short_sarja_amarelo_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Marrom", tamanho: "M" }, { produto: "short-sarja", cor: "Azul", tamanho: "P" }] },
      { nome: "Branca + azul água", imagem: "algodao_branca_short_sarja_azul_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Branca", tamanho: "M" }, { produto: "short-mauricinho", cor: "Azul água", tamanho: "M" }] },
      { nome: "Branca + verde", imagem: "algodao_branca_short_sarja_verde_look.jpg",
        pecas: [{ produto: "tshirt-algodao", cor: "Branca", tamanho: "M" }, { produto: "short-mauricinho", cor: "Azul água", tamanho: "M" }] }
    ]
  },
  {
    id: "canelada-sarja",
    nome: "Camisa Canelada + Short",
    opcoes: [
      { nome: "Bege + preto", imagem: "camiseta-canelada-bege-marinho-short-sarja-azul.jpg",
        pecas: [{ produto: "camisa-canelada", cor: "Bege", tamanho: "M" }, { produto: "short-sarja", cor: "Azul escuro", tamanho: "M" }] },
      { nome: "Marrom + branco", imagem: "camiseta-canelada-marrom-short-sarja-branco.jpg",
        pecas: [{ produto: "camisa-canelada", cor: "Marrom", tamanho: "M" }, { produto: "short-mauricinho", cor: "Azul água", tamanho: "M" }] },
      { nome: "Branca + marrom", imagem: "camiseta-canelada-branca-marrom-short-sarja-marrom.jpg",
        pecas: [{ produto: "camisa-canelada", cor: "Branca", tamanho: "M" }, { produto: "short-sarja", cor: "Marrom", tamanho: "M" }] }
    ]
  },
  {
    id: "dubai-linho",
    nome: "Camisa Dubai + Short Linho",
    opcoes: [
      { nome: "Dubai branca + azul claro", imagem: "dubai_branca_short_linho_azulclaro_look.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Branca", tamanho: "G" }, { produto: "short-linho", cor: "Branco", tamanho: "G" }] },
      { nome: "Dubai branca + marrom", imagem: "dubai_branca_short_linho_marrom_look.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Branca", tamanho: "G" }, { produto: "short-linho", cor: "Marrom", tamanho: "G" }] },
      { nome: "Dubai branca + rosa", imagem: "dubai_branca_short_linho_rosa_look.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Branca", tamanho: "G" }, { produto: "short-linho", cor: "Rosa", tamanho: "P" }] },
      { nome: "Dubai branca + verde", imagem: "dubai_branca_short_linho_verde_look.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Branca", tamanho: "G" }, { produto: "short-linho", cor: "Bege", tamanho: "G" }] },
      { nome: "Dubai preta + azul claro", imagem: "look_dubai_preta_linho_azulclaro_01.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Preta", tamanho: "G" }, { produto: "short-linho", cor: "Branco", tamanho: "G" }] },
      { nome: "Dubai preta + marrom", imagem: "look_dubai_preta_linho_marrom_02.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Preta", tamanho: "G" }, { produto: "short-linho", cor: "Marrom", tamanho: "G" }] },
      { nome: "Dubai verde + preto", imagem: "look_dubai_verde_linho_preto_03.jpg",
        pecas: [{ produto: "camisa-dubai", cor: "Verde", tamanho: "G" }, { produto: "short-linho", cor: "Preto", tamanho: "G" }] }
    ]
  },
  {
    id: "trico-brim",
    nome: "T-shirt Tricô + Bermuda Brim",
    opcoes: [
      { nome: "Azul claro + bege", imagem: "trico_azulclaro_bermuda_brim_bege_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Azul claro", tamanho: "M" }, { produto: "bermuda-brim", cor: "Bege", tamanho: "42" }] },
      { nome: "Azul claro + caqui", imagem: "trico_azulclaro_bermuda_brim_caqui_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Azul claro", tamanho: "M" }, { produto: "bermuda-brim", cor: "Caqui", tamanho: "38" }] },
      { nome: "Azul claro + cinza", imagem: "trico_azulclaro_bermuda_brim_cinza_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Azul claro", tamanho: "M" }, { produto: "bermuda-brim", cor: "Cinza", tamanho: "42" }] },
      { nome: "Azul claro + preta", imagem: "trico_azulclaro_bermuda_brim_preta_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Azul claro", tamanho: "M" }, { produto: "bermuda-brim", cor: "Preta", tamanho: "42" }] },
      { nome: "Branca + marrom", imagem: "trico_branca_bermuda_brim_marrom_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Branca", tamanho: "M" }, { produto: "bermuda-brim", cor: "Marrom escuro", tamanho: "42" }] },
      { nome: "Branca + preta", imagem: "trico_branca_bermuda_brim_preta_look.jpg",
        pecas: [{ produto: "tshirt-trico", cor: "Branca", tamanho: "M" }, { produto: "bermuda-brim", cor: "Preta", tamanho: "42" }] }
    ]
  }
];

function calcularPrecoLook(look) {
  return look.pecas.reduce((total, peca) => {
    return total + (obterProduto(peca.produto)?.preco || 0);
  }, 0);
}

function renderizarLooks() {
  looksProntos.forEach(grupo => {
    const area = document.querySelector(
      `#opcoes-look-${grupo.id} .grade-opcoes-look`
    );

    if (!area) return;

    area.innerHTML = grupo.opcoes.map((look, indice) => {
      const total = calcularPrecoLook(look);
      const totalComDesconto = Math.round(total * 0.95 * 100) / 100;

      return `
        <article class="cartao-look">
          <img
            src="${escaparHTML(look.imagem)}"
            alt="${escaparHTML(look.nome)}"
            loading="lazy"
          >
          <div class="informacoes-produto">
            <h4>${escaparHTML(look.nome)}</h4>
            <p>De <s>${formatarPreco(total)}</s></p>
            <p class="preco-produto">${formatarPreco(totalComDesconto)}</p>
            <p class="desconto-look">5% de desconto</p>

            ${look.pecas.map((peca, i) => {
              const produto = obterProduto(peca.produto);
              const opcao = obterOpcao(produto, peca.cor);
              const tamanhos = opcao?.tamanhos || [];

              return `
                <label class="seletor-produto">
                  <span>Tamanho — ${escaparHTML(produto.nome)} (${escaparHTML(peca.cor)})</span>
                  <select
                    data-tamanho-look="${grupo.id}-${indice}-${i}"
                    required
                  >
                    <option value="">Selecione</option>
                    ${tamanhos.map(t =>
                      `<option value="${escaparHTML(t)}" ${t === peca.tamanho ? "selected" : ""}>${escaparHTML(t)}</option>`
                    ).join("")}
                  </select>
                </label>
              `;
            }).join("")}

            <label class="seletor-produto">
              <span>Quantidade de looks</span>
              <input
                type="number"
                min="1"
                max="20"
                value="1"
                data-quantidade-look="${grupo.id}-${indice}"
              >
            </label>

            <button
              type="button"
              class="botao-principal botao-largo"
              data-adicionar-look="${grupo.id}-${indice}"
            >
              ADICIONAR À SACOLA
            </button>
          </div>
        </article>
      `;
    }).join("");
  });
  }
        

/* ==========================================
   GUERREIRO STORE — PARTE 4/4
   Eventos, sacola, modal e WhatsApp
========================================== */

function abrirSacola() {
  const painel = document.getElementById("painel-sacola");
  const fundo = document.getElementById("fundo-sacola");

  if (painel) {
    painel.classList.add("aberta");
    painel.setAttribute("aria-hidden", "false");
  }

  if (fundo) fundo.hidden = false;
  document.body.classList.add("sacola-aberta");
}

function fecharSacola() {
  const painel = document.getElementById("painel-sacola");
  const fundo = document.getElementById("fundo-sacola");

  if (painel) {
    painel.classList.remove("aberta");
    painel.setAttribute("aria-hidden", "true");
  }

  if (fundo) fundo.hidden = true;
  document.body.classList.remove("sacola-aberta");
}

function adicionarProdutoIndividual(id) {
  const produto = obterProduto(id);
  if (!produto) return;

  const cor = document.querySelector(
    `[data-cor-produto="${id}"]`
  )?.value;

  const tamanho = document.querySelector(
    `[data-tamanho-produto="${id}"]`
  )?.value;

  const quantidade = Number(document.querySelector(
    `[data-quantidade-produto="${id}"]`
  )?.value || 1);

  const opcao = obterOpcao(produto, cor);

  if (!opcao || !opcao.tamanhos.includes(tamanho)) {
    mostrarAviso("Selecione uma cor e um tamanho disponíveis.");
    return;
  }

  adicionarItemSacola({
    tipo: "produto",
    nome: produto.nome,
    detalhes: `Cor: ${cor} | Tamanho: ${tamanho}`,
    precoUnitario: produto.preco,
    quantidade: Math.max(1, Math.min(20, quantidade)),
    imagem: opcao.imagem,
    pecas: [{
      nome: produto.nome,
      cor,
      tamanho,
      quantidade: Math.max(1, Math.min(20, quantidade)),
      preco: produto.preco
    }]
  });
}

function adicionarLookPronto(grupoId, indice) {
  const grupo = looksProntos.find(look => look.id === grupoId);
  const look = grupo?.opcoes[indice];

  if (!look) return;

  const pecas = look.pecas.map((peca, i) => {
    const produto = obterProduto(peca.produto);
    const seletor = document.querySelector(
      `[data-tamanho-look="${grupoId}-${indice}-${i}"]`
    );

    return {
      ...peca,
      produto,
      tamanho: seletor?.value || ""
    };
  });

  if (pecas.some(peca =>
    !peca.produto ||
    !obterOpcao(peca.produto, peca.cor)?.tamanhos.includes(peca.tamanho)
  )) {
    mostrarAviso("Confira os tamanhos disponíveis para esse look.");
    return;
  }

  const quantidade = Math.max(1, Math.min(20, Number(
    document.querySelector(
      `[data-quantidade-look="${grupoId}-${indice}"]`
    )?.value || 1
  )));

  const precoOriginal = pecas.reduce(
    (total, peca) => total + peca.produto.preco,
    0
  );

  const precoComDesconto =
    Math.round(precoOriginal * 0.95 * 100) / 100;

  adicionarItemSacola({
    tipo: "look-pronto",
    nome: look.nome,
    detalhes: pecas.map(peca =>
      `${peca.produto.nome}: ${peca.cor}, tamanho ${peca.tamanho}`
    ).join(" | ") + " | Desconto de 5%",
    precoUnitario: precoComDesconto,
    quantidade,
    imagem: look.imagem,
    precoOriginal,
    desconto: precoOriginal - precoComDesconto,
    pecas: pecas.map(peca => ({
      nome: peca.produto.nome,
      cor: peca.cor,
      tamanho: peca.tamanho,
      quantidade: 1,
      preco: peca.produto.preco
    }))
  });
}

function criarMensagemWhatsApp() {
  if (!sacola.length) {
    mostrarAviso("Sua sacola está vazia.");
    return null;
  }

  const linhas = [
    "Olá! Gostaria de fazer um pedido na Guerreiro Store.",
    "",
    "MEU PEDIDO:"
  ];

  sacola.forEach((item, indice) => {
    linhas.push("");
    linhas.push(`${indice + 1}. ${item.nome}`);

    if (item.pecas?.length) {
      item.pecas.forEach(peca => {
        linhas.push(
          `- ${peca.nome}: ${peca.cor}, tamanho ${peca.tamanho}` +
          (peca.quantidade > 1 ? `, quantidade ${peca.quantidade}` : "") +
          ` — ${formatarPreco(peca.preco)}`
        );
      });
    } else if (item.detalhes) {
      linhas.push(`- ${item.detalhes}`);
    }

    if (item.desconto > 0) {
      linhas.push(`- Preço original: ${formatarPreco(item.precoOriginal)}`);
      linhas.push(`- Desconto: ${formatarPreco(item.desconto)}`);
    }

    linhas.push(`- Quantidade: ${item.quantidade}`);
    linhas.push(
      `- Subtotal: ${formatarPreco(item.precoUnitario * item.quantidade)}`
    );
  });

  linhas.push("");
  linhas.push(`TOTAL DO PEDIDO: ${formatarPreco(totalSacola())}`);
  linhas.push("");
  linhas.push(
    "Gostaria de confirmar a disponibilidade e combinar o pagamento e a entrega. Obrigado!"
  );

  return linhas.join("\n");
}

function enviarPedidoWhatsApp() {
  const mensagem = criarMensagemWhatsApp();
  if (!mensagem) return;

  const url =
    `https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* Imagem ampliada */

function abrirImagemAmpliada(produtoId) {
  const produto = obterProduto(produtoId);
  if (!produto) return;

  const cor = document.querySelector(
    `[data-cor-produto="${produtoId}"]`
  )?.value;

  const opcao = obterOpcao(produto, cor) || produto.opcoes[0];

  const modal = document.getElementById("modal-imagem");
  const imagem = document.getElementById("imagem-ampliada");
  const nome = document.getElementById("nome-imagem-ampliada");
  const descricao = document.getElementById("descricao-imagem-ampliada");

  if (!modal || !imagem) return;

  imagem.src = opcao.imagem;
  imagem.alt = `${produto.nome} — ${opcao.cor}`;

  if (nome) nome.textContent = produto.nome;
  if (descricao) {
    descricao.textContent =
      `${opcao.cor} · ${opcao.tamanhos.join(", ")} · ${formatarPreco(produto.preco)}`;
  }

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
}

function fecharImagemAmpliada() {
  const modal = document.getElementById("modal-imagem");
  if (!modal) return;

  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}

/* Eventos gerais */

document.addEventListener("change", evento => {
  const alvo = evento.target;

  if (alvo.matches("[data-cor-produto]")) {
    const id = alvo.dataset.corProduto;
    atualizarTamanhosProduto(id, alvo.value);
  }

  if (alvo.matches("[data-cor-montagem]")) {
    const id = alvo.dataset.corMontagem;
    const produto = obterProduto(id);
    const opcao = obterOpcao(produto, alvo.value);

    const seletorTamanho = document.querySelector(
      `[data-tamanho-montagem="${id}"]`
    );

    if (seletorTamanho) {
      seletorTamanho.innerHTML = opcao
        ? `<option value="">Selecione</option>` +
          opcao.tamanhos.map(t =>
            `<option value="${escaparHTML(t)}">${escaparHTML(t)}</option>`
          ).join("")
        : `<option value="">Selecione a cor primeiro</option>`;
    }

    atualizarResumoMontagem();
  }

  if (
    alvo.matches("[data-selecionar-montagem]") ||
    alvo.matches("[data-tamanho-montagem]") ||
    alvo.matches("[data-quantidade-montagem]")
  ) {
    atualizarResumoMontagem();
  }

  if (alvo.matches("[data-quantidade-sacola]")) {
    alterarQuantidadeSacola(
      alvo.dataset.quantidadeSacola,
      alvo.value
    );
  }
});

document.addEventListener("click", evento => {
  const alvo = evento.target.closest("button");
  if (!alvo) return;

   
  if (alvo.matches("[data-escolher-cor-montagem]")) {
    const id = alvo.dataset.escolherCorMontagem;
    const cor = alvo.dataset.valorCorMontagem;

    const area = document.getElementById("pecas-para-montar");
    const cartao = alvo.closest(".cartao-montagem");
    const seletorCor = cartao?.querySelector(
      `[data-cor-montagem="${id}"]`
    );

    if (!seletorCor) return;

    seletorCor.value = cor;

    cartao.querySelectorAll("[data-escolher-cor-montagem]").forEach(botao => {
      const ativo = botao === alvo;
      botao.classList.toggle("cor-montagem-ativa", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
    });

    const nomeCor = cartao.querySelector(
      `[data-nome-cor-montagem="${id}"]`
    );
    if (nomeCor) nomeCor.textContent = cor;

    const produto = obterProduto(id);
    const opcao = obterOpcao(produto, cor);
    const imagem = cartao.querySelector(
      `[data-imagem-montagem="${id}"]`
    );

    if (imagem && opcao?.imagem) {
      imagem.src = opcao.imagem;
    }

    seletorCor.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    return;
  }

   
   if (alvo.matches("[data-escolher-cor]")) {
  const id = alvo.dataset.escolherCor;
  const cor = alvo.dataset.valorCor;

  const detalhes = document.querySelector(
    `[data-detalhes-produto="${id}"]`
  );

  if (!detalhes) return;

  detalhes.querySelectorAll("[data-escolher-cor]").forEach(botao => {
    const selecionado = botao === alvo;
    botao.classList.toggle("cor-ativa", selecionado);
    botao.setAttribute("aria-pressed", String(selecionado));
  });

  const nomeCor = detalhes.querySelector(`[data-nome-cor="${id}"]`);
  if (nomeCor) nomeCor.textContent = cor;

  const campoCor = document.querySelector(`[data-cor-produto="${id}"]`);
  if (campoCor) campoCor.value = cor;

  atualizarTamanhosProduto(id, cor);
  return;
   }

   
if (alvo.matches("[data-ver-mais]")) {
  const id = alvo.dataset.verMais;
  const detalhes = document.querySelector(
    `[data-detalhes-produto="${id}"]`
  );

  if (detalhes) {
    detalhes.hidden = !detalhes.hidden;
    alvo.setAttribute("aria-expanded", String(!detalhes.hidden));
  }

  return;
}

   
  if (alvo.matches("[data-adicionar-produto]")) {
    adicionarProdutoIndividual(alvo.dataset.adicionarProduto);
  }

  if (alvo.matches("[data-adicionar-look]")) {
    const partes = alvo.dataset.adicionarLook.split("-");
    const indice = Number(partes.pop());
    const grupoId = partes.join("-");
    adicionarLookPronto(grupoId, indice);
  }

  if (alvo.matches("[data-remover-sacola]")) {
    removerItemSacola(alvo.dataset.removerSacola);
  }

  if (alvo.matches("[data-abrir-look]")) {
    const id = alvo.dataset.abrirLook;
    const area = document.getElementById(`opcoes-look-${id}`);

    if (area) {
      area.hidden = !area.hidden;
      alvo.setAttribute("aria-expanded", String(!area.hidden));
      alvo.textContent = area.hidden ? "VER MAIS" : "VER MENOS";
    }
  }

  if (alvo.matches("[data-ampliar]")) {
    abrirImagemAmpliada(alvo.dataset.ampliar);
  }

  if (alvo.id === "adicionar-look-sacola") {
    adicionarMontagemSacola();
  }

  if (alvo.id === "enviar-pedido") {
    enviarPedidoWhatsApp();
  }

  if (alvo.id === "abrir-sacola") abrirSacola();
  if (alvo.id === "fechar-sacola") fecharSacola();

  if (alvo.id === "fundo-sacola") fecharSacola();

  if (alvo.id === "fechar-modal-imagem") {
    fecharImagemAmpliada();
  }

  if (alvo.id === "modal-imagem") {
    fecharImagemAmpliada();
  }

  if (alvo.id === "botao-menu") {
    const navegacao = document.getElementById("navegacao");
    if (navegacao) {
      const aberto = navegacao.classList.toggle("aberta");
      alvo.setAttribute("aria-expanded", String(aberto));
    }
  }

  if (alvo.matches(".navegacao a")) {
    document.getElementById("navegacao")?.classList.remove("aberta");
    document.getElementById("botao-menu")?.setAttribute("aria-expanded", "false");
  }

  if (alvo.matches("[data-cor]")) {
    const mensagem = document.getElementById("mensagem-paleta");
    if (mensagem) {
      mensagem.textContent = `Você selecionou a cor ${alvo.dataset.cor}. Explore o catálogo para conferir as peças disponíveis.`;
    }
  }
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharSacola();
    fecharImagemAmpliada();
  }
});

/* Inicialização */

function iniciarSite() {
  renderizarCatalogo();
  renderizarLooks();
  renderizarMontador();
  renderizarSacola();

  const ano = document.getElementById("ano-atual");
  if (ano) ano.textContent = new Date().getFullYear();

  document.querySelectorAll(".opcoes-look").forEach(area => {
    area.hidden = true;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarSite);
} else {
  iniciarSite();
}

