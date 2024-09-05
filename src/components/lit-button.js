import { LitElement, css, html } from "lit";

import { classMap } from "lit/directives/class-map.js";

export class LitButton extends LitElement {
  static styles = css`
    button {
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      font-size: 14px;
      padding: 11px 20px;
      background-color: var(
        --my-sys-primary-container-color,
        var(--lit-button-primary-container-color, #1ea7fd)
      );
    }
    :host,
    button {
      color: var(
        --my-sys-on-primary-container-color,
        var(--lit-button-on-primary-container-color, white)
      );
    }
    :host([variant="secondary"]) button {
      background-color: var(
        --my-sys-secondary-container-color,
        var(--lit-button-secondary-container-color, transparent)
      );
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    :host([variant="secondary"]),
    :host([variant="secondary"]) button {
      color: var(
        --my-sys-on-secondary-container-color,
        var(--lit-button-on-secondary-container-color, #333)
      );
    }
    .small {
      font-size: 12px;
      padding: 10px 16px;
    }
    .large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `;
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String },
    backgroundColor: { type: String },
  };

  constructor() {
    super();
    this.variant = "primary";
    this.variant = "medium";
  }

  render() {
    return html`
      <button
        type="button"
        class=${classMap({
          small: this.size === "small",
          large: this.size === "large",
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("lit-button", LitButton);
