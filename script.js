const WHATSAPP = "557588033637";

// Confira os nomes dos arquivos de imagem com os que estão no GitHub.
const produtos = [
  {
    id: 1,
    nome: "Camisa Dubai",
    preco: 169.90,
    imagem: "01_1000073883_peca_01.jpg",
    cores: {
      "Branca": ["P", "G", "GG"],
      "Preta": ["P", "M", "G", "GG"],
      "Verde": ["P", "G", "GG"]
    }
  },
  {
    id: 2,
    nome: "Short Linho",
    preco: 129.90,
    imagem: "produto-02.jpg",
    cores: {
      "Branco": ["P", "G"],
      "Preto": ["M", "G"],
      "Marrom": ["G"],
      "Rosa": ["P"],
      "Bege": ["P", "M", "G"]
    }
  },
  {
    id: 3,
    nome: "T-shirt Texturizada",
    preco: 119.90,
    imagem: "produto-03.jpg",
    cores: {
      "Disponível conforme estoque": ["M", "G", "GG"]
    }
  },
  {
    id: 4,
    nome: "Bermuda Brim",
    preco: 159.90,
    imagem: "produto-04.jpg",
    cores: {
      "Preta": ["38", "40", "42", "44", "46"],
      "Cinza": ["42", "44"],
      "Branca": ["42", "44"],
      "Cinza claro": ["38", "40"],
      "Bege clarinho": ["38", "40", "42", "44"]
    }
  }
];

const looksProntos = [
  {
    nome: "Look Dubai",
    ids: [1, 2]
  },
  {
    nome: "Look Casual",
    ids: [1, 3]
  },
  {
    nome: "Look Urbano",
    ids: [3, 4]
  }
];

const catalogo = document.querySelector("#catalogo");
const listaLooks = document.querySelector("#lista-looks");
const pecasMontar = document.querySelector("#pecas-para-montar");

const sacola = [];
const selecaoLook = [];

function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function criarSeletores(produto) {
  const opcoesCor = Object.keys(produto.cores)
    .map(cor => `<option value="${cor}">${cor}</option>`)
    .join("");

  const primeiraCor = Object.keys(produto.cores)[0];
  const opcoesTamanho = produto.cores[primeiraCor]
    .map(tamanho => `<option value="${tamanho}">${tamanho}</option>`)
    .join("");

  return `
    <label>
      Cor
      <select class="seletor-cor">${opcoesCor}</select>
    </label>
    <label>
      Tamanho
      <select class="seletor-tamanho">${opcoesTamanho}</select>
    </label>
  `;
}

function criarCard(produto, modo = "catalogo") {
  const card = document.createElement("article");
  card.className = "produto";

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
    <div class="produto-conteudo">
      <h3>${produto.nome}</h3>
      <p class="preco">${dinheiro(produto.preco)}</p>
      ${criarSeletores(produto)}
      <button class="botao">
        ${modo === "montar" ? "SELECIONAR PEÇA" : "ADICIONAR À SACOLA"}
      </button>
    </div>
  `;

  const imagem = card.querySelector("img");

  imagem.addEventListener("error", () => {
    imagem.alt = `Imagem não encontrada: ${produto.imagem}`;
  }, { once: true });

  const seletorCor = card.querySelector(".seletor-cor");
  const seletorTamanho = card.querySelector(".seletor-tamanho");

  function atualizarTamanhos() {
    const tamanhos = produto.cores[seletorCor.value];

    seletorTamanho.innerHTML = tamanhos
      .map(tamanho => `<option value="${tamanho}">${tamanho}</option>`)
      .join("");
  }

  seletorCor.addEventListener("change", atualizarTamanhos);

  card.querySelector("button").addEventListener("click", () => {
    const escolha = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      cor: seletorCor.value,
      tamanho: seletorTamanho.value
    };

    if (modo === "montar") {
      const existente = selecaoLook.findIndex(
        item => item.id === escolha.id
      );

      if (existente >= 0) {
        selecaoLook.splice(existente, 1);
      } else {
        selecaoLook.push(escolha);
      }

      atualizarResumoLook();
    } else {
      sacola.push(escolha);
      atualizarSacola();
    }
  });

  return card;
}

function renderizarProdutos() {
  produtos.forEach(produto => {
    catalogo.appendChild(criarCard(produto, "catalogo"));
    pecasMontar.appendChild(criarCard(produto, "montar"));
  });
}

function renderizarLooks() {
  looksProntos.forEach(look => {
    const itens = look.ids
      .map(id => produtos.find(produto => produto.id === id))
      .filter(Boolean);

    const totalNormal = itens.reduce((total, item) => total + item.preco, 0);
    const totalDesconto = totalNormal * 0.95;

    const card = document.createElement("article");
    card.className = "produto";

    card.innerHTML = `
      <div class="produto-conteudo">
        <p class="etiqueta">LOOK PRONTO • 5% OFF</p>
        <h3>${look.nome}</h3>
        <p>${itens.map(item => item.nome).join(" + ")}</p>
        <p class="preco">${dinheiro(totalDesconto)}</p>
        <button class="botao">ADICIONAR LOOK À SACOLA</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      const itensLook = itens.map(item => ({
        id: item.id,
        nome: item.nome,
        preco: item.preco * 0.95,
        cor: "Selecionar no atendimento",
        tamanho: "Selecionar no atendimento",
        look: look.nome
      }));

      sacola.push(...itensLook);
      atualizarSacola();
    });

    listaLooks.appendChild(card);
  });
}

function atualizarResumoLook() {
  const resumo = document.querySelector("#resumo-selecao");
  const total = selecaoLook.reduce((soma, item) => soma + item.preco, 0);

  resumo.innerHTML = selecaoLook.length
    ? selecaoLook.map(item =>
        `<div>${item.nome} — ${item.cor}, ${item.tamanho}</div>`
      ).join("")
    : "Nenhuma peça selecionada.";

  document.querySelector("#total-look").textContent = dinheiro(total);
}

function atualizarSacola() {
  const container = document.querySelector("#itens-sacola");

  container.innerHTML = "";

  sacola.forEach((item, indice) => {
    const linha = document.createElement("div");
    linha.className = "item-sacola";

    linha.innerHTML = `
      <strong>${item.nome}</strong><br>
      ${item.cor} • ${item.tamanho}<br>
      ${dinheiro(item.preco)}
      <button data-indice="${indice}">Remover</button>
    `;

    linha.querySelector("button").addEventListener("click", () => {
      sacola.splice(indice, 1);
      atualizarSacola();
    });

    container.appendChild(linha);
  });

  const total = sacola.reduce((soma, item) => soma + item.preco, 0);

  document.querySelector("#total-sacola").textContent = dinheiro(total);
  document.querySelector("#quantidade-sacola").textContent = sacola.length;
}

document.querySelector("#adicionar-look").addEventListener("click", () => {
  if (!selecaoLook.length) {
    alert("Selecione pelo menos uma peça para montar seu look.");
    return;
  }

  sacola.push(...selecaoLook.splice(0));
  atualizarResumoLook();
  atualizarSacola();
  alert("Look adicionado à sacola!");
});

document.querySelector("#ver-mais").addEventListener("click", () => {
  document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#abrir-sacola").addEventListener("click", () => {
  document.querySelector("#painel-sacola").classList.add("aberta");
});

document.querySelector("#fechar-sacola").addEventListener("click", () => {
  document.querySelector("#painel-sacola").classList.remove("aberta");
});

document.querySelector("#enviar-pedido").addEventListener("click", () => {
  if (!sacola.length) {
    alert("Sua sacola está vazia.");
    return;
  }

  const total = sacola.reduce((soma, item) => soma + item.preco, 0);

  const linhas = sacola.map((item, indice) =>
    `${indice + 1}. ${item.nome} | Cor: ${item.cor} | Tamanho: ${item.tamanho} | ${dinheiro(item.preco)}`
  );

  const mensagem = [
    "Olá! Quero fazer um pedido na Guerreiro Store.",
    "",
    ...linhas,
    "",
    `Total: ${dinheiro(total)}`,
    "",
    "Gostaria de confirmar a disponibilidade das peças."
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});

document.querySelectorAll(".cores button").forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelector("#cor-escolhida").textContent =
      `Você selecionou a cor ${botao.dataset.cor}.`;
  });
});

renderizarProdutos();
renderizarLooks();
atualizarSacola();
