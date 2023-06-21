import "@styles/globals.css";
import type { AppProps } from "next/app";
import apolloClient from "@src/apollo/client";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import "@styles/globals.css";
import Header from "@components/layout/header";
import { WordProvider } from "@src/context/wordProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <WordProvider>
        <ApolloProvider client={apolloClient}>
          <main className=" px-2 lg:px-96 md:px-16 sm:px-5 xs:px-3 py-20 w-screen min-h-screen dark:bg-black">
            <Header></Header>
            <Component {...pageProps} />
          </main>
        </ApolloProvider>
      </WordProvider>
    </ThemeProvider>
  );
}
