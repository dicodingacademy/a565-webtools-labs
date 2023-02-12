import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputRadioWithValidation extends LitWithoutShadowDom {
  static properties = {
    listRadio: { type: Array, reflect: true },
    value: { type: String, reflect: true },
    name: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.listRadio = [];
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('name')) {
      throw new Error(`Atribut "name" harus diterapkan pada elemen ${this.localName}`);
    }

    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      ${this.listRadio.map((item) => {
        return html`
          <radio-item
            inputId=${item.inputId}
            value=${item.value}
            name=${this.name}
            caption=${item.caption}
            ?required=${item.required}
            ?checked=${item.checked}
            @input=${(e) => (this.value = e.target.value)}
          />
        `;
      })}
      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }

  async updated(_changedProperties) {
    super.updated(_changedProperties);
    await this.updateComplete;

    this.listRadio.forEach((item) => {
      if (item.checked) this.value = item.value;
    });
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('input-radio-with-validation', InputRadioWithValidation);
