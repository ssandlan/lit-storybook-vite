import { LitElement, css, html } from "lit";

import { classMap } from "lit/directives/class-map.js";
import { litButtonStyles } from "./lit-button-style";

export class LitButton extends LitElement {
  static styles = [litButtonStyles];
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String },
    backgroundColor: { type: String },
    position: { type: String },
    icon: { type: String },
    link: { type: String },
  };

  constructor() {
    super();
    this.variant = "primary";
    this.variant = "medium";
    this.position = "none";
    this.icon = "";
  }

  handleClick() {
    // Only _blank for now
    if (this.link) {
      window.open(this.link);
    }
  }

  render() {
    return html`
      <button
        type="button"
        class=${classMap({
          small: this.size === "small",
          large: this.size === "large",
        })}
        @click=${this.handleClick}
      >
        ${this.position === "left" && this.icon
          ? html`<feather-icon
              icon=${this.icon}
              size=${this.size}
            ></feather-icon>`
          : ""}
        <slot></slot>
        ${this.position === "right" && this.icon
          ? html`<feather-icon icon=${this.icon}></feather-icon>`
          : ""}
      </button>
    `;
  }
}

customElements.define("lit-button", LitButton);
