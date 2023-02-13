import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="${msg(`Dasbor`)}" to="/"></nav-link>
        <nav-link content="${msg(`Tambah Data`)}" to="/transactions/add.html"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link content="${msg(`Masuk`)}" to="#" id="loginMenu"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
