import { IButton } from "../../../lib";
import styles from "./Button.module.css";

const Button = ({
  label,
  type = "button",
  variant = "primary",
  onClick,
  className,
}: IButton) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${className} ${styles.button} ${
          variant === "primary" ? styles.primaryButton : styles.secondaryButton
        }`}
      >
        <p className="body-md">{label}</p>
      </button>
    </>
  );
};

export default Button;
