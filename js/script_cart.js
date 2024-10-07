//função que adiciona os conteudos dos produtos do index no cart
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const products = document.querySelector('.card');
    const main = document.querySelector('main');
    const containerCard = document.querySelector('.container-card');
    const containerAside = document.querySelector('.container-aside');

    products.innerHTML = '';

    const productImages = {
        'prod-1': '../images/prod/prod-1.webp',
        'prod-2': '../images/prod/prod-2.webp',
        'prod-3': '../images/prod/prod-3.webp',
        'prod-4': '../images/prod/prod-4.webp',
        'prod-5': '../images/prod/prod-5.jpg',
        'prod-6': '../images/prod/prod-6.jpg',
        'prod-7': '../images/prod/prod-7.webp',
    };

    // caso o carrinho esteja vazio
    if (cart.length === 0) {
        containerCard.remove();
        containerAside.remove();
        main.innerHTML = `
            <i class="bi bi-bag-fill"></i>
            <h1>Seu carrinho está vazio</h1>
            <h2>Aproveite para adicionar produtos!</h2>
            <button id="btnBack">Voltar para o inicio</button>
        `;
        const i = main.querySelector('i');
        i.style.cssText = `
            color: rgba(79,32,150,255);
            font-size: 5em;
        `;
        const button = main.querySelector('button');
        button.style.cssText = `
            border-radius: 8px;
            cursor: pointer;
            background-color: rgba(245, 229, 253, 255);
            border-color: rgba(234, 216, 250, 255);
            color: rgba(120, 92, 186, 255);
            font-size: medium;
            padding: 0.5%;
            width: 30%;
            transition: background-color 0.2s, color 0.2s;
        `;

        if (window.innerWidth <= 768) {
            main.style.marginTop = '20%';
            button.style.width = '80%';
        }
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgba(245, 229, 253, 255)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#f5e5fd7a';
        });

        main.style.cssText = `
            align-items: center;
            flex-direction: column;
            text-align: center;
        `;

        const btnBack = document.getElementById('btnBack');

        btnBack.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
        updateCartCount();
        return;
    }

    // cria os elementos para cada produto no carrinho
    cart.forEach((product, index) => {
        const productElement = document.createElement('article');
        productElement.classList.add('card-item');

        // inseri o HTML do produto no 'article'
        productElement.innerHTML = `
            <figure class="products">
                <img src="${productImages[product.id]}" id="productImage" alt="${product.details}">
                <figcaption id="productDetails">${product.details}</figcaption>
                <div class="amount">
                    <button onclick="changeQuantity(${index}, '-')">-</button>
                    <input type="text" id="productQuantity" maxlength="3" value="${product.quantity}">
                    <button onclick="changeQuantity(${index}, '+')">+</button>
                </div>
                <b><span id="productPrice">R$${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span></b>
                <button title="Remover do carrinho" id="delete" onclick="removeFromCart(${index})">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </figure>
        `;
        products.appendChild(productElement);
    });
    console.log(cart.length);
}


//função para remover item do carrinho
function removeFromCart(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateOrderSummary();
    updateCartCount();
}

//função da quantidade de produtos
function changeQuantity(index, operator){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (operator ==='+'){
        cart[index].quantity++;
    }else if(operator === '-' && cart[index].quantity > 1){
        cart[index].quantity--;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateOrderSummary();
    updateCartCount();
}


//função do resumo de pedidos
function updateOrderSummary(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    let itens = 0;

    cart.forEach(product => {
        subtotal += product.price * product.quantity;
        itens += product.quantity;
    });

    let freight = 20.24;
    let total = subtotal + freight;

    document.getElementById('prodItens').innerText= `Produtos (${itens} itens)`;
    document.getElementById('prodValue'). innerText= `R$${subtotal.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('subtotalValue').innerText = `R$${subtotal.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('freightValue').innerText = `R$${freight.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('totalValue').innerText = `R$${total.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
}

//funcão para atualizar o contador do carrinho
function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.querySelector('.cart-count');

    const totalItens = cart.reduce((sum, product) => sum + product.quantity, 0);

    if(totalItens > 0){
        cartCountElement.textContent = totalItens;
        cartCountElement.style.display = 'inline-block';
    }else{
        cartCountElement.style.display = 'none';
    }
}

//função de busca endereço
function buscarEndereco() {
    var cep = document.getElementById('cepInput').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('endereco').innerText = "CEP não encontrado.";
            } else {
                var endereco = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
                document.getElementById('endereco').innerText = endereco;
            }
        })
        .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    updateOrderSummary();
    updateCartCount();
    loadCart();
});

