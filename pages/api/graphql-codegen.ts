import { ApolloServer } from "@apollo/server";
import "graphql-import-node";
import typeDefs from "@src/graphql/schema.graphql";
import resolvers from "@src/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs: [DIRECTIVES, typeDefs],
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
