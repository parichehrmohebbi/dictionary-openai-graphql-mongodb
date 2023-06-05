import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch"; // Use node-fetch here to allow SSR

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "/api/graphql", fetch: fetch as any }),
  cache: new InMemoryCache(),
});

export default apolloClient;
