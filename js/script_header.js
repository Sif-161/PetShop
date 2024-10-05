function headerMobile() {
    const header = document.querySelector('header');
    console.log("Largura da janela:", window.innerWidth);
    console.log("Caminho da URL:", window.location.pathname);

    if (window.innerWidth <= 932 && window.location.pathname === '/pages/cart.html') {
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
    }else if(window.innerWidth <= 932 && window.location.pathname === '/index.html'){
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
        <nav>
            <ul class="navbar">
                <li><a href="#">Cachorros</a></li>
                <li><a href="#">Gatos</a></li>
                <li><a href="#">Peixes</a></li>
                <li><a href="#">Outros Animais</a></li>
                <li><a href="#">Plano de Saúde</a></li>
                <li><a href="#">Serviços</a></li>
            </ul>
        </nav>
        `;
    }
}

headerMobile();


