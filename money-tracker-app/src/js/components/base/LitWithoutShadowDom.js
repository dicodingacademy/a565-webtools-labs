import { LitElement } from 'lit';

class LitWithoutShadowDom extends LitElement {
  createRenderRoot() {
    return this;
  }
}

export default LitWithoutShadowDom;
