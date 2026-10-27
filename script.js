
"use strict";

const WHATSAPP = "557588033637";

const produtos = [
  {id:"dubai-preta",nome:"Camisa Dubai",cor:"Preta",categoria:"camisas",preco:169.90,img:"01_1000073883_peca_01.jpg",tamanhos:["P","M","G","GG"],grupo:"dubai"},
  {id:"dubai-branca",nome:"Camisa Dubai",cor:"Branca",categoria:"camisas",preco:169.90,img:"02_1000073883_peca_02.jpg",tamanhos:["P","G","GG"],grupo:"dubai"},
  {id:"dubai-azul",nome:"Camisa Dubai",cor:"Azul",categoria:"camisas",preco:169.90,img:"03_1000073883_peca_03.jpg",tamanhos:["P","M","G","GG"],grupo:"dubai"},

  {id:"linho-branco",nome:"Short Linho",cor:"Branco",categoria:"shorts",preco:129.90,img:"01_Short_Linho_Branco.png",tamanhos:["P","G"],grupo:"linho"},
  {id:"linho-preto",nome:"Short Linho",cor:"Preto",categoria:"shorts",preco:129.90,img:"02_Short_Linho_Preto.png",tamanhos:["M","G"],grupo:"linho"},
  {id:"linho-marrom",nome:"Short Linho",cor:"Marrom",categoria:"shorts",preco:129.90,img:"03_Short_Linho_Marrom.png",tamanhos:["G"],grupo:"linho"},
  {id:"linho-bege",nome:"Short Linho",cor:"Bege",categoria:"shorts",preco:129.90,img:"04_Short_Linho_Verdeclaro.png",tamanhos:["P","M","G"],grupo:"linho"},
  {id:"linho-rosa",nome:"Short Linho",cor:"Rosa",categoria:"shorts",preco:129.90,img:"06_Short_Linho_Rosa.png",tamanhos:["P"],grupo:"linho"},

  {id:"mauricinho-azul",nome:"Short Mauricinho",cor:"Azul-água",categoria:"shorts",preco:129.90,img:"05_1000073884_individual.jpg",tamanhos:["M","G"]},

  {id:"sarja-azul",nome:"Short Sarja",cor:"Azul",categoria:"shorts",preco:159.90,img:"06_1000073885_peca_01.jpg",tamanhos:["P"]},
  {id:"sarja-branco",nome:"Short Sarja",cor:"Branco",categoria:"shorts",preco:159.90,img:"07_1000073885_peca_02.jpg",tamanhos:["G"]},
  {id:"sarja-marrom",nome:"Short Sarja",cor:"Marrom",categoria:"shorts",preco:159.90,img:"08_1000073885_peca_03.jpg",tamanhos:["M"]},
  {id:"sarja-marinho",nome:"Short Sarja",cor:"Azul-marinho",categoria:"shorts",preco:159.90,img:"09_1000073885_peca_04.jpg",tamanhos:["M"]},

  {id:"brim-preto",nome:"Bermuda Brim",cor:"Preta",categoria:"shorts",preco:159.90,img:"12_1000073887_peca_01.jpg",tamanhos:["38","40","42","44","46"]},
  {id:"brim-cinza",nome:"Bermuda Brim",cor:"Cinza",categoria:"shorts",preco:159.90,img:"13_1000073887_peca_02.jpg",tamanhos:["42","44"]},
  {id:"brim-branco",nome:"Bermuda Brim",cor:"Branca",categoria:"shorts",preco:159.90,img:"14_1000073887_peca_03.jpg",tamanhos:["42","44"]},
  {id:"brim-cinzaclaro",nome:"Bermuda Brim",cor:"Cinza claro",categoria:"shorts",preco:159.90,img:"15_1000073887_peca_04.jpg",tamanhos:["38","40"]},
  {id:"brim-bege",nome:"Bermuda Brim",cor:"Bege clarinho",categoria:"shorts",preco:159.90,img:"16_1000073887_peca_05.jpg",tamanhos:["38","40","42","44"]},

  {id:"texturizada",nome:"T-shirt Texturizada",cor:"Consultar cores",categoria:"camisetas",preco:119.90,img:"17_1000073888_peca_01.jpg",tamanhos:["M","G","GG"]},
  {id:"trico-branca",nome:"T-shirt Tricô",cor:"Branca",categoria:"camisetas",preco:119.90,img:"trico_branca_01.jpg",tamanhos:["Consultar"]},
  {id:"trico-azul",nome:"T-shirt Tricô",cor:"Azul-claro",categoria:"camisetas",preco:119.90,img:"trico_azulclaro_02.jpg",tamanhos:["Consultar"]},
  {id:"algodao",nome:"T-shirt Algodão",cor:"Consultar cores",categoria:"camisetas",preco:87.00,img:"28_1000073891_individual.jpg",tamanhos:["Consultar"]},

  {id:"regata-preta",nome:"Regata",cor:"Preta",categoria:"regatas",preco:87.00,img:"29_1000073892_peca_01.jpg",tamanhos:["Consultar"]},
  {id:"regata-branca",nome:"Regata",cor:"Branca",categoria:"regatas",preco:87.00,img:"30_1000073892_peca_02.jpg",tamanhos:["Consultar"]},
  {id:"regata-bege",nome:"Regata",cor:"Bege",categoria:"regatas",preco:87.00,img:"33_1000073931_peca_02.jpg",tamanhos:["Consultar"]},

  {id:"canelada-marrom",nome:"Camisa Canelada",cor:"Marrom",categoria:"camisetas",preco:87.00,img:"camiseta-canelada-marrom-short-sarja-branco.jpg",tamanhos:["M"]},
  {id:"canelada-branca",nome:"Camisa Canelada",cor:"Branca",categoria:"camisetas",preco:87.00,img:"camiseta-canelada-branca-marrom-short-sarja-marrom.jpg",tamanhos:["M"]},
  {id:"canelada-bege",nome:"Camisa Canelada",cor:"Bege",categoria:"camisetas",preco:87.00,img:"camiseta-canelada-bege-marinho-short-sarja-azul.jpg",tamanhos:["M"]}
];

const looks = [
  {nome:"Dubai Branca + Linho Marrom",img:"dubai_branca_short_linho_marrom_look.jpg",ids:["dubai-branca","linho-marrom"]},
  {nome:"Dubai Branca + Linho Rosa",img:"dubai_branca_short_linho_rosa_look.jpg",ids:["dubai-branca","linho-rosa"]},
  {nome:"Dubai Branca + Linho Verde-claro",img:"dubai_branca_short_linho_verde_look.jpg",ids:["dubai-branca","linho-bege"]},
  {nome:"Dubai Preta + Linho Azul-claro",img:"look_dubai_preta_linho_azulclaro_01.jpg",ids:["dubai-preta","linho-branco"]},
  {nome:"Dubai Preta + Linho Marrom",img:"look_dubai_preta_linho_marrom_02.jpg",ids:["dubai-preta","linho-marrom"]},
  {nome:"Dubai Verde + Linho Preto",img:"look_dubai_verde_linho_preto_03.jpg",ids:["dubai-azul","linho-preto"]},
  {nome:"Tricô Azul-claro + Bermuda Brim",img:"trico_azulclaro_bermuda_brim_bege_look.jpg",ids:["trico-azul","brim-bege"]},
  {nome:"Tricô Branco + Bermuda Brim",img:"trico_branca_bermuda_brim_preta_look.jpg",ids:["trico-branca","brim-preto"]},
  {nome:"Canelada Marrom + Sarja",img:"camiseta-canelada-marrom-short-sarja-branco.jpg",ids:["canelada-marrom","sarja-branco"]},
  {nome:"Texturizada + Bermuda Brim",img:"texturizada_preta_bermuda_brim_begeclarinho_look.jpg",ids:["texturizada","brim-bege"]}
];

let sacola = [];
let selecionados = new Set();
let categoriaAtual = "todos";
let avisoTimer;

const $ = id => document.getElementById(id);

const dinheiro = n =>
  n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const produtoPorId = id => produtos.find(p => p.id === id);
const urlImagem = nome => "./" + nome;

function mostrarAviso(texto) {
  const el = $("aviso");
  el.textContent = texto;
  el.classList.add("visivel");

  clearTimeout(avisoTimer);

  avisoTimer = setTimeout(() => {
    el.classList.remove("visivel");
  }, 2600);
}

function imagem(nome, alt) {
  return `<img
    src="${urlImagem(nome)}"
    alt="${alt}"
    loading="lazy"
    onerror="this.onerror=null;this.src='./produto-01.jpg';this.classList.add('imagem-fallback')">`;
}

function renderProdutos() {
  const lista = produtos.filter(p =>
    categoriaAtual === "todos" || p.categoria === categoriaAtual
  );

  $("gradeProdutos").innerHTML = lista.map(p => {
    const cores = produtos.filter(x => x.grupo && x.grupo === p.grupo);

    const paleta = cores.length > 1
      ? `<div class="paleta" aria-label="Escolher cor">
          ${cores.map(c => `
            <button
              class="cor-botao ${c.id === p.id ? "selecionada" : ""}"
              style="background:${corCSS(c.cor)}"
              title="${c.cor}"
              aria-label="${c.cor}"
              data-cor="${c.id}">
            </button>
          `).join("")}
        </div>`
      : "";

    return `
      <article class="produto-card">
        <div class="produto-imagem">
          ${imagem(p.img, p.nome + " " + p.cor)}
        </div>

        <div class="produto-info">
          <h3>${p.nome}</h3>
          <div class="produto-cor">${p.cor}</div>

          ${paleta}

          <div class="preco">${dinheiro(p.preco)}</div>

          <div class="produto-acoes">
            <button class="principal" data-adicionar="${p.id}">
              ADICIONAR À SACOLA
            </button>

            <button data-montar="${p.id}">
              MONTAR LOOK COM ESTA PEÇA
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function corCSS(cor) {
  const mapa = {
    "Preta": "#151515",
    "Preto": "#151515",
    "Branca": "#f2eee7",
    "Branco": "#f2eee7",
    "Azul": "#315b86",
    "Azul-marinho": "#172c49",
    "Azul-claro": "#a8d4eb",
    "Azul-água": "#85d4cf",
    "Marrom": "#79523a",
    "Bege": "#d8c49c",
    "Bege clarinho": "#e4d6b9",
    "Cinza": "#888888",
    "Cinza claro": "#c5c5c5",
    "Rosa": "#e6a4b5",
    "Verde": "#657c52"
  };

  return mapa[cor] || "#c99b58";
}

function renderLooks() {
  $("gradeLooks").innerHTML = looks.map((look, i) => {
    const subtotal = look.ids.reduce(
      (s, id) => s + (produtoPorId(id)?.preco || 0),
      0
    );

    const total = subtotal * 0.95;

    return `
      <article class="look-card">
        <div class="look-imagem">
          ${imagem(look.img, look.nome)}
        </div>

        <div class="look-info">
          <h3>${look.nome}</h3>
          <p>Look completo com 5% de desconto.</p>

          <div class="preco">
            ${dinheiro(total)}
            <small style="color:#aaa;text-decoration:line-through">
              ${dinheiro(subtotal)}
            </small>
          </div>

          <button data-look="${i}">
            ADICIONAR LOOK À SACOLA
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderMontagem() {
  $("opcoesMontagem").innerHTML = produtos.map(p => `
    <label class="opcao">
      <input
        type="checkbox"
        data-selecionar="${p.id}"
        ${selecionados.has(p.id) ? "checked" : ""}>

      ${imagem(p.img, p.nome)}

      <span>
        <strong>${p.nome}</strong>
        <small>${p.cor}</small>
        <br>
        <small>${dinheiro(p.preco)}</small>
      </span>
    </label>
  `).join("");

  atualizarResumoMontagem();
}

function atualizarResumoMontagem() {
  const itens = [...selecionados]
    .map(produtoPorId)
    .filter(Boolean);

  $("resumoMontagem").innerHTML = itens.length
    ? itens.map(p => `
        <div class="resumo-linha">
          <span>${p.nome} (${p.cor})</span>
          <strong>${dinheiro(p.preco)}</strong>
        </div>
      `).join("")
    : '<p class="vazio">Selecione uma ou mais peças para começar.</p>';

  $("totalMontagem").textContent = dinheiro(
    itens.reduce((s, p) => s + p.preco, 0)
  );
}

function adicionarItem(p, tamanho = "A confirmar", desconto = 0) {
  if (!p) return;

  sacola.push({
    id: p.id,
    nome: p.nome,
    cor: p.cor,
    tamanho,
    preco: p.preco * (1 - desconto),
    desconto
  });

  atualizarSacola();
}

function adicionarProduto(id) {
  const p = produtoPorId(id);
  if (!p) return;

  adicionarItem(p);
  mostrarAviso(p.nome + " adicionado à sacola!");
}

function adicionarLook(index) {
  const look = looks[index];
  if (!look) return;

  const itens = look.ids.map(produtoPorId).filter(Boolean);

  if (!itens.length) {
    return mostrarAviso("Não foi possível carregar esse look.");
  }

  itens.forEach(p => adicionarItem(p, "A confirmar", 0.05));

  mostrarAviso("Look adicionado com 5% de desconto!");
}

function atualizarSacola() {
  $("contadorSacola").textContent = sacola.length;

  $("totalSacola").textContent = dinheiro(
    sacola.reduce((s, p) => s + p.preco, 0)
  );

  $("itensSacola").innerHTML = sacola.length
    ? sacola.map((p, i) => `
        <div class="item-sacola">
          <div>
            <strong>${p.nome}</strong>
            <br>
            <small>${p.cor} • Tamanho: ${p.tamanho}</small>
            <br>
            <strong>${dinheiro(p.preco)}</strong>
            ${p.desconto
              ? '<small> (desconto de 5%)</small>'
              : ""}
          </div>

          <button data-remover="${i}">Remover</button>
        </div>
      `).join("")
    : '<p class="vazio">Sua sacola está vazia.</p>';
}

function abrirSacola() {
  $("fundoModal").classList.add("aberto");
  document.body.style.overflow = "hidden";
}

function fecharSacola() {
  $("fundoModal").classList.remove("aberto");
  document.body.style.overflow = "";
}

function enviarWhatsApp() {
  if (!sacola.length) {
    return mostrarAviso("Adicione uma peça antes de finalizar.");
  }

  const linhas = sacola.map((p, i) =>
    `${i + 1}. ${p.nome} — ${p.cor} — tamanho: ${p.tamanho} — ${dinheiro(p.preco)}`
  );

  const total = sacola.reduce((s, p) => s + p.preco, 0);

  const mensagem =
    `Olá! Quero fazer este pedido na Guerreiro Story:\n\n` +
    `${linhas.join("\n")}\n\n` +
    `Total: ${dinheiro(total)}\n\n` +
    `Por favor, confirmem os tamanhos e a disponibilidade.`;

  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
    "_blank",
    "noopener"
  );
}

/* ABRIR O CATÁLOGO */

const botaoVerMais = $("verMais");

if (botaoVerMais) {
  botaoVerMais.addEventListener("click", function (e) {
    e.preventDefault();

    const catalogo = $("produtos");
    catalogo.classList.add("catalogo-visivel");

    botaoVerMais.textContent = "CATÁLOGO ABERTO";

    catalogo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* TROCAR A COR DA PEÇA DE DESTAQUE */

document.querySelectorAll("[data-capa]").forEach(botao => {
  botao.addEventListener("click", function () {
    const foto = $("capaDestaque");
    if (!foto) return;

    foto.src = "./" + botao.dataset.capa;

    const nomes = {
      "01_1000073883_peca_01.jpg": "Camisa Dubai preta",
      "02_1000073883_peca_02.jpg": "Camisa Dubai branca",
      "03_1000073883_peca_03.jpg": "Camisa Dubai azul"
    };

    foto.alt = (nomes[botao.dataset.capa] || "Peça da coleção")
      + " da Guerreiro Story";

    document.querySelectorAll("[data-capa]").forEach(b => {
      b.classList.toggle("selecionada", b === botao);
    });
  });
});

/* FILTROS, SACOLA E LOOKS */

document.addEventListener("click", e => {
  const filtro = e.target.closest("[data-categoria]");

  if (filtro) {
    categoriaAtual = filtro.dataset.categoria;

    document.querySelectorAll(".filtro").forEach(b => {
      b.classList.toggle("ativo", b === filtro);
    });

    renderProdutos();
    return;
  }

  const cor = e.target.closest("[data-cor]");

  if (cor) {
    const p = produtoPorId(cor.dataset.cor);

    if (p) {
      categoriaAtual = "todos";

      document.querySelectorAll(".filtro").forEach(b => {
        b.classList.toggle("ativo", b.dataset.categoria === "todos");
      });

      renderProdutos();
      mostrarAviso("Cor selecionada: " + p.cor);
    }

    return;
  }

  const add = e.target.closest("[data-adicionar]");

  if (add) {
    return adicionarProduto(add.dataset.adicionar);
  }

  const montar = e.target.closest("[data-montar]");

  if (montar) {
    selecionados.add(montar.dataset.montar);
    renderMontagem();
    location.hash = "montar";
    return;
  }

  const look = e.target.closest("[data-look]");

  if (look) {
    return adicionarLook(Number(look.dataset.look));
  }

  const remover = e.target.closest("[data-remover]");

  if (remover) {
    sacola.splice(Number(remover.dataset.remover), 1);
    atualizarSacola();
  }
});

document.addEventListener("change", e => {
  if (!e.target.matches("[data-selecionar]")) return;

  const id = e.target.dataset.selecionar;

  if (e.target.checked) {
    selecionados.add(id);
  } else {
    selecionados.delete(id);
  }

  atualizarResumoMontagem();
});

/* MENU */

$("menuBtn").addEventListener("click", () => {
  $("menu").classList.toggle("aberto");
});

$("menu").addEventListener("click", e => {
  if (e.target.closest("a")) {
    $("menu").classList.remove("aberto");
  }
});

/* SACOLA */

$("abrirSacola").addEventListener("click", abrirSacola);
$("fecharSacola").addEventListener("click", fecharSacola);
$("continuarComprando").addEventListener("click", fecharSacola);

$("fundoModal").addEventListener("click", e => {
  if (e.target === $("fundoModal")) {
    fecharSacola();
  }
});

$("enviarPedido").addEventListener("click", enviarWhatsApp);

/* ADICIONAR LOOK MONTADO À SACOLA */

$("adicionarLook").addEventListener("click", () => {
  if (!selecionados.size) {
    return mostrarAviso("Selecione pelo menos uma peça.");
  }

  [...selecionados].forEach(id => {
    adicionarItem(produtoPorId(id));
  });

  selecionados.clear();
  renderMontagem();
  atualizarSacola();

  mostrarAviso("Seu look foi adicionado à sacola!");
});

/* WHATSAPP FLUTUANTE */

$("whatsappFlutuante").addEventListener("click", () => {
  const mensagem =
    "Olá! Vim pelo site da Guerreiro Story e gostaria de conhecer os produtos.";

  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
    "_blank",
    "noopener"
  );
});

/* INICIALIZAR A LOJA */

renderProdutos();
renderLooks();
renderMontagem();
atualizarSacola();
      
