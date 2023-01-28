import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

const NavBarStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexWrap: "wrap",
  padding: "16px 0",
} as React.CSSProperties;

const NavBar = () => {
  return (
    <>
      <nav style={NavBarStyled} role="navigation">
        <Logo />
        <Navigation />

        <button>Resume</button>
      </nav>
    </>
  );
};

export default NavBar;
