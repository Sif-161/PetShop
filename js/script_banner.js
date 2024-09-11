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