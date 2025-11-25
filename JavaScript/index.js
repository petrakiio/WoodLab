// ===================================================================
// VARIÁVEIS DO DOM
// ===================================================================

const productsGrid = document.getElementById('products-grid');
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// ===================================================================
// LISTA DE PRODUTOS
// ===================================================================

const products = [
    {
        id: 1,
        name: "Cadeira Escandinava Hans",
        description: "Beleza minimalista. Construída em madeira maciça de Jequitibá, com assento em palha natural. Design ergonômico e acabamento impecável, perfeito para salas de jantar ou escritórios modernos.",
        price: 499.90,
        imgUrl: "https://lessul.com.br/cdn/shop/files/11_9cca8f07-9147-4262-bb1f-b8cb978d6e9f.jpg?v=1756753448&width=1445"
    },
    {
        id: 2,
        name: "Mesa de Jantar Rústica 'Fazenda'",
        description: "Peça central de alto impacto. Tampo robusto de madeira de demolição, tratado com óleo mineral para máxima durabilidade e toque aveludado. Ideal para quem busca um estilo rústico-contemporâneo e refeições memoráveis.",
        price: 2850.00,
        imgUrl: "https://www.madeirado.com.br/cdn/shop/files/0_9_grande.jpg?v=1714571241"
    },
    {
        id: 3,
        name: "Cômoda Vintage 'Retrô 50'",
        description: "Charme e organização. Com 5 gavetas espaçosas e corrediças telescópicas, esta cômoda resgata o estilo vintage com pés palito e puxadores em metal escovado. Acabamento em laca acetinada.",
        price: 1200.50,
        imgUrl: "https://img.olx.com.br/images/24/245595769727278.webp"
    },
    {
        id: 4,
        name: "Estante Modular Industrial",
        description: "Versatilidade e design. Estrutura em aço carbono com pintura eletrostática e prateleiras ajustáveis em madeira Pinus tratada. Crie a configuração perfeita para livros, plantas ou objetos de decoração.",
        price: 950.00,
        imgUrl: "https://http2.mlstatic.com/D_Q_NP_2X_904124-MLB47289260999_082021-E-estante-modular-3-prateleiras-madeira-de-pinus-barata.webp"
    },
    {
        id: 5,
        name: "Poltrona Externa 'Oásis'",
        description: "Madeira Teca de alta densidade, naturalmente resistente à água, pragas e intempéries. Almofadas removíveis com tecido impermeável. Conforto e elegância para varandas, jardins e áreas de lazer.",
        price: 1599.99,
        imgUrl: "/Imagens/poltrona.webp"
    },
    {
        id: 6,
        name: "Cama King Size 'Freijó Elegance'",
        description: "Noites de descanso com luxo e sofisticação. Estrutura maciça em madeira de Freijó com cabeceira imponente. Design elegante que transforma o quarto em um refúgio acolhedor.",
        price: 3500.00,
        imgUrl: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg"
    },
    {
        id: 7,
        name: "Mesa Lateral Geométrica 'Hexa'",
        description: "Toque contemporâneo. Base com design geométrico vazado e tampo redondo em madeira maciça. Uma peça compacta e moderna para apoiar livros, bebidas ou luminárias na sala de estar.",
        price: 320.00,
        imgUrl: "https://marcenariabichodomato.com.br/cdn/shop/files/MesinhaLateraldeMadeiraMacicaDemolicaoTronco01.jpg?v=1743628400&width=1200"
    },
    {
        id: 8,
        name: "Banco de Jardim Reforçado",
        description: "Durabilidade e beleza para seu espaço verde. Feito em Eucalipto tratado (Autoclave), resistente à umidade e insetos. Assento ergonômico, ideal para momentos de relaxamento ao ar livre.",
        price: 780.00,
        imgUrl: "https://lanci.eco.br/wp-content/uploads/2023/07/banco-de-jardim-com-brac.png"
    },
    {
        id: 9,
        name: "Armário Aéreo de Cozinha 'Max Space'",
        description: "Otimize o espaço vertical da sua cozinha. Portas de correr suaves e silenciosas, perfeitas para ambientes compactos. Amplo espaço interno para louças e despensa. Design clean e funcional.",
        price: 1150.00,
        imgUrl: "https://img.olx.com.br/thumbs700x500/36/366528772144928.webp"
    },
    {
        id: 10,
        name: "Balcão para Bar 'Pub Industrial'",
        description: "Crie seu próprio bar em casa. Combinação autêntica de madeira de Pallet rústica e estrutura industrial em metal. Inclui prateleiras internas para garrafas e utensílios. Perfeito para receber amigos.",
        price: 1800.00,
        imgUrl: "https://http2.mlstatic.com/D_Q_NP_2X_690383-MLB48914522246_012022-E-balco-madeira-para-bar-pallet-com-osb.webp"
    },
    {
        id: 11,
        name: "Aparador 'Versatilità' em Madeira Maciça",
        description: "Peça versátil que se adapta a hall de entrada, sala de jantar ou corredor. Construído em madeira maciça, oferecendo estabilidade e longa vida útil. Ideal para expor objetos decorativos ou servir de apoio.",
        price: 499.90,
        imgUrl: "https://marcenariabichodomato.com.br/cdn/shop/files/Aparadorteresopolisprateleirabaixa4.webp"
    },
    {
        id: 12,
        name:"Cadeira Wishbone CH24 (Réplica)",
        description: "Um ícone do design moderno de Hans J. Wegner. Estrutura elegante em madeira e assento em fibra natural trançada. Conforto e história que elevam qualquer decoração.",
        price: 900.00,
        imgUrl:"https://cdn.vnda.com.br/1000x/desmobilia/2018/04/19/des01350-wishbone-16533.jpg"
    }
];
// ===================================================================
// FUNÇÃO DE RENDERIZAÇÃO DOS CARDS
// ===================================================================

function renderProducts(productList = products) {
    productsGrid.innerHTML = '';

    productList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.imgUrl}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 50)}...</p>
            <span class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
            <button class="view-details-btn">Ver Detalhes</button>
        `;

        card.querySelector('.view-details-btn').addEventListener('click', () => {
            openModal(product);
        });

        productsGrid.appendChild(card);
    });
}

// ===================================================================
// MODAL
// ===================================================================

function openModal(product) {
    modalBody.innerHTML = `
        <div class="modal-content-grid">
            <img src="${product.imgUrl}" class="modal-image">
            <div class="modal-text-content">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
            </div>
        </div>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// ===================================================================
// BUSCA
// ===================================================================

function filterProducts(term) {
    const t = term.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(t) ||
        p.description.toLowerCase().includes(t)
    );

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p class="no-results">Nenhum móvel encontrado.</p>`;
        return;
    }

    renderProducts(filtered);
}

// ===================================================================
// LISTENERS
// ===================================================================

document.addEventListener("DOMContentLoaded", () => renderProducts());

searchButton.addEventListener("click", () => {
    filterProducts(searchInput.value);
});

searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") filterProducts(searchInput.value);
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});
