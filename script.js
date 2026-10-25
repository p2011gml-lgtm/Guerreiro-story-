// ============================================
// GUERREIRO STORY — CATÁLOGO DE PRODUTOS
// ============================================

const products = [
  // CAMISAS DUBAI — CORES PRESERVADAS
  {
    id: 1,
    name: "Camisa Dubai",
    category: "Camisas",
    color: "Preta",
    price: 169.90,
    sizes: "P, M, G, GG",
    img: "produto-02.jpg"
  },
  {
    id: 2,
    name: "Camisa Dubai",
    category: "Camisas",
    color: "Branca",
    price: 169.90,
    sizes: "P, G, GG",
    img: "produto-01.jpg"
  },
  {
    id: 3,
    name: "Camisa Dubai",
    category: "Camisas",
    color: "Verde",
    price: 169.90,
    sizes: "P, G, GG",
    img: "produto-03.jpg"
  },

  // SHORT LINHO
  {
    id: 4,
    name: "Short Linho",
    category: "Shorts",
    color: "Branco",
    price: 129.90,
    sizes: "P, G",
    img: "produto-04.jpg"
  },
  {
    id: 5,
    name: "Short Linho",
    category: "Shorts",
    color: "Preto",
    price: 129.90,
    sizes: "M, G",
    img: "produto-05.jpg"
  },
  {
    id: 6,
    name: "Short Linho",
    category: "Shorts",
    color: "Marrom",
    price: 129.90,
    sizes: "G",
    img: "produto-06.jpg"
  },
  {
    id: 7,
    name: "Short Linho",
    category: "Shorts",
    color: "Rosa",
    price: 129.90,
    sizes: "P",
    img: "produto-07.jpg"
  },
  {
    id: 8,
    name: "Short Linho",
    category: "Shorts",
    color: "Bege",
    price: 129.90,
    sizes: "P, M, G",
    img: "produto-08.jpg"
  },

  // SHORT MAURICINHO
  {
    id: 9,
    name: "Short Mauricinho de Algodão",
    category: "Shorts",
    color: "Azul-água",
    price: 129.90,
    sizes: "M, G",
    img: "produto-09.jpg"
  },

  // SHORT SARJA
  {
    id: 10,
    name: "Short Sarja",
    category: "Shorts",
    color: "Azul",
    price: 159.90,
    sizes: "P",
    img: "produto-10.jpg"
  },
  {
    id: 11,
    name: "Short Sarja",
    category: "Shorts",
    color: "Branco",
    price: 159.90,
    sizes: "G",
    img: "produto-11.jpg"
  },
  {
    id: 12,
    name: "Short Sarja",
    category: "Shorts",
    color: "Marrom",
    price: 159.90,
    sizes: "M",
    img: "produto-12.jpg"
  },
  {
    id: 13,
    name: "Short Sarja",
    category: "Shorts",
    color: "Azul-escuro",
    price: 159.90,
    sizes: "M",
    img: "produto-13.jpg"
  },

  // BERMUDA BRIM
  {
    id: 14,
    name: "Bermuda Brim",
    category: "Bermudas",
    color: "Preta",
    price: 159.90,
    sizes: "38, 40, 42, 44, 46",
    img: "produto-14.jpg"
  },
  {
    id: 15,
    name: "Bermuda Brim",
    category: "Bermudas",
    color: "Cinza",
    price: 159.90,
    sizes: "42, 44",
    img: "produto-15.jpg"
  },
  {
    id: 16,
    name: "Bermuda Brim",
    category: "Bermudas",
    color: "Branca",
    price: 159.90,
    sizes: "42, 44",
    img: "produto-16.jpg"
  },
  {
    id: 17,
    name: "Bermuda Brim",
    category: "Bermudas",
    color: "Cinza-claro",
    price: 159.90,
    sizes: "38, 40",
    img: "produto-17.jpg"
  },
  {
    id: 18,
    name: "Bermuda Brim",
    category: "Bermudas",
    color: "Bege-claro",
    price: 159.90,
    sizes: "38, 40, 42, 44",
    img: "produto-18.jpg"
  },

  // T-SHIRT TEXTURIZADA
  {
    id: 19,
    name: "T-shirt Texturizada",
    category: "T-shirts",
    color: "Preta",
    price: 119.90,
    sizes: "M, G, GG",
    img: "produto-19.jpg"
  },

  // T-SHIRT TRICÔ
  // Imagens trocadas conforme a correção solicitada.
  {
    id: 20,
    name: "T-shirt Tricô",
    category: "T-shirts",
    color: "Branca",
    price: 119.90,
    sizes: "Consultar disponibilidade",
    img: "produto-23.jpg"
  },
  {
    id: 23,
    name: "T-shirt Tricô",
    category: "T-shirts",
    color: "Azul-claro",
    price: 119.90,
    sizes: "Consultar disponibilidade",
    img: "produto-20.jpg"
  },

  // T-SHIRT ALGODÃO
  {
    id: 21,
    name: "T-shirt Algodão",
    category: "T-shirts",
    color: "Bege",
    price: 69.90,
    sizes: "P, M, G, GG",
    img: "produto-21.jpg"
  },
  {
    id: 24,
    name: "T-shirt Algodão",
    category: "T-shirts",
    color: "Branca",
    price: 69.90,
    sizes: "P, M, G, GG",
    img: "produto-24.jpg"
  },
  {
    id: 25,
    name: "T-shirt Algodão",
    category: "T-shirts",
    color: "Preta",
    price: 69.90,
    sizes: "P, M, G, GG",
    img: "produto-22.jpg"
  },
  {
    id: 26,
    name: "T-shirt Algodão",
    category: "T-shirts",
    color: "Marrom-escuro",
    price: 69.90,
    sizes: "P, M, G, GG",
    img: "produto-26.jpg"
  },

  // REGATA PRETA — CATEGORIA SEPARADA
  {
    id: 22,
    name: "Regata",
    category: "Regatas",
    color: "Preta",
    price: 87.00,
    sizes: "Consultar disponibilidade",
    img: "produto-25.jpg"
  }
];

// WHATSAPP OFICIAL
const whatsapp = "557588033637";

const $ = id => document.getElementById(id);

const money = value =>
  Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

let cart = [];
let activeFilter = "Todos";
let selectedVariant = null;
let builderSelection = new Set();
let toastTimer;

// PROTEÇÃO DE TEXTO
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// AVISOS
function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// AGRUPAR VARIAÇÕES
function productGroups() {
  const groups = new Map();

  products.forEach(product => {
    const key = `${product.category}::${product.name}`;

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(product);
  });

  return [...groups.values()];
}

// CATÁLOGO
function renderProducts() {
  const grid = $("productGrid");
  if (!grid) return;

  const groups = productGroups().filter(group =>
    activeFilter === "Todos" ||
    group[0].category === activeFilter
  );

  grid.innerHTML = groups.map(group => {
    const product = group[0];
    const colors = group.map(item => item.color);

    return `
      <article class="product-card">
        <div class="product-image">
          <img
            src="${escapeHTML(product.img)}"
            alt="${escapeHTML(product.name)} ${escapeHTML(product.color)}"
            loading="lazy"
          >

          <span class="product-tag">
            ${group.length === 1
              ? "1 OPÇÃO"
              : `${group.length} CORES`}
          </span>
        </div>

        <div class="product-info">
          <span class="product-category">
            ${escapeHTML(product.category)}
          </span>

          <h3>${escapeHTML(product.name)}</h3>

          <p class="product-color">
            ${colors.map(escapeHTML).join(" · ")}
          </p>

          <p class="product-sizes">
            Consulte os tamanhos disponíveis
          </p>

          <div class="product-price">
            ${money(product.price)}
          </div>

          <button
            class="btn btn-outline full"
            data-detail="${product.id}"
            type="button"
          >
            VER MAIS +
          </button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-detail]").forEach(button => {
    button.addEventListener("click", () => {
      openProduct(Number(button.dataset.detail));
    });
  });
}

// FILTROS
function setFilter(filter) {
  activeFilter = filter;

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === filter
    );
  });

  renderProducts();
}

const filterContainer = $("filters");

if (filterContainer) {
  filterContainer.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter);
    });
  });
}

// TAMANHOS
function getAvailableSizes(product) {
  if (/consultar/i.test(product.sizes)) {
    return [];
  }

  return product.sizes
    .split(",")
    .map(size => size.trim())
    .filter(Boolean);
}

// DETALHES DO PRODUTO
function openProduct(id) {
  selectedVariant = products.find(product => product.id === id);
  if (!selectedVariant) return;

  $("detailCategory").textContent =
    selectedVariant.category.toUpperCase();

  $("detailName").textContent = selectedVariant.name;

  renderProductOptions();

  $("productModal").classList.add("open");
  $("productModal").setAttribute("aria-hidden", "false");

  document.body.classList.add("locked");
}

function renderProductOptions() {
  if (!selectedVariant) return;

  const variants = products.filter(product =>
    product.name === selectedVariant.name &&
    product.category === selectedVariant.category
  );

  $("detailImage").src = selectedVariant.img;

  $("detailImage").alt =
    `${selectedVariant.name} - ${selectedVariant.color}`;

  $("detailPrice").textContent = money(selectedVariant.price);

  $("selectedColorLabel").textContent = selectedVariant.color;

  $("colorOptions").innerHTML = variants.map(variant => `
    <button
      type="button"
      class="color-option ${
        variant.id === selectedVariant.id ? "active" : ""
      }"
      data-color-id="${variant.id}"
    >
      ${escapeHTML(variant.color)}
    </button>
  `).join("");

  $("colorOptions")
    .querySelectorAll("[data-color-id]")
    .forEach(button => {
      button.addEventListener("click", () => {
        selectedVariant = products.find(product =>
          product.id === Number(button.dataset.colorId)
        );

        renderProductOptions();
      });
    });

  const sizes = getAvailableSizes(selectedVariant);

  $("detailSize").innerHTML = sizes.length
    ? '<option value="">Selecione o tamanho</option>' +
      sizes.map(size => `
        <option value="${escapeHTML(size)}">
          ${escapeHTML(size)}
        </option>
      `).join("")
    : '<option value="">Tamanho a confirmar pelo WhatsApp</option>';
}

function closeProduct() {
  const modal = $("productModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (!$("cartDrawer").classList.contains("open")) {
    document.body.classList.remove("locked");
  }
}

// CARRINHO
function addProductToCart(product, size) {
  cart.push({
    key: `${Date.now()}-${Math.random()}`,
    productId: product.id,
    name: product.name,
    color: product.color,
    size,
    price: product.price,
    img: product.img,
    quantity: 1
  });

  renderCart();
}

function addDetailToCart() {
  if (!selectedVariant) return;

  const sizes = getAvailableSizes(selectedVariant);
  const size = $("detailSize").value;

  if (sizes.length && !size) {
    showToast("Selecione um tamanho disponível.");
    return;
  }

  addProductToCart(
    selectedVariant,
    size || "A confirmar"
  );

  closeProduct();
  showToast("Produto adicionado à sacola!");
}

// LOOKS PRONTOS COM 5% DE DESCONTO
const looks = [
  { name: "Clássico urbano", items: [1, 4] },
  { name: "Minimalista claro", items: [2, 8] },
  { name: "Contraste moderno", items: [1, 9] },
  { name: "Casual elegante", items: [19, 14] },
  { name: "Neutro sofisticado", items: [19, 18] },
  { name: "Essencial do dia", items: [21, 10] }
];

function renderLooks() {
  const grid = $("lookGrid");
  if (!grid) return;

  grid.innerHTML = looks.map((look, index) => {
    const items = look.items
      .map(id => products.find(product => product.id === id))
      .filter(Boolean);

    const total = items.reduce(
      (sum, product) => sum + product.price,
      0
    );

    const discounted = total * 0.95;

    return `
      <article class="look-card">
        <div class="look-images">
          ${items.map(product => `
            <img
              src="${escapeHTML(product.img)}"
              alt="${escapeHTML(product.name)}"
              loading="lazy"
            >
          `).join("")}
        </div>

        <span class="discount">5% DE DESCONTO</span>

        <h3>${escapeHTML(look.name)}</h3>

        <p>
          ${items.map(product => escapeHTML(product.name)).join(" + ")}
        </p>

        <div class="look-price">
          <strong>${money(discounted)}</strong>
          <span class="old-price">${money(total)}</span>
        </div>

        <button
          class="btn btn-gold"
          data-look="${index}"
          type="button"
        >
          ESCOLHER LOOK ↗
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-look]").forEach(button => {
    button.addEventListener("click", () => {
      addReadyLook(Number(button.dataset.look));
    });
  });
}

function addReadyLook(index) {
  const look = looks[index];
  if (!look) return;

  const items = look.items
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  const total = items.reduce(
    (sum, product) => sum + product.price,
    0
  );

  if (!total) return;

  const discounted = Number((total * 0.95).toFixed(2));
  const factor = discounted / total;
  const lookKey = `look-${Date.now()}`;

  let subtotal = 0;

  items.forEach((product, index) => {
    let price = Number((product.price * factor).toFixed(2));

    if (index === items.length - 1) {
      price = Number((discounted - subtotal).toFixed(2));
    } else {
      subtotal += price;
    }

    cart.push({
      key: `${lookKey}-${product.id}`,
      productId: product.id,
      name: product.name,
      color: product.color,
      size: "A confirmar",
      price,
      img: product.img,
      quantity: 1,
      lookName: look.name
    });
  });

  renderCart();
  openCart();

  showToast("Look adicionado! Confirme os tamanhos pelo WhatsApp.");
}

// MONTAGEM PERSONALIZADA
function renderBuilder() {
  const list = $("builderList");
  if (!list) return;

  list.innerHTML = products.map(product => `
    <label class="builder-item">
      <input
        type="checkbox"
        value="${product.id}"
        ${builderSelection.has(product.id) ? "checked" : ""}
      >

      <img
        src="${escapeHTML(product.img)}"
        alt="${escapeHTML(product.name)}"
        loading="lazy"
      >

      <span class="builder-item-copy">
        <strong>
          ${escapeHTML(product.name)} — ${escapeHTML(product.color)}
        </strong>

        <span>
          ${escapeHTML(product.category)} ·
          ${escapeHTML(product.sizes)}
        </span>
      </span>

      <span class="builder-item-price">
        ${money(product.price)}
      </span>
    </label>
  `).join("");

  list.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener("change", () => {
      const id = Number(input.value);

      if (input.checked) {
        builderSelection.add(id);
      } else {
        builderSelection.delete(id);
      }

      updateBuilderTotal();
    });
  });

  updateBuilderTotal();
}

function updateBuilderTotal() {
  const chosen = products.filter(product =>
    builderSelection.has(product.id)
  );

  const total = chosen.reduce(
    (sum, product) => sum + product.price,
    0
  );

  if ($("builderCount")) {
    $("builderCount").textContent = chosen.length;
  }

  if ($("builderTotal")) {
    $("builderTotal").textContent = money(total);
  }
}

function addCustomLook() {
  const chosen = products.filter(product =>
    builderSelection.has(product.id)
  );

  if (!chosen.length) {
    showToast("Selecione pelo menos uma peça.");
    return;
  }

  chosen.forEach(product => {
    cart.push({
      key: `custom-${Date.now()}-${product.id}-${Math.random()}`,
      productId: product.id,
      name: product.name,
      color: product.color,
      size: "A confirmar",
      price: product.price,
      img: product.img,
      quantity: 1,
      lookName: "Look personalizado"
    });
  });

  renderCart();
  openCart();

  showToast("Seu look foi adicionado à sacola!");
}

// TOTAL DA SACOLA
function cartTotalValue() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

// ATUALIZAR SACOLA
function renderCart() {
  const countElement = $("cartCount");
  const totalElement = $("cartTotal");
  const itemsElement = $("cartItems");

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (countElement) {
    countElement.textContent = count;
  }

  if (totalElement) {
    totalElement.textContent = money(cartTotalValue());
  }

  if (!itemsElement) return;

  if (!cart.length) {
    itemsElement.innerHTML = `
      <p class="empty-cart">
        Sua sacola está vazia. Escolha suas peças favoritas!
      </p>
    `;
    return;
  }

  itemsElement.innerHTML = cart.map(item => `
    <article class="cart-item">
      <img
        src="${escapeHTML(item.img)}"
        alt="${escapeHTML(item.name)}"
      >

      <div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>Cor: ${escapeHTML(item.color)}</p>
        <p>Tamanho: ${escapeHTML(item.size)}</p>

        ${item.lookName
          ? `<p>${escapeHTML(item.lookName)}</p>`
          : ""}

        <strong>
          ${money(item.price * item.quantity)}
        </strong>
      </div>

      <button
        class="remove-item"
        data-remove="${escapeHTML(item.key)}"
        type="button"
      >
        Remover
      </button>
    </article>
  `).join("");

  itemsElement.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      cart = cart.filter(
        item => item.key !== button.dataset.remove
      );

      renderCart();
      showToast("Item removido da sacola.");
    });
  });
}

// ABRIR E FECHAR SACOLA
function openCart() {
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("open");
  document.body.classList.add("locked");
}

function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("open");

  if (!$("productModal").classList.contains("open")) {
    document.body.classList.remove("locked");
  }
}

// ENVIAR PEDIDO PELO WHATSAPP
function sendOrder() {
  if (!cart.length) {
    showToast("Sua sacola está vazia.");
    return;
  }

  const customer = $("customerName").value.trim();
  const note = $("customerNote").value.trim();

  const itemLines = cart.map((item, index) =>
    `${index + 1}. ${item.name}\n` +
    `Cor: ${item.color}\n` +
    `Tamanho: ${item.size}\n` +
    `Quantidade: ${item.quantity}\n` +
    `Valor: ${money(item.price * item.quantity)}` +
    (item.lookName ? `\nLook: ${item.lookName}` : "")
  );

  const message = [
    "Olá! Quero fazer um pedido na Guerreiro Story.",
    customer ? `Nome: ${customer}` : "",
    "",
    "MEU PEDIDO:",
    ...itemLines,
    "",
    `TOTAL DO PEDIDO: ${money(cartTotalValue())}`,
    note ? `Observações: ${note}` : "",
    "",
    "Por favor, confirmem a disponibilidade das peças e os tamanhos."
  ].filter(Boolean).join("\n");

  const url =
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// MENU PARA CELULAR
if ($("menuBtn") && $("nav")) {
  $("menuBtn").addEventListener("click", () => {
    const isOpen = $("nav").classList.toggle("open");

    $("menuBtn").setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  $("nav").querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      $("nav").classList.remove("open");
      $("menuBtn").setAttribute("aria-expanded", "false");
    });
  });
}

// MODAL DO PRODUTO
if ($("closeProduct")) {
  $("closeProduct").addEventListener("click", closeProduct);
}

if ($("productModal")) {
  $("productModal").addEventListener("click", event => {
    if (event.target === $("productModal")) {
      closeProduct();
    }
  });
}

if ($("addDetail")) {
  $("addDetail").addEventListener("click", addDetailToCart);
}

// SACOLA
if ($("openCart")) {
  $("openCart").addEventListener("click", openCart);
                         }   }
