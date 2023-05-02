class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="home-div">
                    <a class="home-header" href="index.html">
                        <img class="header-img" src="assets/img/potsu-avatar.png" alt="Potsu">
                        <p>Potsu</p>
                    </a>
                </div>
                <nav>
                    <div class="div-header">
                        <div class="pages-header">
                            <a class="page-header" href="docs.html">Docs</a>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('potsu-header', Header)