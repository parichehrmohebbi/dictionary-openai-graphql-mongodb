import "@styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "node-fetch"; // Use node-fetch here to allow SSR

const client = new ApolloClient({
  link: new HttpLink({ uri: "/api/graphql", fetch: fetch as any }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
