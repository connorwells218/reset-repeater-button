import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class ResetRepeaterButton extends LitElement {
  createRenderRoot() {
    return this;
  }

  static getMetaConfig() {
    return {
      controlName: 'Reset Repeater Button',
      fallbackDisableSubmit: false,
      version: '1.0',
      groupName: 'Custom',
      iconUrl: 'repeating-section',
      properties: {
        targetCollection: {
          type: 'string',
          title: 'Repeating Section Name',
          description: 'Internal Name of the Repeating Section to clear'
        },
        buttonText: {
          type: 'string',
          title: 'Button Label',
          defaultValue: 'Reset'
        }
      }
    };
  }

  render() {
    return html`
      <button
        type="button"
        class="btn btn-medium nx-theme-input-1 save-button nx-theme-button-2 ng-star-inserted"
        @click="${this._onClick}">
        <span class="nf-button-content">${this.buttonText}</span>
      </button>
    `;
  }

  _onClick(e) {
    e.preventDefault();
    const coll = this.targetCollection;
    if (coll) {
      NWF$(`.nf-repeater[data-controlname="${coll}"] .nf-repeater-remove-row-button`)
        .each((_, btn) => NWF$(btn).click());
    } else {
      window.location.reload();
    }
  }
}


customElements.define('reset-repeater-button', ResetRepeaterButton);
