import React from "react";
import { MoralisProvider } from "react-moralis";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MoralisProvider
      appId="8ejlAvSfKTPHhw4QV4m1o3hBCTz5xU9fPh6l3wxO"
      serverUrl="https://7ttg6gmdv0vh.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
