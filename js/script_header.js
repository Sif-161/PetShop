function headerMobile() {
    const header = document.querySelector('header');

    if (!header) {
        console.warn('Elemento <header> não encontrado na página.');
        return;
    }

    const windowWidth = window.innerWidth;
    const currentPath = window.location.pathname.toLowerCase();

    console.log("Largura da janela:", windowWidth);
    console.log("Caminho da URL:", currentPath);

    if (windowWidth <= 768) {
        if (currentPath === '/pages/cart.html') {
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
        } else if (currentPath === '/index.html') {
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
                    <li class="icons">
                        <i class="bi bi-brightness-high" id="mode-theme"></i>
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
}

headerMobile();
