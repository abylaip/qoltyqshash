import React from "react";
import { MoralisProvider } from "react-moralis";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MoralisProvider
      appId="pIilOYPP8JyjY5rbRuKOTcFSWGEZdHOrNSqW9MFW"
      serverUrl="https://nih2kkol6ozb.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
