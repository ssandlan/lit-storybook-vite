import { html, svg } from "lit";
import "../components/npg-button/npg-button.js";
import "../components/icon/feather-icon.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  size,
  label,
  iconPosition,
  iconName,
  link,
  onClick,
}) => {
  return html`
    <npg-button
      variant=${variant}
      size=${size}
      position=${iconPosition}
      icon=${iconName}
      link=${link}
      @click=${onClick}
    >
      ${label}
    </npg-button>
  `;
};
