import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "@src/graphql/types";
import resolvers from "@src/graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);
