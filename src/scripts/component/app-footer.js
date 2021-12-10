class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<footer>Copyright © 2021 - Just Eat It</footer>';
  }
}

customElements.define('app-footer', AppFooter);
