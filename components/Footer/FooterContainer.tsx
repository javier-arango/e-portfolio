type Props = {
  children?: JSX.Element | JSX.Element[];
};

const FooterContainer = ({ children }: Props) => {
  if (!children) return null;

  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        {children}
      </footer>
    </>
  );
};

export default FooterContainer;
