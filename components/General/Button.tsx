import { IButton } from "../../model";

interface Props extends IButton {
  children?: JSX.Element;
}

const Button = ({
  cta,
  onClick,
  children,
  className,
  width = 40,
  btRadius = "lg",
  bgColor = "white",
  iconSide = "left",
  textColor = "gray-900",
}: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} bg-${bgColor} rounded-${btRadius} py-3 shadow-lg uppercase text-${textColor} w-${width} hover:scale-110 transition duration-300`}
      >
        <div className="flex items-center justify-center">
          {/* Icon to the left */}
          {!children ? null : iconSide === "left" ? children : null}

          {/* CTA */}
          <p
            className={`${
              !children ? null : iconSide === "left" ? "pl-3" : "pr-3"
            } font-bold tracking-wider`}
          >
            {cta}
          </p>

          {/* Icon to the right */}
          {!children ? null : iconSide === "right" ? children : null}
        </div>
      </button>
    </>
  );
};

export default Button;
