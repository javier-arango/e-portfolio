import { Button } from "../SharedComponents";
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
      <nav className="margin-responsive" style={NavBarStyled} role="navigation">
        <Logo />
        <Navigation />
        <Button label="Resume" onClick={() => console.log("Learn More")} />
      </nav>
    </>
  );
};

export default NavBar;
