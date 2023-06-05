import apolloServer from "@src/apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "@src/graphql/types";
import resolvers from "@src/graphql/resolvers";

export default startServerAndCreateNextHandler(apolloServer);
