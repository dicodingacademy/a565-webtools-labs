import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputGroupWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },

    inputGroupText: { type: String, reflect: true },
    inputGroupIcon: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('type')) {
      throw new Error(`Atribut "type" harus diterapkan pada elemen ${this.localName}`);
    }

    if (!(this.hasAttribute('inputGroupText') || this.hasAttribute('inputGroupIcon'))) {
      throw new Error(
          `Salah satu dari atribut harus diterapkan pada elemen ${this.localName}: inputGroupText dan inputGroupIcon`,
      );
    }

    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
          `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <div class="input-group has-validation">
        <span class="input-group-text d-flex gap-2">${this.inputGroupTextTemplate()}</span>
        <input
          class="form-control"
          id=${this.inputId || nothing}
          type=${this.type}
          value=${this.value || nothing}
          ?required=${this.required}
        />

        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }

  inputGroupTextTemplate() {
    let inputGroupIconTemplate = '';
    if (this.inputGroupIcon) {
      inputGroupIconTemplate = html`<i class="bi ${this.inputGroupIcon}"></i>`;
    }

    let inputGroupTextTemplate = '';
    if (this.inputGroupText) {
      inputGroupTextTemplate = html`${this.inputGroupText}`;
    }

    return html`${inputGroupIconTemplate}${inputGroupTextTemplate}`;
  }

  _validFeedbackTemplate() {
    if (this.validation) {
      if (this.validFeedbackMessage) {
        return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
      }
    }

    return html``;
  }
}

customElements.define('input-group-with-validation', InputGroupWithValidation);
