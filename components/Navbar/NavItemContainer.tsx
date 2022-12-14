import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

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
        className="inline-flex justify-center items-center ml-3 text-gray-400 
        rounded-lg md:hidden hover:text-gray-900 focus:outline-none 
        focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
        onClick={() => setIsMenuHidden(!isMenuHidden)}
      >
        {/* Show Menu Icons When is in Mobile */}
        {!isMenuHidden ? <CgClose size={30} /> : <CgMenuRight size={30} />}
      </button>

      {/* Nav Bar Items Container */}
      <div
        className={`${
          isMenuHidden ? "hidden" : "block"
        } ${className} w-full md:block md:w-auto`}
        id="navbar-solid-bg"
      >
        {/* Nav Bar Items list */}
        <ul
          className={`flex flex-col md:items-center sm:items-start mt-4 rounded-lg 
          md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
          md:border-0 md:bg-transparent md:dark:bg-transparent`}
        >
          {children}
        </ul>
      </div>
    </>
  );
};

export default NavItemContainer;
