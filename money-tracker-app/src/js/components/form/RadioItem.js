import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class RadioItem extends LitWithoutShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    name: { type: String, reflect: true },
    value: { type: String, reflect: true },
    caption: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
    checked: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.required = false;
    this.checked = false;
  }

  render() {
    return html`
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="${this.name}"
          id="${this.inputId}"
          value="${this.value}"
          ?required=${this.required}
          ?checked=${this.checked}
          @input=${(e) => (this.value = e.target.value)}
        />

        <label class="form-check-label" for="${this.inputId}">${this.caption}</label>
      </div>
    `;
  }
}

customElements.define('radio-item', RadioItem);
