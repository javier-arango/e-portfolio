type Props = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const NavContainer = ({ children, className }: Props) => {
  if (!children) return null;

  return (
    <nav
      className={`${className} p-3 rounded container flex flex-wrap justify-between items-center mx-auto`}
    >
      {children}
    </nav>
  );
};

export default NavContainer;
