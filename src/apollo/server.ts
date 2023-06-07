import { ApolloServer } from "@apollo/server";
import typeDefs from "@src/graphql/types";
import resolvers from "@src/graphql/resolvers";
import { ApolloServerErrorCode } from "@apollo/server/errors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  formatError: (formattedError, error) => {
    if (
      formattedError?.extensions?.code ===
      ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
    ) {
      return {
        ...formattedError,
        message: "Your query doesn't match the schema. Try double-checking it!",
      };
    } else if (formattedError?.message?.startsWith("Database Error: ")) {
      return { message: "Internal server error" };
    }

    return formattedError;
  },
});

export default apolloServer;
