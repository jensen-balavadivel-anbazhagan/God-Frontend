import "../public/css/styles.css";
import React from "react";
import { AppProps } from 'next/app';

function  MyApp({ Component, pageProps } : AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
