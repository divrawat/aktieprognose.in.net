/*
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
*/




import { Shantell_Sans } from '@next/font/google';
import "@/styles/globals.css";

const shantellSans = Shantell_Sans({ subsets: ['latin'], preload: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
         :root {--font-shantell-sans: ${shantellSans.style.fontFamily}; }
        body {font-family: var(--font-shantell-sans);}        
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
