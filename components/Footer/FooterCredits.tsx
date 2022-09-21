export type CreditsProps = {
  name: string;
  link: string;
};

const FooterCredits = ({ name, link }: CreditsProps) => {
  return (
    <>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Created with &#9829; by{" "}
        <a
          className="hover:underline hover:text-white"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </span>
    </>
  );
};

export default FooterCredits;
