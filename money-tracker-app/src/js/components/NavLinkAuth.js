import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import CheckUserAuth from '../pages/auth/check-user-auth';
import Auth from '../network/auth';

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
          <div class="me-2 d-inline-block">
            <img
              id="imgUserLogged"
              style="width: 30px;height: 30px"
              class="img-fluid rounded-pill"
              src="https://ui-avatars.com/api/?name=User%20Name&background=random"
              alt="User Name"
            />
          </div>
          <span id="nameUserLogged"></span>
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}>${msg(`Keluar`)}</a>
        </ul>
      </li>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();

    try {
      const response = Auth.logout();

      CheckUserAuth.checkLoginState();
    } catch (error) {
      console.error(error);
    }
  }
}

customElements.define('nav-link-auth', NavLinkAuth);
