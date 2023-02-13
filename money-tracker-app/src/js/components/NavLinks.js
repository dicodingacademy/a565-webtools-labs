import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="Dashboard" to="/"></nav-link>
        <nav-link content="Add Record" to="/transactions/add.html"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link content="Log In" to="#" id="loginMenu"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
