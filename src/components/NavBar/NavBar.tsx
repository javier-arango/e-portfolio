import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

const NavBarStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  flexWrap: "wrap",
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
