import '../styles/header.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async data-api="/_hive" src="/bee.js" data-no-cookie />
      <Component {...pageProps} />
    </>
  );
}
