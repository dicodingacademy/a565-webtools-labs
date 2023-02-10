import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinkAuth extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <div style="width: 35px;height: 35px" class="me-2 d-inline-block">
            <img id="imgUserLogged" class="img-fluid rounded-pill" src="" alt="" />
          </div>
          <span id="nameUserLogged"></span>
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" id="userLogOut">
            ${msg(`Keluar`)}
          </a>
        </ul>
      </li>
    `;
  }
}

customElements.define('nav-link-auth', NavLinkAuth);
