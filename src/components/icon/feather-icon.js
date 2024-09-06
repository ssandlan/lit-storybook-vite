import { LitElement, css, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import feather from "feather-icons";

export class FeatherIcon extends LitElement {
  static properties = {
    icon: { type: String },
    size: { type: String },
  };

  constructor() {
    super();
    this.icon = "";
    this.width = "16";
    this.height = "16";
  }

  render() {
    console.log(this.size);
    if (this.size === "small") {
      this.width = "12";
      this.height = "12";
    } else if (this.size === "medium") {
      this.width = "18";
      this.height = "18";
    } else if (this.size === "large") {
      this.width = "24";
      this.height = "24";
    }
    return html`
      ${this.icon
        ? unsafeHTML(
            feather.icons[`${this.icon}`].toSvg({
              height: this.height,
              width: this.width,
            })
          )
        : ""}
    `;
  }
}

customElements.define("feather-icon", FeatherIcon);
