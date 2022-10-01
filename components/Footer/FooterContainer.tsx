type Props = {
  children?: JSX.Element | JSX.Element[];
};

const FooterContainer = ({ children }: Props) => {
  if (!children) return null;

  return (
    <>
      <footer className="p-4 rounded-lg shadow md:px-6 md:py-8">
        {children}
      </footer>
    </>
  );
};

export default FooterContainer;
