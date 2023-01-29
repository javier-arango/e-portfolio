import Head from "next/head";
import { IMetaTags } from "../../lib";
import { useRouter } from "next/router";
import { defaultMetaTagsData } from "../../data";

interface IAppContainer extends IMetaTags {
  children: JSX.Element | JSX.Element[];
}

const AppContainer = ({
  title,
  description,
  keywords,
  children,
}: IAppContainer) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {!title
            ? defaultMetaTagsData.title
            : defaultMetaTagsData.title + " | " + title}
        </title>

        {/* Meta Tags */}
        <meta name="author" content="Javier Arango" />
        <meta
          name="description"
          content={!description ? defaultMetaTagsData.description : description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content={
            keywords
              ? [...defaultMetaTagsData.keywords!, ...keywords].join(",")
              : defaultMetaTagsData.keywords?.join(", ")
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:url"
          content={defaultMetaTagsData.url + router.asPath}
        />

        {/* Open Graph Tag (OG) */}
        <meta
          property="og:title"
          content={
            !title
              ? defaultMetaTagsData.title
              : defaultMetaTagsData.title + " | " + title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={defaultMetaTagsData.url} />
        <meta
          property="og:description"
          content={!description ? defaultMetaTagsData.description : description}
        />
        <meta property="og:site_name" content={defaultMetaTagsData.title} />

        {/* Links */}
        <link rel="icon" href="/browserConfig/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/browserConfig/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/browserConfig/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/browserConfig/favicon-16x16.png"
        />
        <link rel="manifest" href="./browserConfig/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/browserConfig/safari-pinned-tab.svg"
          color="#b48f73"
        />

        <link rel="canonical" href={defaultMetaTagsData.url + router.asPath} />
      </Head>
      <main className="margin-responsive">{children}</main>
    </>
  );
};

export default AppContainer;
