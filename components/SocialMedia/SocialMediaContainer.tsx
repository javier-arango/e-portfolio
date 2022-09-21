type Props = {
  children?: JSX.Element | JSX.Element[];
};

const SocialMediaContainer = ({ children }: Props) => {
  if (!children) return null;

  return (
    <div className="sm:flex sm:items-center sm:justify-center">{children}</div>
  );
};

export default SocialMediaContainer;
