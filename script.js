/* ==========================================
   GUERREIRO STORY — SCRIPT COMPLETO
   Catálogo, looks, sacola e WhatsApp
========================================== */

const products = [
  { id: 1, name: "Camisa Dubai", category: "Camisas", color: "Preta", price: 169.90, sizes: "P, M, G, GG", img: "produto-02.jpg" },
  { id: 2, name: "Camisa Dubai", category: "Camisas", color: "Branca", price: 169.90, sizes: "P, G, GG", img: "produto-01.jpg" },
  { id: 3, name: "Camisa Dubai", category: "Camisas", color: "Verde", price: 169.90, sizes: "P, G, GG", img: "produto-03.jpg" },

  { id: 4, name: "Short Linho", category: "Shorts", color: "Branco", price: 129.90, sizes: "P, G", img: "produto-04.jpg" },
  { id: 5, name: "Short Linho", category: "Shorts", color: "Preto", price: 129.90, sizes: "M, G", img: "produto-05.jpg" },
  { id: 6, name: "Short Linho", category: "Shorts", color: "Marrom", price: 129.90, sizes: "G", img: "produto-06.jpg" },
  { id: 7, name: "Short Linho", category: "Shorts", color: "Rosa", price: 129.90, sizes: "P", img: "produto-07.jpg" },
  { id: 8, name: "Short Linho", category: "Shorts", color: "Bege", price: 129.90, sizes: "P, M, G", img: "produto-08.jpg" },

  { id: 9, name: "Short Mauricinho de Algodão", category: "Shorts", color: "Azul-água", price: 129.90, sizes: "M, G", img: "produto-09.jpg" },

  { id: 10, name: "Short Sarja", category: "Shorts", color: "Azul", price: 159.90, sizes: "P", img: "produto-10.jpg" },
  { id: 11, name: "Short Sarja", category: "Shorts", color: "Branco", price: 159.90, sizes: "G", img: "produto-11.jpg" },
  { id: 12, name: "Short Sarja", category: "Shorts", color: "Marrom", price: 159.90, sizes: "M", img: "produto-12.jpg" },
  { id: 13, name: "Short Sarja", category: "Shorts", color: "Azul-escuro", price: 159.90, sizes: "M", img: "produto-13.jpg" },

  { id: 14, name: "Bermuda Brim", category: "Bermudas", color: "Preta", price: 159.90, sizes: "38, 40, 42, 44, 46", img: "produto-14.jpg" },
  { id: 15, name: "Bermuda Brim", category: "Bermudas", color: "Cinza", price: 159.90, sizes: "42, 44", img: "produto-15.jpg" },
  { id: 16, name: "Bermuda Brim", category: "Bermudas", color: "Branca", price: 159.90, sizes: "42, 44", img: "produto-16.jpg" },
  { id: 17, name: "Bermuda Brim", category: "Bermudas", color: "Cinza-claro", price: 159.90, sizes: "38, 40", img: "produto-17.jpg" },
  { id: 18, name: "Bermuda Brim", category: "Bermudas", color: "Bege-claro", price: 159.90, sizes: "38, 40, 42, 44", img: "produto-18.jpg" },

  { id: 19, name: "T-shirt Texturizada", category: "T-shirts", color: "Preta", price: 119.90, sizes: "M, G, GG", img: "produto-19.jpg" },

  { id: 20, name: "T-shirt Tricô", category: "T-shirts", color: "Branca", price: 119.90, sizes: "Consultar disponibilidade", img: "produto-21.jpg" },
  { id: 23, name: "T-shirt Tricô", category: "T-shirts", color: "Azul-claro", price: 119.90, sizes: "Consultar disponibilidade", img: "produto-20.jpg" },

  { id: 21, name: "T-shirt Algodão", category: "T-shirts", color: "Bege", price: 69.90, sizes: "P, M, G, GG", img: "produto-25.jpg" },
  { id: 24, name: "T-shirt Algodão", category: "T-shirts", color: "Branca", price: 69.90, sizes: "P, M, G, GG", img: "produto-24.jpg" },
  { id: 25, name: "T-shirt Algodão", category: "T-shirts", color: "Preta", price: 69.90, sizes: "P, M, G, GG", img: "produto-23.jpg" },
  { id: 26, name: "T-shirt Algodão", category: "T-shirts", color: "Marrom-escuro", price: 69.90, sizes: "P, M, G, GG", img: "produto-22.jpg" },

  { id: 22, name: "Regata", category: "Regatas", color: "Preta", price: 87.00, sizes: "Consultar disponibilidade", img: "produto-26.jpg" },
  { id: 27, name: "Regata", category: "Regatas", color: "Branca", price: 87.00, sizes: "Consultar disponibilidade", img: "produto-30.jpg" },
  { id: 28, name: "Regata", category: "Regatas", color: "Verde", price: 87.00, sizes: "Consultar disponibilidade", img: "produto-32.jpg" },
  { id: 29, name: "Regata", category: "Regatas", color: "Laranja", price: 87.00, sizes: "Consultar disponibilidade", img: "produto-34.jpg" },
  { id: 30, name: "Regata", category: "Regatas", color: "Bege", price: 87.00, sizes: "Consultar disponibilidade", img: "produto-28.jpg" },

  // CAMISA CANELADA
  { id: 31, name: "Camisa Canelada", category: "Camisas", color: "Marrom", price: 87.00, sizes: "M", img: "produto-36.jpg" },
  { id: 32, name: "Camisa Canelada", category: "Camisas", color: "Branca", price: 87.00, sizes: "M", img: "produto-37.jpg" },
  { id: 33, name: "Camisa Canelada", category: "Camisas", color: "Bege", price: 87.00, sizes: "M", img: "produto-38.jpg" }
];

const whatsapp = "557588033637";
const $ = id => document.getElementById(id);

const money = value => Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

let cart = [];
let activeFilter = "Todos";
let selectedVariant = null;
let builderSelection = new Set();
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

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

function productGroups() {
  const groups = new Map();

  products.forEach(product => {
    const key = `${product.category}::${product.name}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(product);
  });

  return [...groups.values()];
}

/* CATÁLOGO */

function renderProducts() {
  const grid = $("productGrid");
  if (!grid) return;

  const groups = productGroups().filter(group =>
    activeFilter === "Todos" || group[0].category === activeFilter
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
            onerror="this.style.display='none'"
          >
          <span class="product-tag">
            ${group.length === 1 ? "1 OPÇÃO" : `${group.length} CORES`}
          </span>
        </div>

        <div class="product-info">
          <span class="product-category">${escapeHTML(product.category)}</span>
          <h3>${escapeHTML(product.name)}</h3>
          <p class="product-color">${colors.map(escapeHTML).join(" · ")}</p>
          <p class="product-sizes">Consulte os tamanhos disponíveis</p>
          <div class="product-price">${money(product.price)}</div>

          <button class="btn btn-outline full" data-detail="${product.id}" type="button">
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

function setFilter(filter) {
  activeFilter = filter;

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  renderProducts();
}

if ($("filters")) {
  $("filters").querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });
}

/* DETALHES DO PRODUTO */

function getAvailableSizes(product) {
  if (/consultar/i.test(product.sizes)) return [];

  return product.sizes.split(",").map(size => size.trim()).filter(Boolean);
}

function openProduct(id) {
  selectedVariant = products.find(product => product.id === id);
  if (!selectedVariant || !$("productModal")) return;

  $("detailCategory").textContent = selectedVariant.category.toUpperCase();
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
  $("detailImage").alt = `${selectedVariant.name} - ${selectedVariant.color}`;
  $("detailPrice").textContent = money(selectedVariant.price);
  $("selectedColorLabel").textContent = selectedVariant.color;

  $("colorOptions").innerHTML = variants.map(variant => `
    <button
      type="button"
      class="color-option ${variant.id === selectedVariant.id ? "active" : ""}"
      data-color-id="${variant.id}"
    >
      ${escapeHTML(variant.color)}
    </button>
  `).join("");

  $("colorOptions").querySelectorAll("[data-color-id]").forEach(button => {
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
      sizes.map(size => `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`).join("")
    : '<option value="">Tamanho a confirmar pelo WhatsApp</option>';
}

function closeProduct() {
  const modal = $("productModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (!$("cartDrawer")?.classList.contains("open")) {
    document.body.classList.remove("locked");
  }
}

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

  addProductToCart(selectedVariant, size || "A confirmar");
  closeProduct();
  showToast("Produto adicionado à sacola!");
}

/* FIM DA PARTE 1 — continue com a Parte 2 abaixo */
/* LOOKS PRONTOS */

const looks = [
  {
    name: "Camisa Dubai + Short Mauricinho",
    items: [1, 9],
    photos: [39, 40, 41, 42]
  },
  {
    name: "Camisa Dubai + Short Linho",
    items: [1, 4],
    photos: [43, 44, 45]
  },
  {
    name: "T-shirt Texturizada + Bermuda Brim",
    items: [19, 14],
    photos: [46, 47, 48, 49]
  },
  {
    name: "T-shirt Tricô + Bermuda Brim",
    items: [20, 14],
    photos: [50, 51, 52, 53, 54, 55]
  },
  {
    name: "T-shirt Algodão + Short Sarja",
    items: [21, 10],
    photos: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65]
  },
  {
    name: "Short Sarja + Camisa Canelada",
    items: [10, 31],
    photos: [66, 67, 68]
  }
];

/* 5% DE DESCONTO E ARREDONDAMENTO PARA ,90 */

function lookPrice(total) {
  const discounted = total * 0.95;
  const cents = Math.round(discounted * 100);

  return (Math.round((cents - 90) / 100) * 100 + 90) / 100;
}

/* EXIBIR OS LOOKS PRONTOS */

function renderLooks() {
  const grid = $("lookGrid");
  if (!grid) return;

  grid.innerHTML = looks.map((look, index) => {
    const items = look.items
      .map(id => products.find(product => product.id === id))
      .filter(Boolean);

    const total = items.reduce((sum, product) => sum + product.price, 0);
    const finalPrice = lookPrice(total);
    const firstPhoto = look.photos[0];

    return `
      <article class="look-card" data-look-card="${index}">
        <div style="position:relative;background:#e8e3da;overflow:hidden;">
          <img
            class="look-cover-image"
            src="produto-${String(firstPhoto).padStart(2, "0")}.jpg"
            alt="${escapeHTML(look.name)}"
            loading="lazy"
            style="width:100%;aspect-ratio:3/4;object-fit:contain;"
            onerror="this.onerror=null;this.src='${escapeHTML(items[0]?.img || "produto-01.jpg")}';"
          >
          <span class="product-tag">${look.photos.length} FOTOS</span>
        </div>

        <div
          class="look-options"
          id="lookOptions-${index}"
          hidden
          style="display:none;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin-top:10px;"
        >
          ${look.photos.map((photo, photoIndex) => `
            <button
              class="look-thumb"
              type="button"
              data-look-photo="${photo}"
              data-look-index="${index}"
              aria-label="Ver foto ${photoIndex + 1}"
              style="padding:3px;border:1px solid ${photoIndex === 0 ? "var(--gold)" : "var(--line)"};background:#e8e3da;"
            >
              <img
                src="produto-${String(photo).padStart(2, "0")}.jpg"
                alt="Opção ${photoIndex + 1}"
                loading="lazy"
                style="width:100%;aspect-ratio:3/4;object-fit:contain;"
              >
            </button>
          `).join("")}
        </div>

        <button
          class="btn btn-outline look-more"
          data-look-more="${index}"
          type="button"
          aria-expanded="false"
          style="width:100%;margin:10px 0;"
        >
          VER MAIS + (${look.photos.length - 1} opções)
        </button>

        <span class="discount">5% DE DESCONTO</span>
        <h3>${escapeHTML(look.name)}</h3>
        <p>${items.map(product => escapeHTML(product.name)).join(" + ")}</p>

        <div class="look-price">
          <strong>${money(finalPrice)}</strong>
          <span class="old-price">${money(total)}</span>
        </div>

        <button class="btn btn-gold" data-look="${index}" type="button">
          ESCOLHER LOOK ↗
        </button>
      </article>
    `;
  }).join("");

  /* ABRIR E OCULTAR AS FOTOS */

  grid.querySelectorAll("[data-look-more]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.lookMore);
      const options = $("lookOptions-" + index);
      const expanded = button.getAttribute("aria-expanded") === "true";

      options.hidden = expanded;
      options.style.display = expanded ? "none" : "grid";

      button.setAttribute("aria-expanded", String(!expanded));

      button.textContent = expanded
        ? `VER MAIS + (${looks[index].photos.length - 1} opções)`
        : "OCULTAR OPÇÕES −";
    });
  });

  /* TROCAR A FOTO PRINCIPAL */

  grid.querySelectorAll("[data-look-photo]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.lookIndex);
      const photo = Number(button.dataset.lookPhoto);
      const card = grid.querySelector(`[data-look-card="${index}"]`);
      const image = card?.querySelector(".look-cover-image");

      if (!image) return;

      image.src = `produto-${String(photo).padStart(2, "0")}.jpg`;

      card.querySelectorAll("[data-look-photo]").forEach(thumb => {
        const active = Number(thumb.dataset.lookPhoto) === photo;

        thumb.style.borderColor = active
          ? "var(--gold)"
          : "var(--line)";
      });
    });
  });

  /* BOTÃO ESCOLHER LOOK */

  grid.querySelectorAll("[data-look]").forEach(button => {
    button.addEventListener("click", () => {
      addReadyLook(Number(button.dataset.look));
    });
  });
}

/* ADICIONAR LOOK À SACOLA COM DESCONTO */

function addReadyLook(index) {
  const look = looks[index];
  if (!look) return;

  const items = look.items
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  if (!items.length) {
    showToast("Não foi possível carregar as peças deste look.");
    return;
  }

  const total = items.reduce((sum, product) => sum + product.price, 0);
  const finalPrice = lookPrice(total);
  const factor = finalPrice / total;
  const lookKey = `look-${Date.now()}`;

  let subtotal = 0;

  items.forEach((product, itemIndex) => {
    let price = Number((product.price * factor).toFixed(2));

    if (itemIndex === items.length - 1) {
      price = Number((finalPrice - subtotal).toFixed(2));
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
  showToast("Look adicionado à sacola!");
}

/* MONTE SEU LOOK */

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
        <strong>${escapeHTML(product.name)} — ${escapeHTML(product.color)}</strong>
        <span>${escapeHTML(product.category)} · ${escapeHTML(product.sizes)}</span>
      </span>

      <span class="builder-item-price">${money(product.price)}</span>
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

  const total = chosen.reduce((sum, product) => sum + product.price, 0);

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

  const lookKey = `custom-${Date.now()}`;

  chosen.forEach(product => {
    cart.push({
      key: `${lookKey}-${product.id}`,
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

/* SACOLA */

function cartTotalValue() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

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
          : ""
        }

        <strong>${money(item.price * item.quantity)}</strong>
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
      cart = cart.filter(item =>
        item.key !== button.dataset.remove
      );

      renderCart();
      showToast("Item removido da sacola.");
    });
  });
}

function openCart() {
  if (!$("cartDrawer") || !$("overlay")) return;

  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("open");
  document.body.classList.add("locked");
}

function closeCart() {
  if ($("cartDrawer")) {
    $("cartDrawer").classList.remove("open");
  }

  if ($("overlay")) {
    $("overlay").classList.remove("open");
  }

  if (!$("productModal")?.classList.contains("open")) {
    document.body.classList.remove("locked");
  }
}

/* PEDIDO PELO WHATSAPP */

function sendOrder() {
  if (!cart.length) {
    showToast("Sua sacola está vazia.");
    return;
  }

  const customer = $("customerName")?.value.trim() || "";
  const note = $("customerNote")?.value.trim() || "";

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

  window.open(url, "_blank");
}

/* MENU DO CELULAR */

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

/* EVENTOS DOS MODAIS E BOTÕES */

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

if ($("openCart")) {
  $("openCart").addEventListener("click", openCart);
}

if ($("closeCart")) {
  $("closeCart").addEventListener("click", closeCart);
}

if ($("overlay")) {
  $("overlay").addEventListener("click", closeCart);
}

if ($("sendOrder")) {
  $("sendOrder").addEventListener("click", sendOrder);
}

if ($("addLook")) {
  $("addLook").addEventListener("click", addCustomLook);
}

/* ANO DO RODAPÉ */

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

/* INICIALIZAÇÃO DA LOJA */

function initializeStore() {
  renderProducts();
  renderLooks();
  renderBuilder();
  renderCart();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeStore,
    { once: true }
  );
} else {
  initializeStore();
                              }
