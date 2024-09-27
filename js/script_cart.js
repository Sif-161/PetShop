//script que adiciona os conteudos dos produtos do index no cart
const selectedProduct = localStorage.getItem('selectedProduct');
const prodPrice = localStorage.getItem('prodPrice');
const prodDetails = localStorage.getItem('prodDetails');

const productImages = {
    'prod-1': '../images/prod-1.webp',
    'prod-2': '../images/prod-2.webp',
    'prod-3': '../images/prod-3.webp',
    'prod-4': '../images/prod-4.webp',
    'prod-5': '../images/prod-5.jpg',
    'prod-6': '../images/prod-6.jpg',
    'prod-7': '../images/prod-7.webp',
};

document.getElementById('productImage').src = productImages[selectedProduct];
document.getElementById('productDetails').textContent = `${prodDetails}`;
document.getElementById('productPrice').textContent = `${prodPrice}`;

//script da quantidade de produtos
document.querySelectorAll('.amount button').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        let value = parseInt(input.value);
        if (this.textContent === '-' && value > 1) {
            input.value = value - 1;
        } else if (this.textContent === '+') {
            input.value = value + 1;
        }
    });
});

//script para remover item do carrinho
document.getElementById('delete').addEventListener('click', function (event){
    event.preventDefault();
    const product = this.closest('.products');
    product.remove();
});




//script de busca endereço
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

