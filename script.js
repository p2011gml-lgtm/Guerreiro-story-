const products = [
  {id:1,name:'Camisa Dubai',category:'Camisas',color:'Preta',price:169.90,sizes:'P, M, G, GG',img:'produto-01.jpg'},
  {id:2,name:'Camisa Dubai',category:'Camisas',color:'Branca',price:169.90,sizes:'P, G, GG',img:'produto-02.jpg'},
  {id:3,name:'Camisa Dubai',category:'Camisas',color:'Verde',price:169.90,sizes:'P, G, GG',img:'produto-03.jpg'},
  {id:4,name:'Short Linho',category:'Shorts',color:'Branco',price:129.90,sizes:'P, G',img:'produto-04.jpg'},
  {id:5,name:'Short Linho',category:'Shorts',color:'Preto',price:129.90,sizes:'M, G',img:'produto-05.jpg'},
  {id:6,name:'Short Linho',category:'Shorts',color:'Marrom',price:129.90,sizes:'G',img:'produto-06.jpg'},
  {id:7,name:'Short Linho',category:'Shorts',color:'Rosa',price:129.90,sizes:'P',img:'produto-07.jpg'},
  {id:8,name:'Short Linho',category:'Shorts',color:'Bege',price:129.90,sizes:'P, M, G',img:'produto-08.jpg'},
  {id:9,name:'Short Mauricinho de Algodão',category:'Shorts',color:'Azul água',price:129.90,sizes:'M, G',img:'produto-09.jpg'},
  {id:10,name:'Short Sarja',category:'Shorts',color:'Azul',price:159.90,sizes:'P',img:'produto-10.jpg'},
  {id:11,name:'Short Sarja',category:'Shorts',color:'Branco',price:159.90,sizes:'G',img:'produto-11.jpg'},
  {id:12,name:'Short Sarja',category:'Shorts',color:'Marrom',price:159.90,sizes:'M',img:'produto-12.jpg'},
  {id:13,name:'Short Sarja',category:'Shorts',color:'Azul escuro',price:159.90,sizes:'M',img:'produto-13.jpg'},
  {id:14,name:'Bermuda Brim',category:'Bermudas',color:'Preta',price:159.90,sizes:'38, 40, 42, 44, 46',img:'produto-14.jpg'},
  {id:15,name:'Bermuda Brim',category:'Bermudas',color:'Cinza',price:159.90,sizes:'42, 44',img:'produto-15.jpg'},
  {id:16,name:'Bermuda Brim',category:'Bermudas',color:'Branca',price:159.90,sizes:'42, 44',img:'produto-16.jpg'},
  {id:17,name:'Bermuda Brim',category:'Bermudas',color:'Cinza claro',price:159.90,sizes:'38, 40',img:'produto-17.jpg'},
  {id:18,name:'Bermuda Brim',category:'Bermudas',color:'Bege clarinho',price:159.90,sizes:'38, 40, 42, 44',img:'produto-18.jpg'},
  {id:19,name:'T-shirt Texturizada',category:'T-shirts',color:'Preta',price:119.90,sizes:'M, G, GG',img:'produto-19.jpg'},
  {id:20,name:'T-shirt Tricô',category:'T-shirts',color:'Consultar cores',price:119.90,sizes:'M e outros conforme estoque',img:'produto-20.jpg'},
  {id:21,name:'T-shirt Algodão',category:'T-shirts',color:'Variadas',price:69.90,sizes:'P, M, G, GG',img:'produto-21.jpg'},
  {id:22,name:'Regata',category:'Regatas',color:'Variadas',price:87.00,sizes:'Consultar disponibilidade',img:'produto-22.jpg'}
];

const looks = [
  {name:'Clássico urbano',items:[1,4]},
  {name:'Minimalista claro',items:[2,8]},
  {name:'Contraste moderno',items:[1,9]},
  {name:'Casual elegante',items:[19,14]},
  {name:'Neutro sofisticado',items:[19,18]},
  {name:'Essencial do dia',items:[21,10]}
];

const brl = n => n.toLocaleString('pt-BR',{
  style:'currency',
  currency:'BRL'
});

// CORREÇÃO: as imagens estão na raiz do repositório.
const img = p => p.img;

let cart = [];
let chosen = new Set();
let activeFilter = 'Todos';

function productCard(p) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${img(p)}" alt="${p.name} ${p.color}" loading="lazy">
        <span class="tag">${p.color}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="desc">${p.color}</div>
        <div class="price">${brl(p.price)}</div>
        <div class="sizes">Tamanhos: ${p.sizes}</div>
        <button class="add-btn" data-add="${p.id}">
          ADICIONAR À SACOLA +
        </button>
      </div>
    </article>`;
}

function renderProducts() {
  const list = products.filter(p =>
    activeFilter === 'Todos' || p.category === activeFilter
  );

  document.getElementById('productGrid').innerHTML =
    list.map(productCard).join('');
}

function renderLooks() {
  document.getElementById('lookGrid').innerHTML = looks.map((l,i) => {
    const ps = l.items.map(id => products.find(p => p.id === id));
    const total = ps.reduce((s,p) => s + p.price, 0);
    const discounted = Math.round(total * 0.95 * 100) / 100;

    return `
      <article class="look-card">
        <div class="look-pics">
          ${ps.map(p => `
            <img src="${img(p)}"
                 alt="${p.name} ${p.color}"
                 loading="lazy">
          `).join('')}
        </div>
        <h3>${l.name}</h3>
        <p>${ps.map(p => p.name + ' ' + p.color).join(' + ')}</p>
        <div class="look-prices">
          <span class="old-price">${brl(total)}</span>
          <span class="discount-price">${brl(discounted)}</span>
        </div>
        <button class="add-btn" data-look="${i}">
          ADICIONAR LOOK COM 5% OFF +
        </button>
      </article>`;
  }).join('');
}

function renderBuilder() {
  document.getElementById('builderList').innerHTML =
    products.map(p => `
      <label class="builder-row">
        <img src="${img(p)}" alt="${p.name} ${p.color}" loading="lazy">
        <span>
          <strong>${p.name} — ${p.color}</strong>
          <small>${brl(p.price)} · Tam. ${p.sizes}</small>
        </span>
        <input type="checkbox"
          data-choice="${p.id}"
          ${chosen.has(p.id) ? 'checked' : ''}
          aria-label="Selecionar ${p.name}">
      </label>
    `).join('');

  updateBuilderTotal();
}

function updateBuilderTotal() {
  const total = products
    .filter(p => chosen.has(p.id))
    .reduce((s,p) => s + p.price, 0);

  document.getElementById('builderTotal').textContent = brl(total);
}

function addToCart(p, extra = {}) {
  cart.push({
    key: Date.now() + Math.random(),
    name: p.name + ' — ' + p.color,
    price: p.price,
    img: p.img,
    size: '',
    ...extra
  });

  renderCart();
  toast('Peça adicionada à sacola');
}

function addLook(index) {
  const l = looks[index];
  const ps = l.items.map(id => products.find(p => p.id === id));
  const total = ps.reduce((s,p) => s + p.price, 0);
  const discounted = Math.round(total * 0.95 * 100) / 100;

  cart.push({
    key: Date.now() + Math.random(),
    name: 'Look pronto: ' + l.name,
    price: discounted,
    img: ps[0].img,
    size: 'Desconto de 5%',
    items: ps.map(p => p.name + ' ' + p.color)
  });

  renderCart();
  toast('Look pronto adicionado com 5% de desconto');
}

function renderCart() {
  document.getElementById('cartCount').textContent = cart.length;

  document.getElementById('cartTotal').textContent = brl(
    cart.reduce((s,p) => s + p.price, 0)
  );

  document.getElementById('cartItems').innerHTML = cart.length
    ? cart.map(p => `
      <div class="cart-line">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <strong>${p.name}</strong>
          <small>${p.size || 'Peça individual'}</small>
          <small>${brl(p.price)}</small>
        </div>
        <button class="remove" data-remove="${p.key}">Remover</button>
      </div>
    `).join('')
    : '<p class="muted">Sua sacola está vazia. Escolha suas peças favoritas.</p>';
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function toast(message) {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.classList.add('show');

  setTimeout(() => t.classList.remove('show'), 2000);
}

document.addEventListener('click', e => {
  const addButton = e.target.closest('[data-add]');

  if (addButton) {
    const p = products.find(p => p.id === +addButton.dataset.add);
    if (p) addToCart(p);
  }

  const lookButton = e.target.closest('[data-look]');
  if (lookButton) addLook(+lookButton.dataset.look);

  const removeButton = e.target.closest('[data-remove]');
  if (removeButton) {
    cart = cart.filter(p => String(p.key) !== removeButton.dataset.remove);
    renderCart();
  }

  const filterButton = e.target.closest('[data-filter]');
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;

    document.querySelectorAll('.filter').forEach(button => {
      button.classList.toggle('active', button === filterButton);
    });

    renderProducts();
  }
});

document.addEventListener('change', e => {
  if (e.target.matches('[data-choice]')) {
    const id = +e.target.dataset.choice;

    if (e.target.checked) chosen.add(id);
    else chosen.delete(id);

    updateBuilderTotal();
  }
});

document.getElementById('addLook').addEventListener('click', () => {
  const ps = products.filter(p => chosen.has(p.id));

  if (!ps.length) {
    toast('Selecione pelo menos uma peça');
    return;
  }

  const total = ps.reduce((s,p) => s + p.price, 0);

  cart.push({
    key: Date.now() + Math.random(),
    name: 'Look personalizado: ' +
      ps.map(p => p.name + ' ' + p.color).join(' + '),
    price: total,
    img: ps[0].img,
    size: 'Montado pelo cliente',
    items: ps.map(p => p.name + ' ' + p.color)
  });

  renderCart();
  toast('Seu look foi adicionado à sacola');
  openCart();
});

document.getElementById('openCart').onclick = openCart;
document.getElementById('closeCart').onclick = closeCart;
document.getElementById('overlay').onclick = closeCart;

document.getElementById('menuBtn').onclick = () => {
  document.getElementById('nav').classList.toggle('open');
};

document.querySelectorAll('#nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('open');
  });
});

document.getElementById('sendOrder').addEventListener('click', () => {
  if (!cart.length) {
    toast('Adicione uma peça antes de enviar');
    return;
  }

  const name = document.getElementById('customerName').value.trim();
  const note = document.getElementById('customerNote').value.trim();
  const total = cart.reduce((s,p) => s + p.price, 0);

  const lines = cart.map((p,i) => {
    const items = p.items ? '\n   Peças: ' + p.items.join(', ') : '';
    return `${i+1}. ${p.name} — ${brl(p.price)}${p.size ? ' ('+p.size+')' : ''}${items}`;
  }).join('\n');

  const msg =
    `Olá! Quero fazer um pedido na Guerreiro Story.\n` +
    `${name ? 'Nome: ' + name + '\n' : ''}\n` +
    `Itens:\n${lines}\n\n` +
    `TOTAL: ${brl(total)}` +
    `${note ? '\nObservações: ' + note : ''}\n\n` +
    `Pode confirmar disponibilidade e formas de entrega/pagamento?`;

  // Configure abaixo o WhatsApp da loja com DDI e DDD,
  // somente números, sem +, espaços ou traços.
  const whatsapp = '';

  if (!whatsapp) {
    toast('Configure o número de WhatsApp da loja no script.js');
    return;
  }

  window.open(
    'https://wa.me/' + whatsapp + '?text=' + encodeURIComponent(msg),
    '_blank'
  );
});

renderProducts();
renderLooks();
renderBuilder();
renderCart();
