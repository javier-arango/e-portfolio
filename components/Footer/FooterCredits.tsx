import { Alignment } from "../../model/types";
import { ICredits } from "../../model/interfaces";

type Props = {
  credits: ICredits;
  alignItems?: Alignment;
};

const FooterCredits = ({ credits, alignItems }: Props) => {
  return (
    <>
      <div className={`flex justify-${alignItems ? alignItems : "center"}`}>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created with &#9829; by{" "}
          <a
            className="hover:underline hover:text-white"
            href={credits.authorsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credits.authorsName}
          </a>
        </span>
      </div>
    </>
  );
};

export default FooterCredits;
