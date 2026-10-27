"use strict";

const WHATSAPP = "557588033637";

const produtos = [
  {
    id: "dubai-branca", nome: "Camisa Dubai", categoria: "camisas",
    cor: "Branca", preco: 169.90, imagem: "02_1000073883_peca_02.jpg",
    tamanhos: ["P", "G", "GG"]
  },
  {
    id: "dubai-preta", nome: "Camisa Dubai", categoria: "camisas",
    cor: "Preta", preco: 169.90, imagem: "01_1000073883_peca_01.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "dubai-azul", nome: "Camisa Dubai", categoria: "camisas",
    cor: "Azul", preco: 169.90, imagem: "03_1000073883_peca_03.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "linho-branco", nome: "Short Linho", categoria: "shorts",
    cor: "Branco", preco: 129.90, imagem: "01_Short_Linho_Branco.png",
    tamanhos: ["P", "G"]
  },
  {
    id: "linho-preto", nome: "Short Linho", categoria: "shorts",
    cor: "Preto", preco: 129.90, imagem: "02_Short_Linho_Preto.png",
    tamanhos: ["M", "G"]
  },
  {
    id: "linho-marrom", nome: "Short Linho", categoria: "shorts",
    cor: "Marrom", preco: 129.90, imagem: "03_Short_Linho_Marrom.png",
    tamanhos: ["G"]
  },
  {
    id: "linho-bege", nome: "Short Linho", categoria: "shorts",
    cor: "Bege", preco: 129.90, imagem: "04_Short_Linho_Verdeclaro.png",
    tamanhos: ["P", "M", "G"]
  },
  {
    id: "linho-rosa", nome: "Short Linho", categoria: "shorts",
    cor: "Rosa", preco: 129.90, imagem: "06_Short_Linho_Rosa.png",
    tamanhos: ["P"]
  },
  {
    id: "mauricinho-azul", nome: "Short Mauricinho", categoria: "shorts",
    cor: "Azul-água", preco: 129.90, imagem: "05_1000073884_individual.jpg",
    tamanhos: ["M", "G"]
  },
  {
    id: "sarja-azul", nome: "Short Sarja", categoria: "shorts",
    cor: "Azul", preco: 159.90, imagem: "06_1000073885_peca_01.jpg",
    tamanhos: ["P"]
  },
  {
    id: "sarja-branco", nome: "Short Sarja", categoria: "shorts",
    cor: "Branco", preco: 159.90, imagem: "07_1000073885_peca_02.jpg",
    tamanhos: ["G"]
  },
  {
    id: "sarja-marrom", nome: "Short Sarja", categoria: "shorts",
    cor: "Marrom", preco: 159.90, imagem: "08_1000073885_peca_03.jpg",
    tamanhos: ["M"]
  },
  {
    id: "sarja-marinho", nome: "Short Sarja", categoria: "shorts",
    cor: "Azul-marinho", preco: 159.90, imagem: "09_1000073885_peca_04.jpg",
    tamanhos: ["M"]
  },
  {
    id: "brim-preto", nome: "Bermuda Brim", categoria: "shorts",
    cor: "Preta", preco: 159.90, imagem: "12_1000073887_peca_01.jpg",
    tamanhos: ["38", "40", "42", "44", "46"]
  },
  {
    id: "brim-cinza", nome: "Bermuda Brim", categoria: "shorts",
    cor: "Cinza", preco: 159.90, imagem: "13_1000073887_peca_02.jpg",
    tamanhos: ["42", "44"]
  },
  {
    id: "brim-branca", nome: "Bermuda Brim", categoria: "shorts",
    cor: "Branca", preco: 159.90, imagem: "14_1000073887_peca_03.jpg",
    tamanhos: ["42", "44"]
  },
  {
    id: "brim-cinza-claro", nome: "Bermuda Brim", categoria: "shorts",
    cor: "Cinza-claro", preco: 159.90, imagem: "15_1000073887_peca_04.jpg",
    tamanhos: ["38", "40"]
  },
  {
    id: "brim-bege", nome: "Bermuda Brim", categoria: "shorts",
    cor: "Bege-claro", preco: 159.90, imagem: "16_1000073887_peca_05.jpg",
    tamanhos: ["38", "40", "42", "44"]
  },
  {
    id: "texturizada-preta", nome: "T-shirt Texturizada", categoria: "camisetas",
    cor: "Preta", preco: 119.90, imagem: "17_1000073888_peca_01.jpg",
    tamanhos: ["M", "G", "GG"]
  },
  {
    id: "trico-branca", nome: "T-shirt Tricô", categoria: "camisetas",
    cor: "Branca", preco: 119.90, imagem: "trico_branca_01.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "trico-azul", nome: "T-shirt Tricô", categoria: "camisetas",
    cor: "Azul-claro", preco: 119.90, imagem: "trico_azulclaro_02.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "algodao-bege", nome: "T-shirt Algodão", categoria: "camisetas",
    cor: "Bege", preco: 69.90, imagem: "28_1000073891_individual.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "algodao-branca", nome: "T-shirt Algodão", categoria: "camisetas",
    cor: "Branca", preco: 69.90, imagem: "24_1000073889_peca_02.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "algodao-preta", nome: "T-shirt Algodão", categoria: "camisetas",
    cor: "Preta", preco: 69.90, imagem: "25_1000073889_peca_03.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "algodao-marrom", nome: "T-shirt Algodão", categoria: "camisetas",
    cor: "Marrom-escuro", preco: 69.90, imagem: "26_1000073889_peca_04.jpg",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "regata-preta", nome: "Regata", categoria: "regatas",
    cor: "Preta", preco: 87.00, imagem: "29_1000073892_peca_01.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "regata-branca", nome: "Regata", categoria: "regatas",
    cor: "Branca", preco: 87.00, imagem: "30_1000073892_peca_02.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "regata-verde", nome: "Regata", categoria: "regatas",
    cor: "Verde", preco: 87.00, imagem: "31_1000073892_peca_03.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "regata-laranja", nome: "Regata", categoria: "regatas",
    cor: "Laranja", preco: 87.00, imagem: "32_1000073931_peca_01.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "regata-bege", nome: "Regata", categoria: "regatas",
    cor: "Bege", preco: 87.00, imagem: "33_1000073931_peca_02.jpg",
    tamanhos: ["Consultar"]
  },
  {
    id: "canelada-marrom", nome: "Camisa Canelada", categoria: "camisetas",
    cor: "Marrom", preco: 87.00,
    imagem: "camiseta-canelada-marrom-short-sarja-branco.jpg",
    tamanhos: ["M"]
  },
  {
    id: "canelada-branca", nome: "Camisa Canelada", categoria: "camisetas",
    cor: "Branca", preco: 87.00,
    imagem: "camiseta-canelada-branca-marrom-short-sarja-marrom.jpg",
    tamanhos: ["M"]
  },
  {
    id: "canelada-bege", nome: "Camisa Canelada", categoria: "camisetas",
    cor: "Bege", preco: 87.00,
    imagem: "camiseta-canelada-bege-marinho-short-sarja-azul.jpg",
    tamanhos: ["M"]
  }
];

let sacola = [];
let categoriaAtual = "todos";
let produtoAtual = null;
let lookSelecionado = null;

const dinheiro = valor => valor.toLocaleString("pt-BR", {
  style: "currency", currency: "BRL"
});

const buscarProduto = id => produtos.find(p => p.id === id);

const imagemHTML = (produto, classe = "") => `
  <img class="${classe}" src="${produto.imagem}"
       alt="${produto.nome} ${produto.cor}"
       onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
  <div class="sem-foto" style="display:none">GUERREIRO<br>STORY</div>
`;

function renderProdutos() {
  const grade = document.getElementById("gradeProdutos");
  const lista = produtos.filter(p =>
    categoriaAtual === "todos" || p.categoria === categoriaAtual
  );

  grade.innerHTML = lista.map(p => `
    <article class="produto-card">
      <div class="produto-imagem">
        ${imagemHTML(p)}
      </div>
      <div class="produto-info">
        <div class="categoria-texto">${p.cor}</div>
        <h3>${p.nome}</h3>
        <div class="preco">${dinheiro(p.preco)}</div>
        <div class="cores">
          ${produtos.filter(v => v.nome === p.nome).map(v => `
            <button class="cor ${v.id === p.id ? "selecionada" : ""}"
              title="${v.cor}" aria-label="${v.cor}"
              style="background:${corCSS(v.cor)}"
              onclick="abrirProduto('${v.id}')"></button>
          `).join("")}
        </div>
        <button class="botao-card" onclick="abrirProduto('${p.id}')">
          ESCOLHER TAMANHO
        </button>
      </div>
    </article>
  `).join("");
}

function corCSS(nome) {
  const cores = {
    "Branca": "#eee9df", "Branco": "#eee9df",
    "Preta": "#151515", "Preto": "#151515",
    "Azul": "#345f9c", "Azul-marinho": "#1c2c48",
    "Azul-claro": "#a7c9e4", "Azul-água": "#8ecbc7",
    "Marrom": "#68442f", "Marrom-escuro": "#38251e",
    "Bege": "#c8b28c", "Bege-claro": "#d9c7a6",
    "Cinza": "#858585", "Cinza-claro": "#b7b7b7",
    "Rosa": "#dba5b6", "Verde": "#3f6545", "Laranja": "#d77a35"
  };
  return cores[nome] || "#c99b58";
}

function abrirProduto(id) {
  produtoAtual = buscarProduto(id);
  if (!produtoAtual) return;

  const modal = document.getElementById("fundoProduto");
  document.getElementById("detalhesProduto").innerHTML = `
    <div class="detalhe-grid">
      <div>${imagemHTML(produtoAtual)}</div>
      <div>
        <span class="sobrelinha">${produtoAtual.cor}</span>
        <h2>${produtoAtual.nome}</h2>
        <p class="preco">${dinheiro(produtoAtual.preco)}</p>
        <p style="color:var(--muted);font-size:12px;line-height:1.8">
          Escolha o tamanho desejado para adicionar esta peça à sua sacola.
        </p>
        <form class="form-produto" id="formProduto">
          <label>Cor
            <select id="corProduto">
              ${produtos.filter(p => p.nome === produtoAtual.nome).map(p =>
                `<option value="${p.id}" ${p.id === produtoAtual.id ? "selected" : ""}>${p.cor}</option>`
              ).join("")}
            </select>
          </label>
          <label>Tamanho
            <select id="tamanhoProduto" required>
              ${produtoAtual.tamanhos.map(t =>
                `<option value="${t}">${t}</option>`
              ).join("")}
            </select>
          </label>
          <button class="botao dourado largura-total" type="submit">
            ADICIONAR À SACOLA
          </button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add("aberto");
  document.body.classList.add("modal-aberto");

  document.getElementById("corProduto").addEventListener("change", e => {
    abrirProduto(e.target.value);
  });

  document.getElementById("formProduto").addEventListener("submit", e => {
    e.preventDefault();
    const tamanho = document.getElementById("tamanhoProduto").value;
    adicionarItem(produtoAtual.id, tamanho, false);
    fecharModal("fundoProduto");
    abrirSacola();
  });
                       }
const looks = [
  {
    nome: "Dubai + Sarja",
    descricao: "Camisa Dubai branca com short Sarja azul.",
    ids: ["dubai-branca", "sarja-azul"],
    opcoes: [
      { ids: ["dubai-branca", "sarja-azul"], imagem: "02_1000073883_peca_02.jpg" },
      { ids: ["dubai-preta", "sarja-branco"], imagem: "01_1000073883_peca_01.jpg" },
      { ids: ["dubai-azul", "sarja-marrom"], imagem: "03_1000073883_peca_03.jpg" }
    ]
  },
  {
    nome: "Dubai + Linho",
    descricao: "Camisa Dubai com short de linho.",
    ids: ["dubai-preta", "linho-branco"],
    opcoes: [
      { ids: ["dubai-preta", "linho-branco"], imagem: "01_1000073883_peca_01.jpg" },
      { ids: ["dubai-branca", "linho-preto"], imagem: "02_1000073883_peca_02.jpg" },
      { ids: ["dubai-azul", "linho-bege"], imagem: "03_1000073883_peca_03.jpg" }
    ]
  },
  {
    nome: "Algodão + Brim",
    descricao: "T-shirt de algodão com bermuda Brim.",
    ids: ["algodao-preta", "brim-bege"],
    opcoes: [
      { ids: ["algodao-preta", "brim-bege"], imagem: "25_1000073889_peca_03.jpg" },
      { ids: ["algodao-branca", "brim-preto"], imagem: "24_1000073889_peca_02.jpg" },
      { ids: ["algodao-bege", "brim-cinza"], imagem: "28_1000073891_individual.jpg" }
    ]
  }
];

function precoLook(look) {
  return look.ids.reduce((total, id) => {
    const p = buscarProduto(id);
    return total + (p ? p.preco : 0);
  }, 0);
}

function renderLooks() {
  const grade = document.getElementById("gradeLooks");

  grade.innerHTML = looks.map((look, index) => {
    const opcao = look.opcoes[0];
    const total = precoLook(look);
    const promocional = total * 0.95;

    return `
      <article class="look-card">
        <div class="look-foto">
          <img id="lookImagem${index}" src="${opcao.imagem}"
               alt="${look.nome}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <div class="sem-foto" style="display:none">LOOK<br>GUERREIRO</div>
        </div>
        <div class="look-info">
          <span class="sobrelinha">LOOK EXCLUSIVO</span>
          <h3>${look.nome}</h3>
          <p>${look.descricao}</p>
          <div class="look-opcoes">
            ${look.opcoes.map((o, oi) => `
              <button class="look-opcao ${oi === 0 ? "ativo" : ""}"
                title="Ver combinação ${oi + 1}"
                onclick="selecionarOpcaoLook(${index},${oi},this)">
                <img src="${o.imagem}" alt="Opção ${oi + 1}"
                     onerror="this.style.opacity='.2'">
              </button>
            `).join("")}
          </div>
          <p><s>${dinheiro(total)}</s></p>
          <div class="look-preco">${dinheiro(promocional)} <small>com 5% OFF</small></div>
          <button class="botao dourado largura-total"
            onclick="adicionarLookPronto(${index})">
            ESCOLHER ESTE LOOK
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function selecionarOpcaoLook(index, opcaoIndex, botao) {
  const look = looks[index];
  const opcao = look.opcoes[opcaoIndex];

  lookSelecionado = { index, opcaoIndex };

  document.getElementById(`lookImagem${index}`).src = opcao.imagem;

  botao.parentElement.querySelectorAll(".look-opcao").forEach(b => {
    b.classList.remove("ativo");
  });
  botao.classList.add("ativo");
}

function adicionarLookPronto(index) {
  const look = looks[index];
  const opcaoIndex = lookSelecionado?.index === index
    ? lookSelecionado.opcaoIndex : 0;
  const opcao = look.opcoes[opcaoIndex];

  const itens = opcao.ids.map(id => buscarProduto(id)).filter(Boolean);

  if (!itens.length) {
    alert("Não foi possível carregar as peças deste look.");
    return;
  }

  const subtotal = itens.reduce((soma, p) => soma + p.preco, 0);
  const desconto = subtotal * 0.05;

  sacola.push({
    tipo: "look",
    id: `look-${Date.now()}`,
    nome: look.nome,
    itens: itens.map(p => ({ ...p, tamanho: p.tamanhos[0] })),
    total: subtotal - desconto,
    desconto
  });

  atualizarSacola();
  abrirSacola();
}

function adicionarItem(id, tamanho, comDesconto) {
  const produto = buscarProduto(id);
  if (!produto) return;

  sacola.push({
    tipo: "produto",
    id: `item-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    produto,
    tamanho,
    total: produto.preco,
    desconto: 0
  });

  atualizarSacola();
}

function removerItem(id) {
  sacola = sacola.filter(item => item.id !== id);
  atualizarSacola();
}

function atualizarSacola() {
  const quantidade = sacola.reduce((total, item) => {
    return total + (item.tipo === "look" ? item.itens.length : 1);
  }, 0);

  document.getElementById("contadorSacola").textContent = quantidade;

  const total = sacola.reduce((soma, item) => soma + item.total, 0);
  document.getElementById("totalSacola").textContent = dinheiro(total);

  const container = document.getElementById("itensSacola");

  if (!sacola.length) {
    container.innerHTML = `<p class="vazio">Sua sacola está vazia. Escolha suas peças no catálogo.</p>`;
    return;
  }

  container.innerHTML = sacola.map(item => {
    if (item.tipo === "look") {
      return `
        <div class="item-sacola">
          <div>
            <strong>${item.nome}</strong>
            <small>${item.itens.map(p => `${p.nome} (${p.cor})`).join(" + ")}</small>
            <small>Desconto de 5%: ${dinheiro(item.desconto)}</small>
            <strong>${dinheiro(item.total)}</strong>
          </div>
          <button class="remover-item" onclick="removerItem('${item.id}')">Remover</button>
        </div>
      `;
    }

    return `
      <div class="item-sacola">
        <div>
          <strong>${item.produto.nome}</strong>
          <small>Cor: ${item.produto.cor} • Tamanho: ${item.tamanho}</small>
          <strong>${dinheiro(item.total)}</strong>
        </div>
        <button class="remover-item" onclick="removerItem('${item.id}')">Remover</button>
      </div>
    `;
  }).join("");
}

function abrirSacola() {
  document.getElementById("fundoModal").classList.add("aberto");
  document.body.classList.add("modal-aberto");
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("aberto");

  if (!document.querySelector(".fundo-modal.aberto")) {
    document.body.classList.remove("modal-aberto");
  }
}

function finalizarWhatsApp() {
  if (!sacola.length) {
    alert("Sua sacola está vazia. Escolha uma peça ou um look primeiro.");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer este pedido na Guerreiro Story:\n\n";

  sacola.forEach((item, index) => {
    mensagem += `${index + 1}. `;

    if (item.tipo === "look") {
      mensagem += `${item.nome}\n`;
      item.itens.forEach(p => {
        mensagem += `   - ${p.nome} | ${p.cor} | Tamanho: ${p.tamanho}\n`;
      });
      mensagem += `   Desconto de 5%: ${dinheiro(item.desconto)}\n`;
      mensagem += `   Subtotal: ${dinheiro(item.total)}\n\n`;
    } else {
      mensagem += `${item.produto.nome} | ${item.produto.cor}`;
      mensagem += ` | Tamanho: ${item.tamanho}`;
      mensagem += ` | ${dinheiro(item.total)}\n\n`;
    }
  });

  const total = sacola.reduce((soma, item) => soma + item.total, 0);
  mensagem += `TOTAL DO PEDIDO: ${dinheiro(total)}\n\n`;
  mensagem += "Poderiam confirmar a disponibilidade e as informações para concluir o pedido?";

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

document.getElementById("filtros").addEventListener("click", event => {
  const botao = event.target.closest("[data-categoria]");
  if (!botao) return;

  categoriaAtual = botao.dataset.categoria;

  document.querySelectorAll(".filtro").forEach(f => f.classList.remove("ativo"));
  botao.classList.add("ativo");

  renderProdutos();
});

document.getElementById("abrirSacola").addEventListener("click", abrirSacola);
document.getElementById("fecharSacola").addEventListener("click", () => fecharModal("fundoModal"));
document.getElementById("fecharProduto").addEventListener("click", () => fecharModal("fundoProduto"));
document.getElementById("continuarComprando").addEventListener("click", () => fecharModal("fundoModal"));
document.getElementById("enviarPedido").addEventListener("click", finalizarWhatsApp);

document.getElementById("adicionarLook").addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".montagem-check:checked")];

  if (!selecionados.length) {
    alert("Selecione pelo menos uma peça para montar seu look.");
    return;
  }

  selecionados.forEach(check => {
    adicionarItem(check.value, check.dataset.tamanho, false);
  });

  document.querySelectorAll(".montagem-check").forEach(check => {
    check.checked = false;
  });

  renderResumoMontagem();
  abrirSacola();
});

document.getElementById("fundoModal").addEventListener("click", event => {
  if (event.target.id === "fundoModal") fecharModal("fundoModal");
});

document.getElementById("fundoProduto").addEventListener("click", event => {
  if (event.target.id === "fundoProduto") fecharModal("fundoProduto");
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("aberto");
});

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("aberto");
  });
});

document.getElementById("whatsappFlutuante").addEventListener("click", () => {
  window.open(`https://wa.me/${WHATSAPP}`, "_blank");
});

function renderMontagem() {
  const container = document.getElementById("opcoesMontagem");

  container.innerHTML = produtos.map(p => `
    <label class="opcao-montagem">
      ${imagemHTML(p)}
      <span>
        <strong>${p.nome} — ${p.cor}</strong>
        <small>${dinheiro(p.preco)}</small>
        <select class="tamanho-montagem" data-id="${p.id}"
          aria-label="Tamanho de ${p.nome}">
          ${p.tamanhos.map(t => `<option value="${t}">${t}</option>`).join("")}
        </select>
      </span>
      <input class="montagem-check" type="checkbox" value="${p.id}"
        data-tamanho="${p.tamanhos[0]}" aria-label="Selecionar ${p.nome}">
    </label>
  `).join("");

  container.querySelectorAll(".tamanho-montagem").forEach(select => {
    select.addEventListener("change", () => {
      const check = container.querySelector(
        `.montagem-check[value="${select.dataset.id}"]`
      );
      check.dataset.tamanho = select.value;
    });
  });

  renderResumoMontagem();
}

function renderResumoMontagem() {
  const selecionados = [...document.querySelectorAll(".montagem-check:checked")];
  const resumo = document.getElementById("resumoMontagem");

  if (!selecionados.length) {
    resumo.innerHTML = `<p class="vazio">Selecione uma ou mais peças para começar.</p>`;
    document.getElementById("totalMontagem").textContent = dinheiro(0);
    return;
  }

  let total = 0;

  resumo.innerHTML = selecionados.map(check => {
    const p = buscarProduto(check.value);
    if (!p) return "";
    total += p.preco;

    return `
      <div class="resumo-item">
        <span>${p.nome} • ${p.cor} • ${check.dataset.tamanho}</span>
        <strong>${dinheiro(p.preco)}</strong>
      </div>
    `;
  }).join("");

  document.getElementById("totalMontagem").textContent = dinheiro(total);
}

document.getElementById("opcoesMontagem").addEventListener("change", event => {
  if (event.target.classList.contains("montagem-check")) {
    renderResumoMontagem();
  }
});

renderProdutos();
renderLooks();
renderMontagem();
atualizarSacola();
