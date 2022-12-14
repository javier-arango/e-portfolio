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
          <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
            <a
              className="hover:bg-yellow-500 rounded-md py-1 hover:text-gray-50"
              href={credits.authorsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credits.authorsName}
            </a>
          </div>
        </span>
      </div>
    </>
  );
};

export default FooterCredits;
