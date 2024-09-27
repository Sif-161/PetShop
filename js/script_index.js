//script do banner
let currentImageIndex = 0;
const images = [
    "../images/banner-1.webp",
    "../images/banner-2.webp",
    "../images/banner-3.gif",
    "../images/banner-4.webp",
    "../images/banner-5.webp"
];
const imgElement = document.getElementById("banner");

setInterval(() =>{
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}, 9000);

//script dos produtos
function selectProduct(productName){
    //obtém o preço diretamente pelo id da tag relacionado ao produto
    const priceElement = document.getElementById(`price-${productName}`);
    const detailsElement = document.getElementById(`details-${productName}`);

    //extrai o texto dentro do tag
    let productPrice = priceElement.innerText.trim();
    let productDetails = detailsElement.innerText.trim();
    
    //armazena os dados do produto no localStorage
    localStorage.setItem('selectedProduct', productName);
    localStorage.setItem('prodPrice', productPrice);
    localStorage.setItem('prodDetails', productDetails);

}