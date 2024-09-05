import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import "../components/lit-button.js";

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
  onClick,
}) => {
  return html`
    <lit-button
      .variant=${primary ? "primary" : "secondary"}
      .size=${size}
      style=${styleMap({
        "--lit-button-primary-container-color": primaryContainerColor,
        "--lit-button-on-primary-container-color": colorOnPrimaryContainer,
        "--lit-button-secondary-container-color": secondaryContainerColor,
        "--lit-button-on-secondary-container-color": colorOnSecondaryContainer,
      })}
      @click=${onClick}
    >
      ${label}
    </lit-button>
  `;
};
