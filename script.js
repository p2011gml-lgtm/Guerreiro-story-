
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
    id: "regata-trico",
    nome: "Regata Tricô",
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

const listaCategorias = document.getElementById("lista-categorias");
const pecasParaMontar = document.getElementById("pecas-para-montar");

const gruposCategorias = [...new Set(produtos.map(p => p.categoria))];

function renderizarCatalogo() {
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
                <p class="preco-produto">${formatarPreco(produto.preco)}</p>

                ${criarSeletor(
                  "Cor",
                  produto.opcoes.map(o => o.cor),
                  `data-cor-produto="${produto.id}"`
                )}

                <label class="seletor-produto">
                  <span>Tamanho</span>
                  <select data-tamanho-produto="${produto.id}" required>
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
                    data-quantidade-produto="${produto.id}"
                  >
                </label>

                <button
                  type="button"
                  class="botao-principal botao-largo"
                  data-adicionar-produto="${produto.id}"
                >
                  ADICIONAR À SACOLA
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
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
        
