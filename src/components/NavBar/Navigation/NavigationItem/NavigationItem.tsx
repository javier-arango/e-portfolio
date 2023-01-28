import styles from "./NavigationItem.module.css";
import Link from "next/link";
import { INavigationItem } from "../../../../lib/interfaces";
import { useRouter } from "next/router";

/**
 * NavigationItem Component
 *
 * @param   props     to, name, num, className
 * @returns           Navigation Item
 */
const NavigationItem = ({
  to = "/",
  name,
  num,
  className = "",
}: INavigationItem) => {
  const router = useRouter();

  return (
    <>
      <li className={className}>
        <Link
          href={to}
          className={`body-md ${
            router.pathname === to.toLowerCase()
              ? styles.navLinkActive
              : styles.navLink
          }`}
        >
          <span className={styles.navLinkNum} aria-hidden={true}>
            {`0${num}`}
          </span>
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavigationItem;
