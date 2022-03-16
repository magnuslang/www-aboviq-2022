import '../styles/header.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.splitbee.io/sb.js" data-no-cookie />
      <Component {...pageProps} />
    </>
  );
}
