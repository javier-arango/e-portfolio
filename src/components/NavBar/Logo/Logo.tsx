import Link from "next/link";
import { ISvgIcon } from "../../../lib/interfaces";

// Logo SVG from Figma export
const LogoSVG = ({ width = 100, height = 48, color = "#f0f2f5" }: ISvgIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 930 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Website Logo</title>
      <path
        d="M59.0857 170.571C41.5872 170.571 28.1424 166.758 18.7517 159.229C9.36106 151.651 3.1139 139.429 0 122.563L35.1146 117.429C36.554 126.131 39.2273 132.536 43.1442 136.691C47.0611 140.896 52.4563 142.998 59.3206 142.998C66.3513 142.998 71.6884 140.651 75.3213 135.958C78.9639 131.265 80.7755 124.518 80.7755 115.767V34.4169H15.1878V0H116.017V114.936C116.017 132.438 111.023 146.078 101.035 155.856C91.0472 165.682 77.0641 170.571 59.0857 170.571Z"
        fill={color}
      />
      <path
        d="M567.413 0.0083046H524.542V162.193H567.413V0.0083046Z"
        fill={color}
      />
      <path
        d="M741.136 0.0083046H614.991V34.4166H741.136V0.0083046Z"
        fill={color}
      />
      <path d="M741.136 125.541H614.991V159.95H741.136V125.541Z" fill={color} />
      <path
        d="M741.136 62.6606H614.991V92.8341H741.136V62.6606Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M322.173 0.0083046H371.025L391.01 45.794L365.264 103.924L322.173 0.0083046Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M254.015 0.0083046L322.173 162.189H277.97L229.046 45.794L180.129 162.189H135.923L204.089 0.0083046H254.015Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M500.225 0.00830269H451.319L379.805 162.189H428.358L500.225 0.00830269Z"
        fill={color}
      />
      <path
        d="M780.357 26.3669V0.00593185H861.389C880.733 0.00593185 895.654 4.16585 906.171 12.4946C916.679 20.8234 921.934 32.7695 921.934 48.3509C921.934 59.7092 918.714 69.512 912.266 77.7594C905.828 86.0068 897.11 91.4416 886.141 94.0461L930 162.196H882.578L848.982 111.997H827.007L826.148 162.196H780.357V74.2506H850.058H858.749C868.262 74.2506 875.47 72.0983 880.389 67.8028C885.3 63.5073 887.75 57.4844 887.75 49.7344C887.75 34.153 877.776 26.3669 857.826 26.3669H850.058H780.357Z"
        fill={color}
      />
    </svg>
  );
};

const LogoStyled = {
  display: "flex",
  alignItems: "center",
} as React.CSSProperties;

/**
 * This function renders a link to the home page of the website.
 * @param width - width of the logo in pixels
 * @param height - height of the logo in pixels
 * @param color - color of the logo
 * @returns Logo component
 */
const Logo = ({ width, height, color }: ISvgIcon) => {
  return (
    <div style={LogoStyled}>
      <Link href={"/"}>
        <LogoSVG width={width} height={height} color={color} />
      </Link>
    </div>
  );
};

export default Logo;
