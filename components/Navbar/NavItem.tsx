import { INavItem } from "../../model/interfaces";
import { LinkItem } from "../General";

interface Props extends INavItem {
  children?: JSX.Element | JSX.Element[];
}

const NavItem = ({ name, destination, children }: Props) => {
  if (!name && !children) return null;

  return (
    <>
      <li>
        {!children ? (
          <LinkItem name={name} destination={destination} />
        ) : (
          children
        )}
      </li>
    </>
  );
};

export default NavItem;
