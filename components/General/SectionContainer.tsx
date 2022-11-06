type Props = {
  className?: string;
  children?: JSX.Element | JSX.Element[];
};

const SectionContainer = ({ children, className }: Props) => {
  if (!children) return null;

  return (
    <>
      <div
        className={`${className} container flex flex-wrap justify-between items-center mx-auto h-screen`}
      >
        <div className="container mx-auto px-6">{children}</div>
      </div>
    </>
  );
};

export default SectionContainer;
