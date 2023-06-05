import "@styles/globals.css";
import type { AppProps } from "next/app";
import apolloClient from "@src/apollo/client";
import { ApolloProvider } from "@apollo/client";

import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
