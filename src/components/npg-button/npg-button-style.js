import { css } from "lit-element";

export const npgButtonStyles = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    line-height: 1;
    font-size: 14px;
    padding: 11px 20px;
    background-color: #1ea7fd;
    );
  }
  :host,
  button {
    color: white;
    );
  }

  :host([variant="secondary"]) button {
    background-color: transparent;
    );
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  :host([variant="secondary"]),
  :host([variant="secondary"]) button {
    color: #333;
    );
  }

  :host([variant="tertiary"]) button {
    background-color: #ccffff;
    );
    }
    :host([variant="tertiary"]),
    :host([variant="tertiary"]) button {
    color: #002255;
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
