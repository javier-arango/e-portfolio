import Link from "next/link";
import Image from "next/image";

import { ILogo } from "../../model/interfaces";

const Logo = ({ image, alt, destination, width, height }: ILogo) => {
  return (
    <>
      {/* Page Logo */}
      <Link href={destination}>
        <a className="flex items-center mr-3 h-6 sm:h-10">
          <Image src={image} alt={alt} width={width} height={height} />
        </a>
      </Link>
    </>
  );
};

export default Logo;
