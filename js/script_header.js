function cartHeader() {
    const header = document.querySelector('header');

    if (window.innerWidth <= 430) {
        header.innerHTML = `
        <div class="container-menu">
            <ul class="menu">
                <li id="logo">
                    <a href="../index.html">
                        <img src="../images/logo.png" alt="logo">
                    </a>
                </li>
                <li class="icons">
                    <a href="../pages/contact.html" aria-label="Contato" title="Contato">
                        <i class="bi bi-telephone-fill"></i>
                    </a>
                </li>
                <li class="icons">
                    <a href="../pages/cart.html" aria-label="Carrinho" title="Carrinho">
                        <i class="bi bi-bag-fill"></i>
                        <span class="cart-count"></span>
                    </a>
                </li>
            </ul>
            <div id="search">
                <form action="/search" method="get">
                    <input type="text" name="q" placeholder="Pesquisar..." autocomplete="off">
                    <button type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </div>
        `;
    }
}

cartHeader();


