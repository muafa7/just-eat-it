class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <div class="hero__container">
            <picture>
                <source type="image/webp"
                        srcset="./images/heros/hero-image_2-small.webp"
                        media="(max-width: 600px)">
                <source type="image/webp"
                        srcset="./images/heros/hero-image_2-large.webp"
                        media="(min-width: 601px)">
                <img src='./images/heros/hero-image_2-large.jpg' class="hero__image lazyload" alt="hero"
                    srcset="./images/heros/hero-image_2-small.jpg 480w, ./images/heros/hero-image_2-large.jpg 800w"
                    sizes="(max-width: 600px) 480px, 800px">
            </picture>
          </div>
          <div class="hero__inner">
              <h1 class="hero__tagline">Just Eat What You Want</h1>
          </div>
        </div>`;
  }
}

customElements.define('app-hero', AppHero);
