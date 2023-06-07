import apolloServer from "@src/apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

export default startServerAndCreateNextHandler(apolloServer);
