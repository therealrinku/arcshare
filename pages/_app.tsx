import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arcshare</title>
        <meta title="description" content="share files instantly with Ar3share" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="https://img.icons8.com/office/2x/share.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
