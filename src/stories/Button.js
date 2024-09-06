import { html, svg } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "../components/lit-button/lit-button.js";
import feather from "feather-icons";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  primaryContainerColor = null,
  colorOnPrimaryContainer = null,
  secondaryContainerColor = null,
  colorOnSecondaryContainer = null,
  size,
  label,
  position,
  iconName,
  onClick,
}) => {
  let iconString = "";
  if (iconName) {
    iconString = feather.icons[`${iconName}`].toSvg();
  }

  return html`
    <lit-button
      .variant=${primary ? "primary" : "secondary"}
      .size=${size}
      @click=${onClick}
    >
      <feather-icon icon="phone" size="small"></feather-icon>
      ${label}
      ${position === "icon-right" && iconName ? unsafeHTML(iconString) : ""}
    </lit-button>
  `;
};
