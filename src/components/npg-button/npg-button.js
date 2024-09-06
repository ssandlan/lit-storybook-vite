import { LitElement, css, html } from "lit";

import { classMap } from "lit/directives/class-map.js";
import { npgButtonStyles } from "./npg-button-style";

export class NpgButton extends LitElement {
  static styles = [npgButtonStyles];
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
    this.size = "medium";
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
          medium: this.size === "medium",
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

customElements.define("npg-button", NpgButton);
