import NavContainer from "./Header/NavContainer";
import Logo, { LogoProps } from "./Header/Logo";
import NavItemContainer from "./Header/NavItemContainer";
import NavItem, { NavItemProps } from "./Header/NavItem";

const navLogo: LogoProps = {
  image: "/logo.svg",
  alt: "Javier Arango Logo",
  destination: "/",
  width: 100,
  height: 20,
};

const navItems: NavItemProps[] = [
  { name: "Home", destination: "/" },
  { name: "About", destination: "/about" },
  { name: "Experience", destination: "/experience" },
  { name: "Projects", destination: "/projects" },
  { name: "Contact", destination: "/contact" },
];

const bgColor: string = "gray-900";

const Header = () => {
  return (
    <NavContainer bgColor={bgColor}>
      <Logo
        image={navLogo.image}
        alt={navLogo.alt}
        destination={navLogo.destination}
        width={navLogo.width}
        height={navLogo.height}
      />

      <NavItemContainer bgColor={bgColor}>
        {navItems.map((item) => (
          <NavItem
            name={item.name}
            destination={item.destination}
            key={item.name}
          />
        ))}
      </NavItemContainer>
    </NavContainer>
  );
};

export default Header;
