class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
            <h1 class="header__title">
                Just Eat It
            </h1>
            <button aria-label="humburger button" id="menu" class="header__menu">☰</button>
            <nav id="drawer" class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#/home" >Home</a></li>
                    <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav__item"><a href="https://github.com/muafa7">About Us</a></li>
                </ul>
            </nav>
        </header>`;
  }
}

customElements.define('app-bar', AppBar);
