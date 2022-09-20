import Link from "next/link";
import Image from "next/image";

export type LogoProps = {
  image: string;
  alt: string;
  destination: string;
  width: number;
  height: number;
};

const Logo = ({ image, alt, destination, width, height }: LogoProps) => {
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
