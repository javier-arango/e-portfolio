import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  className?: string;
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
};

const AppContainer = ({ title, description, className, children }: Props) => {
  const router = useRouter();

  const meta = {
    author: "Javier Arango",
    keywords:
      "Javier Arango, Javier Arango Software Engineer, Javier Arango Computer Science, Javier Arango Computer Science Student, Arango Javier",
    favicon: "/favicon.ico",
    og: {
      url: `https://javierarango.com${router.asPath}`,
      type: "website",
      site_name: "Javier Arango",
      title: "Javier Arango Portafolio",
      description:
        "Javier Arango is a third-year Computer Science undergraduate student at the University of Florida.",
      image: "/og-image.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@Javier_Arango_",
    },
    canonical: `https://javierarango.com${router.asPath}`,
  };

  return (
    <>
      <Head>
        {/* Website Title */}
        <title>{title}</title>

        {/* Meta Data */}
        <meta name="author" content={meta.author} />
        <meta name="description" content={description} />
        <meta name="keywords" content={meta.keywords} />

        {/* Open Graph Protocol */}
        <meta property="og:url" content={meta.og.url} />
        <meta property="og:type" content={meta.og.type} />
        <meta property="og:site_name" content={meta.og.site_name} />
        <meta property="og:title" content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
        <meta property="og:image" content={meta.og.image} />

        {/* Social Media Sharing */}
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:site" content={meta.twitter.site} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={meta.og.image} />

        {/* Help Google choose the right canonical URL for your duplicate pages */}
        <link rel="canonical" href={meta.canonical} />

        {/* Links */}
        <link rel="icon" href={meta.favicon} />
      </Head>

      {/* Main Content */}
      <main className={`w-full font-mono ${className}`}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default AppContainer;
