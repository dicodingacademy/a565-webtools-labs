import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ButtonLink extends LitWithoutShadowDom {
  static properties = {
    to: { type: String, reflect: true },
    content: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.classes = '';
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
    }

    if (!this.hasAttribute('content')) {
      throw new Error(`Atribut "content" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <a class="btn ${this.classes}" href=${this.to}>
        ${this._templateIcon()}${this.content}
      </a>
    `;
  }

  _templateIcon() {
    if (this.icon) {
      return html`<i class="bi ${this.icon} me-1"></i>`;
    }

    return html``;
  }
}

customElements.define('button-link', ButtonLink);
