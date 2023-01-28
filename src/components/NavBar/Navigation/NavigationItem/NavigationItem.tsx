import styles from "./NavigationItem.module.css";
import Link from "next/link";
import { INavigationItem } from "../../../../lib/interfaces";

/**
 * NavigationItem Component
 *
 * @param   props     to, name, className
 * @returns           Navigation Item
 */
const NavigationItem = ({
  to = "/",
  name,
  className = "body-md",
}: INavigationItem) => {
  return (
    <>
      <li className={styles.navigationItem}>
        <Link href={to} className={className}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavigationItem;
