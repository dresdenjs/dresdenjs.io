import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('ddjs-logo')
export class DdjsLogo extends LitElement {
  @property({ type: Number, reflect: true })
  size = 24;

  override render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.4 28" style="${styleMap({ height: `${this.size}px` })}">
        <g fill="#cb3837">
          <path
            d="M56 16h3v3h-3Zm-25 6h3V9h6v16h-9ZM62 9h6v10h-6Zm-19 7h3V6h10v3h-4v10h-9ZM71 6h12v13H71ZM3 6h6V3h6v16H3Zm16 0h6V3h6v16H19Zm15-3h6v3h-6Zm28 0h6v3h-6Zm-3-3v3H43V0H22v3h-3V0H6v3H0v19h28v6h15v-6h43V3H71V0Z"
          ></path>
          <path d="M6 9h3v6H6z"></path>
          <path d="M22 9h3v6h-3z"></path>
          <path d="M74 9h3v6h-3z"></path>
        </g>
        <g fill="#fff">
          <path d="M40 25h-9v-3h3V9h6Z"></path>
          <path d="M34 3h6v3h-6z"></path>
          <path d="M52 19h-9v-3h3V6h10v3h-4Z"></path>
          <path d="M56 16h3v3h-3z"></path>
          <path d="M62 9h6v9h-6z"></path>
          <path d="M62 3h6v3h-6z"></path>
          <path d="M9 3v3H3v13h12V3Zm0 13H6V9h3Z"></path>
          <path d="M25 3v3h-6v13h12V3Zm0 13h-3V9h3Z"></path>
          <path d="M71 19h12V6H71Zm6-3h-3V9h3Z"></path>
        </g>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ddjs-logo': DdjsLogo;
  }
}
