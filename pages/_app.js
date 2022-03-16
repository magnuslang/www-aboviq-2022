import '../styles/header.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script data-api="/_hive" src="/bee.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}
