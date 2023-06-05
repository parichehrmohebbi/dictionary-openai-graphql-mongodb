import { MongoClient, Db } from "mongodb";
export * from "./types";

export let client: MongoClient;
export let database: Db;

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${process.env.DB_URL}`);
    client = await MongoClient.connect(process.env.DB_URL || "");
    database = client.db(process.env.DB_NAME);
    console.info(`CONNECTED to database ${process.env.DB_URL}`);
    console.info("dbdbdbdb", database);
  }

  return database;
};
