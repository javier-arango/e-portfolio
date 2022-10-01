import { useState } from "react";

const showMenuIcons = (isHidden: boolean): JSX.Element => {
  return (
    <>
      {!isHidden ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      )}
    </>
  );
};

type Props = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const NavItemContainer = ({ children, className }: Props) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  if (!children) return null;

  return (
    <>
      {/* Show Menu Burger for Mobile */}
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
        onClick={() => setIsMenuHidden(!isMenuHidden)}
      >
        {/* Show Menu Icons When is in Mobile */}
        {showMenuIcons(isMenuHidden)}
      </button>

      {/* Nav Bar Items Container */}
      <div
        className={`${
          isMenuHidden ? "hidden" : "block"
        } w-full md:block md:w-auto ${className}`}
        id="navbar-solid-bg"
      >
        {/* Nav Bar Items list */}
        <ul
          className={`flex flex-col md:items-center sm:items-start mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent md:dark:bg-transparent`}
        >
          {children}
        </ul>
      </div>
    </>
  );
};

export default NavItemContainer;
