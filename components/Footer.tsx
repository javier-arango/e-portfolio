import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-center">
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#">
                <a className="mr-4 hover:underline md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                <a className="mr-4 hover:underline md:mr-6 "> Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                <a className="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                <a className="mr-4 hover:underline md:mr-6 ">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created with &#9829; by{" "}
          <a
            className="hover:underline"
            href="https://github.com/javier-arango/ePortafolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javier Arango
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
