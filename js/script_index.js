//script do banner
let currentImageIndex = 0;
const images = [
    "../images/banner/banner-1.webp",
    "../images/banner/banner-2.webp",
    "../images/banner/banner-3.gif",
    "../images/banner/banner-4.webp",
    "../images/banner/banner-5.webp"
];
const imgElement = document.getElementById("banner");

setInterval(() =>{
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}, 7000);

//função dos produtos
function selectProduct(productName){
    //obtém o preço diretamente pelo id da tag relacionado ao produto
    const priceElement = document.getElementById(`price-${productName}`);
    const detailsElement = document.getElementById(`details-${productName}`);

    //extrai o texto dentro do tag
    let productPrice = parseFloat(priceElement.innerText.replace("R$", "").replace(",", ".").trim());
    let productDetails = detailsElement.innerText.trim();

    const product = {
        id: productName,
        price: productPrice,
        details: productDetails,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productExist = cart.find(item => item.id === productName);

    if(!productExist){
        cart.push(product);
    }else{
        productExist.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Carrinho atualizado:', cart); 

    updateCartCount();
}

//função para o comportaento da header
function hideNavOnScroll (){
    var nav = document.querySelector('nav');
    var scrollTop = scrollY || document.documentElement.scrollTop;

    if(scrollTop > 150){
        nav.style.opacity = '0';
        nav.style.transform = 'translateY(-100%)';
        nav.style.pointerEvents = 'none';
    }else{
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)';
        nav.style.pointerEvents = 'auto'; 
    }
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

document.querySelector('#mode-theme').addEventListener('click', () => {
    const body = document.querySelector('body');
    const button = document.querySelector('#mode-theme');
    const heroSection = document.querySelector('.hero-section');
    const container = document.querySelector('.container');
    const feedback = document.querySelector('.feedback');



    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        heroSection.style.backgroundColor = 'black';
        container.style.backgroundColor = 'black';
        feedback.style.backgroundColor = 'black';
        button.className = 'bi bi-brightness-high-fill';
    }else{
        heroSection.style.backgroundColor = 'white';
        container.style.backgroundColor = 'white';
        feedback.style.backgroundColor = 'white';
        button.className = 'bi bi-brightness-high';
    }
});



window.onscroll = function (){
    hideNavOnScroll();  
};

window.onload = function () {
    updateCartCount();
};