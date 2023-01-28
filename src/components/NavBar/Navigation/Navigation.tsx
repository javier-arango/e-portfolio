import Link from "next/link";
import { NavigationItem } from "./NavigationItem";
import { INavigationItem } from "../../../lib/interfaces";

const NavigationStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "32px",
} as React.CSSProperties;

const NavigationItemsData: INavigationItem[] = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/projects",
    name: "Projects",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];

const Navigation = () => {
  return (
    <>
      <ul style={NavigationStyled}>
        {NavigationItemsData.map((item) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </ul>
    </>
  );
};

export default Navigation;
