import { ApolloServer } from "@apollo/server";
import typeDefs from "@src/graphql/types";
import resolvers from "@src/graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export default apolloServer;
