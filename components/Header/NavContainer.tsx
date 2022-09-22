type Props = {
  children?: JSX.Element | JSX.Element[];
  bgColor?: string;
};

const NavContainer = ({ children, bgColor }: Props) => {
  if (!children) return null;

  return (
    <nav
      className={`sticky top-0 ${
        bgColor ? `dark:bg-${bgColor}` : "dark:bg-gray-900"
      } p-3 bg-gray-50 rounded border-gray-200 dark:border-gray-700`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {children}
      </div>
    </nav>
  );
};

export default NavContainer;
