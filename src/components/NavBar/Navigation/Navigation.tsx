import { NavigationItem } from "./NavigationItem";
import { INavigationItem } from "../../../lib/interfaces";
import { navigationItemsData } from "../../../data";

const NavigationStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "32px",
} as React.CSSProperties;

const Navigation = () => {
  return (
    <>
      <ul style={NavigationStyled}>
        {navigationItemsData.map((item: INavigationItem) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </ul>
    </>
  );
};

export default Navigation;
