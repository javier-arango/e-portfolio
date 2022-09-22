import { useState } from "react";

const showMenuIcons = (isHidden: boolean): JSX.Element => {
  return (
    <>
      {!isHidden ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </>
  );
};

type Props = {
  children?: JSX.Element | JSX.Element[];
  bgColor?: string;
};

const NavItemContainer = ({ children, bgColor }: Props) => {
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
        } w-full md:block md:w-auto`}
        id="navbar-solid-bg"
      >
        {/* Nav Bar Items list */}
        <ul
          className={`${
            bgColor ? `dark:bg-${bgColor}` : "dark:bg-gray-900"
          } flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700`}
        >
          {children}
        </ul>
      </div>
    </>
  );
};

export default NavItemContainer;
