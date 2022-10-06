import { NavContainer, Logo, NavItemContainer, NavItem } from "./Navbar/index";

import { ILogo, INavItem } from "../model/index";

const navLogo: ILogo = {
  image: "/logo.svg",
  alt: "Javier Arango Logo",
  destination: "/",
  width: 100,
  height: 20,
};

const navItems: INavItem[] = [
  { name: "Home", destination: "/" },
  { name: "About", destination: "/about" },
  { name: "Experience", destination: "/experience" },
  { name: "Projects", destination: "/projects" },
  { name: "Contact", destination: "/contact" },
];

const Navbar = () => {
  return (
    <NavContainer>
      <Logo
        image={navLogo.image}
        alt={navLogo.alt}
        destination={navLogo.destination}
        width={navLogo.width}
        height={navLogo.height}
      />

      <NavItemContainer>
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

export default Navbar;
