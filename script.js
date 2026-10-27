/* =========================================
   GUERREIRO STORY — SCRIPT.JS
   PARTE 1/4 — DADOS E FUNÇÕES BÁSICAS
========================================= */

"use strict";

const $ = id => document.getElementById(id);
const WHATSAPP = "557588033637";

const money = value => Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const safe = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char]);

let cart = [];
let activeFilter = "Todos";
let searchTerm = "";
let sortMode = "default";
let selectedProduct = null;
let modalQuantity = 1;
let toastTimer = null;
let builderSelection = new Map();

/* SOMENTE NOMES DOS ARQUIVOS NOVOS */

const products = [
  {
    id: 1, name: "Camisa Dubai", category: "Camisas Dubai",
    color: "Preta", price: 169.90, sizes: ["P", "M", "G", "GG"],
    img: "01_1000073883_peca_01.jpg"
  },
  {
    id: 2, name: "Camisa Dubai", category: "Camisas Dubai",
    color: "Branca", price: 169.90, sizes: ["P", "G", "GG"],
    img: "02_1000073883_peca_02.jpg"
  },
  {
    id: 3, name: "Camisa Dubai", category: "Camisas Dubai",
    color: "Verde", price: 169.90, sizes: ["P", "G", "GG"],
    img: "03_1000073883_peca_03.jpg"
  },

  {
    id: 4, name: "Short Linho", category: "Shorts de Linho",
    color: "Branco", price: 129.90, sizes: ["P", "G"],
    img: "01_Short_Linho_Branco.png"
  },
  {
    id: 5, name: "Short Linho", category: "Shorts de Linho",
    color: "Preto", price: 129.90, sizes: ["M", "G"],
    img: "02_Short_Linho_Preto.png"
  },
  {
    id: 6, name: "Short Linho", category: "Shorts de Linho",
    color: "Marrom", price: 129.90, sizes: ["G"],
    img: "03_Short_Linho_Marrom.png"
  },
  {
    id: 7, name: "Short Linho", category: "Shorts de Linho",
    color: "Rosa", price: 129.90, sizes: ["P"],
    img: "06_Short_Linho_Rosa.png"
  },
  {
    id: 8, name: "Short Linho", category: "Shorts de Linho",
    color: "Verde-claro", price: 129.90, sizes: ["P", "M", "G"],
    img: "04_Short_Linho_Verdeclaro.png"
  },

  {
    id: 9, name: "Short Mauricinho", category: "Outras peças",
    color: "Azul-água", price: 129.90, sizes: ["M", "G"],
    img: "05_1000073884_individual.jpg"
  },

  {
    id: 10, name: "Short Sarja", category: "Outras peças",
    color: "Azul", price: 159.90, sizes: ["P"],
    img: "06_1000073885_peca_01.jpg"
  },
  {
    id: 11, name: "Short Sarja", category: "Outras peças",
    color: "Branco", price: 159.90, sizes: ["G"],
    img: "07_1000073885_peca_02.jpg"
  },
  {
    id: 12, name: "Short Sarja", category: "Outras peças",
    color: "Marrom", price: 159.90, sizes: ["M"],
    img: "08_1000073885_peca_03.jpg"
  },
  {
    id: 13, name: "Short Sarja", category: "Outras peças",
    color: "Azul-escuro", price: 159.90, sizes: ["M"],
    img: "09_1000073885_peca_04.jpg"
  },

  {
    id: 14, name: "Bermuda Brim", category: "Bermudas de Brim",
    color: "Preta", price: 159.90, sizes: ["38", "40", "42", "44", "46"],
    img: "12_1000073887_peca_01.jpg"
  },
  {
    id: 15, name: "Bermuda Brim", category: "Bermudas de Brim",
    color: "Cinza", price: 159.90, sizes: ["42", "44"],
    img: "13_1000073887_peca_02.jpg"
  },
  {
    id: 16, name: "Bermuda Brim", category: "Bermudas de Brim",
    color: "Branca", price: 159.90, sizes: ["42", "44"],
    img: "14_1000073887_peca_03.jpg"
  },
  {
    id: 17, name: "Bermuda Brim", category: "Bermudas de Brim",
    color: "Cinza-claro", price: 159.90, sizes: ["38", "40"],
    img: "15_1000073887_peca_04.jpg"
  },
  {
    id: 18, name: "Bermuda Brim", category: "Bermudas de Brim",
    color: "Bege clarinho", price: 159.90, sizes: ["38", "40", "42", "44"],
    img: "16_1000073887_peca_05.jpg"
  },

  {
    id: 19, name: "T-shirt Texturizada", category: "T-shirt Texturizada",
    color: "Preta", price: 119.90, sizes: ["M", "G", "GG"],
    img: "17_1000073888_peca_01.jpg"
  },

  {
    id: 20, name: "T-shirt Tricô", category: "T-shirts de Tricô",
    color: "Branca", price: 119.90, sizes: ["Consultar"],
    img: "trico_branca_01.jpg"
  },
  {
    id: 23, name: "T-shirt Tricô", category: "T-shirts de Tricô",
    color: "Azul-claro", price: 119.90, sizes: ["Consultar"],
    img: "trico_azulclaro_02.jpg"
  },

  {
    id: 21, name: "T-shirt Algodão", category: "T-shirts de Algodão",
    color: "Bege", price: 69.90, sizes: ["P", "M", "G", "GG"],
    img: "28_1000073891_individual.jpg"
  },
  {
    id: 24, name: "T-shirt Algodão", category: "T-shirts de Algodão",
    color: "Branca", price: 69.90, sizes: ["P", "M", "G", "GG"],
    img: "24_1000073889_peca_02.jpg"
  },
  {
    id: 25, name: "T-shirt Algodão", category: "T-shirts de Algodão",
    color: "Preta", price: 69.90, sizes: ["P", "M", "G", "GG"],
    img: "25_1000073889_peca_03.jpg"
  },
  {
    id: 26, name: "T-shirt Algodão", category: "T-shirts de Algodão",
    color: "Marrom-escuro", price: 69.90, sizes: ["P", "M", "G", "GG"],
    img: "26_1000073889_peca_04.jpg"
  },

  {
    id: 22, name: "Regata", category: "Regatas",
    color: "Preta", price: 87.00, sizes: ["Consultar"],
    img: "29_1000073892_peca_01.jpg"
  },
  {
    id: 27, name: "Regata", category: "Regatas",
    color: "Branca", price: 87.00, sizes: ["Consultar"],
    img: "30_1000073892_peca_02.jpg"
  },
  {
    id: 28, name: "Regata", category: "Regatas",
    color: "Verde", price: 87.00, sizes: ["Consultar"],
    img: "31_1000073892_peca_03.jpg"
  },
  {
    id: 29, name: "Regata", category: "Regatas",
    color: "Laranja", price: 87.00, sizes: ["Consultar"],
    img: "32_1000073931_peca_01.jpg"
  },
  {
    id: 30, name: "Regata", category: "Regatas",
    color: "Bege", price: 87.00, sizes: ["Consultar"],
    img: "33_1000073931_peca_02.jpg"
  },

  {
    id: 31, name: "Camisa Canelada", category: "Outras peças",
    color: "Marrom", price: 87.00, sizes: ["M"],
    img: "camiseta-canelada-marrom-short-sarja-branco.jpg"
  },
  {
    id: 32, name: "Camisa Canelada", category: "Outras peças",
    color: "Branca", price: 87.00, sizes: ["M"],
    img: "camiseta-canelada-branca-marrom-short-sarja-marrom.jpg"
  },
  {
    id: 33, name: "Camisa Canelada", category: "Outras peças",
    color: "Bege", price: 87.00, sizes: ["M"],
    img: "camiseta-canelada-bege-marinho-short-sarja-azul.jpg"
  }
];

function showToast(message) {
  const toast = $("toast");
  const text = $("toastMessage");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function findProduct(id) {
  return products.find(product => product.id === Number(id));
}

function getVariants(product) {
  return products.filter(item =>
    item.name === product.name &&
    item.category === product.category
  );
}

function isSizeConfirmRequired(product) {
  return product.sizes.length === 1 &&
    product.sizes[0].toLowerCase() === "consultar";
}

function imageMarkup(product, extraClass = "") {
  return `
    <img
      class="${safe(extraClass)}"
      src="${safe(product.img)}"
      alt="${safe(`${product.name} ${product.color}`)}"
      loading="lazy"
    >
  `;
     }
/* =========================================
   PARTE 2/4 — CATÁLOGO E MODAL DO PRODUTO
========================================= */

function renderProducts() {
  const grid = $("productGrid");
  if (!grid) return;

  let groups = [];

  products.forEach(product => {
    const key = `${product.category}::${product.name}`;
    let group = groups.find(item => item.key === key);

    if (!group) {
      group = {
        key,
        category: product.category,
        name: product.name,
        variants: []
      };
      groups.push(group);
    }

    group.variants.push(product);
  });

  groups = groups.filter(group => {
    const categoryMatch =
      activeFilter === "Todos" ||
      group.category === activeFilter;

    const text = `${group.name} ${group.category} ${
      group.variants.map(item => item.color).join(" ")
    }`.toLocaleLowerCase("pt-BR");

    return categoryMatch && text.includes(searchTerm);
  });

  if (sortMode === "price-asc") {
    groups.sort((a, b) => a.variants[0].price - b.variants[0].price);
  } else if (sortMode === "price-desc") {
    groups.sort((a, b) => b.variants[0].price - a.variants[0].price);
  } else if (sortMode === "name") {
    groups.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }

  grid.innerHTML = groups.map(group => {
    const product = group.variants[0];
    const colors = group.variants.map(item => item.color).join(" · ");

    return `
      <article class="product-card">
        <div class="product-image">
          ${imageMarkup(product)}
          <span class="product-tag">
            ${group.variants.length > 1
              ? `${group.variants.length} CORES`
              : "PEÇA"}
          </span>
        </div>

        <div class="product-info">
          <span class="product-category">${safe(group.category)}</span>
          <h3>${safe(group.name)}</h3>
          <p class="product-color">${safe(colors)}</p>
          <p class="product-sizes">Consulte as opções disponíveis</p>
          <div class="product-price">${money(product.price)}</div>

          <button
            class="btn btn-outline"
            type="button"
            data-open-product="${product.id}"
          >
            VER OPÇÕES +
          </button>
        </div>
      </article>
    `;
  }).join("");

  const empty = $("productEmpty");
  if (empty) empty.hidden = groups.length > 0;

  const count = $("productResultCount");
  if (count) {
    count.textContent = groups.length === 1
      ? "1 modelo encontrado"
      : `${groups.length} modelos encontrados`;
  }

  grid.querySelectorAll("[data-open-product]").forEach(button => {
    button.addEventListener("click", () => {
      openProduct(Number(button.dataset.openProduct));
    });
  });
}

function updateActiveFilterButtons() {
  document.querySelectorAll("#categoryFilters [data-category]").forEach(button => {
    const active = button.dataset.category === activeFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setupCatalog() {
  const filters = $("categoryFilters");

  if (filters) {
    filters.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.category;
        updateActiveFilterButtons();
        renderProducts();
      });
    });
  }

  const search = $("productSearch");
  if (search) {
    search.addEventListener("input", () => {
      searchTerm = search.value.trim().toLocaleLowerCase("pt-BR");
      renderProducts();
    });
  }

  const sort = $("productSort");
  if (sort) {
    sort.addEventListener("change", () => {
      sortMode = sort.value;
      renderProducts();
    });
  }

  const clear = $("clearProductFilters");
  if (clear) {
    clear.addEventListener("click", () => {
      activeFilter = "Todos";
      searchTerm = "";
      sortMode = "default";

      if ($("productSearch")) $("productSearch").value = "";
      if ($("productSort")) $("productSort").value = "default";

      updateActiveFilterButtons();
      renderProducts();
    });
  }

  updateActiveFilterButtons();
}

/* MODAL DE DETALHES */

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;

  selectedProduct = product;
  modalQuantity = 1;

  const modal = $("productModal");
  if (!modal) return;

  renderProductModal();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function renderProductModal() {
  if (!selectedProduct) return;

  const product = selectedProduct;
  const image = $("modalProductImage");

  if (image) {
    image.src = product.img;
    image.alt = `${product.name} — ${product.color}`;
    image.onerror = () => {
      image.alt = "Imagem indisponível";
    };
  }

  if ($("modalProductCategory")) {
    $("modalProductCategory").textContent = product.category.toUpperCase();
  }

  if ($("modalProductName")) {
    $("modalProductName").textContent = product.name;
  }

  if ($("modalProductPrice")) {
    $("modalProductPrice").textContent = money(product.price);
  }

  if ($("modalProductDescription")) {
    $("modalProductDescription").textContent =
      `Cor: ${product.color}. Escolha uma opção e confira os detalhes antes de adicionar à sacola.`;
  }

  const colorSelect = $("modalProductColor");
  if (colorSelect) {
    const variants = getVariants(product);
    colorSelect.innerHTML = variants.map(variant => `
      <option
        value="${variant.id}"
        ${variant.id === product.id ? "selected" : ""}
      >${safe(variant.color)}</option>
    `).join("");
  }

  renderModalSizes();

  if ($("modalProductQuantity")) {
    $("modalProductQuantity").value = String(modalQuantity);
  }

  if ($("productModalFeedback")) {
    $("productModalFeedback").textContent = "";
  }
}

function renderModalSizes() {
  const sizeSelect = $("modalProductSize");
  if (!sizeSelect || !selectedProduct) return;

  const sizes = selectedProduct.sizes;

  if (isSizeConfirmRequired(selectedProduct)) {
    sizeSelect.innerHTML = '<option value="A confirmar">Tamanho a confirmar</option>';
    sizeSelect.value = "A confirmar";
    sizeSelect.disabled = true;
    return;
  }

  sizeSelect.disabled = false;
  sizeSelect.innerHTML =
    '<option value="">Selecione um tamanho</option>' +
    sizes.map(size => `
      <option value="${safe(size)}">${safe(size)}</option>
    `).join("");
}

function closeProduct() {
  const modal = $("productModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (!$("cartOverlay")?.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
}

function setupProductModal() {
  const colorSelect = $("modalProductColor");

  if (colorSelect) {
    colorSelect.addEventListener("change", () => {
      const nextProduct = findProduct(colorSelect.value);
      if (!nextProduct) return;

      selectedProduct = nextProduct;
      renderProductModal();
    });
  }

  document.querySelectorAll("[data-close-product-modal]").forEach(element => {
    element.addEventListener("click", closeProduct);
  });

  if ($("modalQuantityMinus")) {
    $("modalQuantityMinus").addEventListener("click", () => {
      modalQuantity = Math.max(1, modalQuantity - 1);
      if ($("modalProductQuantity")) {
        $("modalProductQuantity").value = String(modalQuantity);
      }
    });
  }

  if ($("modalQuantityPlus")) {
    $("modalQuantityPlus").addEventListener("click", () => {
      modalQuantity = Math.min(20, modalQuantity + 1);
      if ($("modalProductQuantity")) {
        $("modalProductQuantity").value = String(modalQuantity);
      }
    });
  }

  if ($("modalProductQuantity")) {
    $("modalProductQuantity").addEventListener("change", () => {
      const value = Number($("modalProductQuantity").value);
      modalQuantity = Number.isFinite(value)
        ? Math.min(20, Math.max(1, Math.floor(value)))
        : 1;

      $("modalProductQuantity").value = String(modalQuantity);
    });
  }

  if ($("addProductToCart")) {
    $("addProductToCart").addEventListener("click", addDetailToCart);
  }
}

function addDetailToCart() {
  if (!selectedProduct) return;

  const sizeSelect = $("modalProductSize");
  const size = sizeSelect?.value || "";

  if (!isSizeConfirmRequired(selectedProduct) && !size) {
    if ($("productModalFeedback")) {
      $("productModalFeedback").textContent = "Selecione um tamanho antes de continuar.";
    }
    return;
  }

  cart.push({
    key: `item-${Date.now()}-${Math.random()}`,
    productId: selectedProduct.id,
    name: selectedProduct.name,
    color: selectedProduct.color,
    size: size || "A confirmar",
    price: selectedProduct.price,
    quantity: modalQuantity,
    img: selectedProduct.img,
    lookName: ""
  });

  renderCart();
  closeProduct();
  showToast("Produto adicionado à sacola!");
    }
/* =========================================
   PARTE 3/4 — LOOKS PRONTOS E MONTADOR
========================================= */

/*
  Cada look usa o nome real de um arquivo novo.
  Os produtos usados no preço continuam com
  os preços individuais normais.
*/

const readyLooks = [
  {
    name: "Dubai preta + Short Linho",
    productIds: [1, 4],
    photos: [
      "look_dubai_preta_linho_azulclaro_01.jpg",
      "look_dubai_preta_linho_marrom_02.jpg"
    ]
  },
  {
    name: "Dubai verde + Short Linho",
    productIds: [3, 5],
    photos: ["look_dubai_verde_linho_preto_03.jpg"]
  },
  {
    name: "Dubai branca + Short Linho",
    productIds: [2, 4],
    photos: [
      "dubai_branca_short_linho_rosa_look.jpg",
      "dubai_branca_short_linho_verde_look.jpg",
      "dubai_branca_short_linho_marrom_look.jpg",
      "dubai_branca_short_linho_azulclaro_look.jpg"
    ]
  },
  {
    name: "Texturizada preta + Bermuda Brim",
    productIds: [19, 18],
    photos: [
      "texturizada_preta_bermuda_brim_begeclarinho_look.jpg",
      "texturizada_preta_bermuda_brim_marrom_look.jpg",
      "texturizada_preta_bermuda_brim_marrom_acinzentado_look.jpg",
      "texturizada_preta_bermuda_brim_begeclaro_look.jpg"
    ]
  },
  {
    name: "Tricô branca + Bermuda Brim",
    productIds: [20, 14],
    photos: [
      "trico_branca_bermuda_brim_preta_look.jpg",
      "trico_branca_bermuda_brim_marrom_look.jpg"
    ]
  },
  {
    name: "Tricô azul-claro + Bermuda Brim",
    productIds: [23, 15],
    photos: [
      "trico_azulclaro_bermuda_brim_cinza_look.jpg",
      "trico_azulclaro_bermuda_brim_bege_look.jpg",
      "trico_azulclaro_bermuda_brim_caqui_look.jpg",
      "trico_azulclaro_bermuda_brim_preta_look.jpg"
    ]
  },
  {
    name: "Algodão + Short Sarja",
    productIds: [21, 10],
    photos: [
      "algodao_bege_short_sarja_branco_look.jpg",
      "algodao_bege_short_sarja_marrom_look.jpg",
      "algodao_bege_short_sarja_preto_look.jpg",
      "algodao_branca_short_sarja_azul_look.jpg",
      "algodao_branca_short_sarja_verde_look.jpg",
      "algodao_marrom_short_sarja_amarelo_look.jpg",
      "algodao_marrom_short_sarja_branco_look.jpg",
      "algodao_preta_short_sarja_amarelo_look.jpg",
      "algodao_preta_short_sarja_branco_look.jpg",
      "algodao_preta_short_sarja_cinza_look.jpg"
    ]
  },
  {
    name: "Canelada + Short Sarja",
    productIds: [31, 10],
    photos: [
      "camiseta-canelada-bege-marinho-short-sarja-azul.jpg",
      "camiseta-canelada-branca-marrom-short-sarja-marrom.jpg",
      "camiseta-canelada-marrom-short-sarja-branco.jpg"
    ]
  }
];

function getLookProducts(look) {
  return look.productIds
    .map(id => findProduct(id))
    .filter(Boolean);
}

function getLookSubtotal(look) {
  return getLookProducts(look)
    .reduce((total, product) => total + product.price, 0);
}

function getLookDiscountedPrice(look) {
  return Math.round(getLookSubtotal(look) * 0.95 * 100) / 100;
}

function renderLooks() {
  const grid = $("lookGrid");
  if (!grid) return;

  grid.innerHTML = readyLooks.map((look, index) => {
    const items = getLookProducts(look);
    const subtotal = getLookSubtotal(look);
    const discounted = getLookDiscountedPrice(look);
    const firstPhoto = look.photos[0];

    return `
      <article class="look-card" data-ready-look="${index}">
        <div class="look-images">
          <img
            class="look-cover-image"
            src="${safe(firstPhoto)}"
            alt="${safe(look.name)}"
            loading="lazy"
          >
        </div>

        <div class="look-options" hidden>
          ${look.photos.map((photo, photoIndex) => `
            <button
              type="button"
              class="look-thumb"
              data-look-photo-index="${photoIndex}"
              aria-label="Ver foto ${photoIndex + 1} de ${safe(look.name)}"
            >
              <img
                src="${safe(photo)}"
                alt=""
                loading="lazy"
              >
            </button>
          `).join("")}
        </div>

        ${look.photos.length > 1 ? `
          <button
            class="btn btn-outline look-more"
            type="button"
            data-toggle-look-photos
            aria-expanded="false"
          >
            VER OUTRAS FOTOS +
          </button>
        ` : ""}

        <div class="look-info">
          <span class="discount">5% DE DESCONTO</span>
          <h3>${safe(look.name)}</h3>
          <p>${items.map(item => safe(`${item.name} ${item.color}`)).join(" + ")}</p>

          <div class="look-price">
            <strong>${money(discounted)}</strong>
            <span class="old-price">${money(subtotal)}</span>
          </div>

          <button
            class="btn btn-primary"
            type="button"
            data-add-ready-look="${index}"
          >
            ESCOLHER LOOK
          </button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-ready-look]").forEach(card => {
    const lookIndex = Number(card.dataset.readyLook);
    const look = readyLooks[lookIndex];
    const mainImage = card.querySelector(".look-cover-image");
    const options = card.querySelector(".look-options");
    const toggle = card.querySelector("[data-toggle-look-photos]");

    if (toggle && options) {
      toggle.addEventListener("click", () => {
        const opening = options.hidden;
        options.hidden = !opening;
        toggle.setAttribute("aria-expanded", String(opening));
        toggle.textContent = opening ? "OCULTAR FOTOS −" : "VER OUTRAS FOTOS +";
      });
    }

    card.querySelectorAll("[data-look-photo-index]").forEach(button => {
      button.addEventListener("click", () => {
        const photoIndex = Number(button.dataset.lookPhotoIndex);
        const photo = look.photos[photoIndex];
        if (mainImage) mainImage.src = photo;

        card.querySelectorAll("[data-look-photo-index]").forEach(thumb => {
          thumb.classList.toggle( "active", thumb === button );
        });
      });
    });
  });

  grid.querySelectorAll("[data-add-ready-look]").forEach(button => {
    button.addEventListener("click", () => {
      addReadyLook(Number(button.dataset.addReadyLook));
    });
  });

  const empty = $("lookEmpty");
  if (empty) empty.hidden = readyLooks.length > 0;
}

function addReadyLook(index) {
  const look = readyLooks[index];
  if (!look) return;

  const items = getLookProducts(look);
  if (!items.length) {
    showToast("Não foi possível carregar esse look.");
    return;
  }

  /*
    O desconto é distribuído entre as peças
    para que a soma na sacola bata com o total.
  */
  const totalOriginal = items.reduce((sum, item) => sum + item.price, 0);
  const totalWithDiscount = getLookDiscountedPrice(look);
  const ratio = totalWithDiscount / totalOriginal;
  const groupKey = `look-${Date.now()}-${index}`;

  let accumulated = 0;

  items.forEach((product, itemIndex) => {
    let discountedPrice;

    if (itemIndex === items.length - 1) {
      discountedPrice = Math.round(
        (totalWithDiscount - accumulated) * 100
      ) / 100;
    } else {
      discountedPrice = Math.round(product.price * ratio * 100) / 100;
      accumulated += discountedPrice;
    }

    cart.push({
      key: `${groupKey}-${product.id}`,
      productId: product.id,
      name: product.name,
      color: product.color,
      size: "A confirmar",
      price: discountedPrice,
      quantity: 1,
      img: product.img,
      lookName: look.name
    });
  });

  renderCart();
  openCart();
  showToast("Look pronto adicionado com 5% de desconto!");
}

/* MONTADOR DE LOOK PERSONALIZADO */

function renderBuilderProducts() {
  const container = $("builderProductList");
  if (!container) return;

  container.innerHTML = products.map(product => {
    const selected = builderSelection.has(product.id);
    const sizes = isSizeConfirmRequired(product)
      ? ["A confirmar"]
      : product.sizes;

    return `
      <article class="builder-choice">
        <label class="builder-choice-main">
          <input
            type="checkbox"
            data-builder-check="${product.id}"
            ${selected ? "checked" : ""}
          >

          ${imageMarkup(product, "builder-choice-image")}

          <span class="builder-choice-copy">
            <strong>${safe(product.name)}</strong>
            <span>${safe(product.color)}</span>
            <b>${money(product.price)}</b>
          </span>
        </label>

        <label class="builder-size-label">
          Tamanho
          <select
            data-builder-size="${product.id}"
            ${!selected ? "disabled" : ""}
          >
            ${sizes.map(size => `
              <option
                value="${safe(size)}"
                ${selected && builderSelection.get(product.id)?.size === size ? "selected" : ""}
              >${safe(size)}</option>
            `).join("")}
          </select>
        </label>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-builder-check]").forEach(input => {
    input.addEventListener("change", () => {
      const id = Number(input.dataset.builderCheck);
      const product = findProduct(id);
      const sizeSelect = container.querySelector(`[data-builder-size="${id}"]`);

      if (input.checked && product) {
        const defaultSize = isSizeConfirmRequired(product)
          ? "A confirmar"
          : product.sizes[0];

        builderSelection.set(id, {
          productId: id,
          size: sizeSelect?.value || defaultSize
        });

        if (sizeSelect) sizeSelect.disabled = false;
      } else {
        builderSelection.delete(id);
        if (sizeSelect) sizeSelect.disabled = true;
      }

      updateBuilderTotal();
    });
  });

  container.querySelectorAll("[data-builder-size]").forEach(select => {
    select.addEventListener("change", () => {
      const id = Number(select.dataset.builderSize);
      if (!builderSelection.has(id)) return;

      builderSelection.get(id).size = select.value;
    });
  });

  updateBuilderTotal();
}

function updateBuilderTotal() {
  const selected = [...builderSelection.keys()]
    .map(id => findProduct(id))
    .filter(Boolean);

  const total = selected.reduce((sum, product) => sum + product.price, 0);
  const count = selected.length;

  if ($("builderCount")) {
    $("builderCount").textContent =
      `${count} ${count === 1 ? "peça" : "peças"}`;
  }

  if ($("builderTotal")) {
    $("builderTotal").textContent = money(total);
  }

  if ($("builderEmpty")) {
    $("builderEmpty").hidden = count > 0;
  }

  if ($("addLookToCart")) {
    $("addLookToCart").disabled = count === 0;
  }

  if ($("builderList")) {
    $("builderList").innerHTML = selected.map(product => {
      const selection = builderSelection.get(product.id);

      return `
        <div class="builder-selected-item">
          <span>${safe(product.name)} — ${safe(product.color)}</span>
          <span>Tam. ${safe(selection?.size || "A confirmar")}</span>
          <strong>${money(product.price)}</strong>
          <button type="button" data-remove-builder="${product.id}">
            Remover
          </button>
        </div>
      `;
    }).join("");

    $("builderList").querySelectorAll("[data-remove-builder]").forEach(button => {
      button.addEventListener("click", () => {
        builderSelection.delete(Number(button.dataset.removeBuilder));
        renderBuilderProducts();
      });
    });
  }
}

function addCustomLook() {
  if (!builderSelection.size) {
    showToast("Escolha pelo menos uma peça para montar seu look.");
    return;
  }

  const groupKey = `custom-${Date.now()}`;

  builderSelection.forEach(selection => {
    const product = findProduct(selection.productId);
    if (!product) return;

    cart.push({
      key: `${groupKey}-${product.id}`,
      productId: product.id,
      name: product.name,
      color: product.color,
      size: selection.size || "A confirmar",
      price: product.price,
      quantity: 1,
      img: product.img,
      lookName: "Look personalizado"
    });
  });

  renderCart();
  openCart();
  showToast("Seu look personalizado foi adicionado!");
}
/* =========================================
   PARTE 4/4 — SACOLA, WHATSAPP E INÍCIO
========================================= */

function getCartTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
  const count = $("cartCount");
  const itemsContainer = $("cartItems");
  const empty = $("cartEmpty");
  const footer = $("cartFooter");
  const subtotal = $("cartSubtotal");

  if (count) count.textContent = String(getCartCount());
  if (subtotal) subtotal.textContent = money(getCartTotal());

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <article class="cart-item">
        <img
          src="${safe(item.img)}"
          alt="${safe(item.name)} — ${safe(item.color)}"
          loading="lazy"
        >

        <div class="cart-item-info">
          <h3>${safe(item.name)}</h3>
          <p>Cor: ${safe(item.color)}</p>
          <p>Tamanho: ${safe(item.size)}</p>
          ${item.lookName ? `<p>${safe(item.lookName)}</p>` : ""}
          <strong>${money(item.price * item.quantity)}</strong>

          <div class="cart-item-quantity">
            <button
              type="button"
              data-cart-quantity="${safe(item.key)}"
              data-change="-1"
              aria-label="Diminuir quantidade"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-quantity="${safe(item.key)}"
              data-change="1"
              aria-label="Aumentar quantidade"
            >+</button>
          </div>

          <button
            class="remove-item"
            type="button"
            data-remove-cart-item="${safe(item.key)}"
          >
            Remover
          </button>
        </div>
      </article>
    `).join("");
  }

  if (empty) {
    empty.hidden = cart.length > 0;
    empty.style.display = cart.length ? "none" : "";
  }

  if (footer) {
    footer.hidden = cart.length === 0;
    footer.style.display = cart.length ? "" : "none";
  }

  if (!itemsContainer) return;

  itemsContainer.querySelectorAll("[data-cart-quantity]").forEach(button => {
    button.addEventListener("click", () => {
      const item = cart.find(entry => entry.key === button.dataset.cartQuantity);
      if (!item) return;

      item.quantity = Math.max(
        1,
        Math.min(20, item.quantity + Number(button.dataset.change))
      );

      renderCart();
    });
  });

  itemsContainer.querySelectorAll("[data-remove-cart-item]").forEach(button => {
    button.addEventListener("click", () => {
      cart = cart.filter(item => item.key !== button.dataset.removeCartItem);
      renderCart();
      showToast("Item removido da sacola.");
    });
  });
}

function openCart() {
  const overlay = $("cartOverlay");
  const drawer = $("cartDrawer");

  if (!overlay || !drawer) return;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCart() {
  const overlay = $("cartOverlay");
  const drawer = $("cartDrawer");

  if (overlay) {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }

  if (drawer) {
    drawer.setAttribute("aria-hidden", "true");
  }

  if (!$("productModal")?.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
}

function setupCart() {
  ["openCart", "footerOpenCart"].forEach(id => {
    if ($(id)) $(id).addEventListener("click", openCart);
  });

  ["closeCart", "closeCartBackdrop", "continueShopping",
    "continueShoppingFooter"].forEach(id => {
    if ($(id)) $(id).addEventListener("click", closeCart);
  });

  if ($("sendOrder")) {
    $("sendOrder").addEventListener("click", sendOrder);
  }

  renderCart();
}

function sendOrder() {
  if (!cart.length) {
    showToast("Sua sacola está vazia.");
    return;
  }

  const lines = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;

    return [
      `${index + 1}. ${item.name}`,
      `   Cor: ${item.color}`,
      `   Tamanho: ${item.size}`,
      `   Quantidade: ${item.quantity}`,
      `   Valor: ${money(itemTotal)}`,
      item.lookName ? `   Combinação: ${item.lookName}` : ""
    ].filter(Boolean).join("\n");
  });

  const message = [
    "Olá! Quero fazer um pedido na Guerreiro Store.",
    "",
    "MEU PEDIDO:",
    "",
    ...lines,
    "",
    `TOTAL: ${money(getCartTotal())}`,
    "",
    "Por favor, confirmem a disponibilidade das peças."
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/* MENU PARA CELULAR */

function setupMobileMenu() {
  const button = $("menuToggle");
  const nav = $("mainNav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const opening = !nav.classList.contains("open");

    nav.classList.toggle("open", opening);
    button.setAttribute("aria-expanded", String(opening));
    button.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menu");
    });
  });
}

/* BOTÃO VOLTAR AO TOPO */

function setupBackToTop() {
  const button = $("backToTop");
  if (!button) return;

  const updateVisibility = () => {
    button.classList.toggle("show", window.scrollY > 450);
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* WHATSAPP FLUTUANTE E ANO */

function setupFooter() {
  if ($("year")) {
    $("year").textContent = String(new Date().getFullYear());
  }

  const whatsappLink = $("whatsappFloat");
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${WHATSAPP}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  }
}

/* FECHAR MODAIS COM ESC */

function setupKeyboard() {
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    closeProduct();
    closeCart();

    const nav = $("mainNav");
    const menuButton = $("menuToggle");

    if (nav) nav.classList.remove("open");
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
  });
}

/* INICIALIZAÇÃO */

function initializeStore() {
  setupCatalog();
  setupProductModal();
  setupCart();
  setupMobileMenu();
  setupBackToTop();
  setupFooter();
  setupKeyboard();

  renderProducts();
  renderLooks();
  renderBuilderProducts();
  updateBuilderTotal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeStore);
} else {
  initializeStore();
}
