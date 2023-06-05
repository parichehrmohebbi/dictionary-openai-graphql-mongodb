import { connect } from "@src/dao";

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  return db.collection("words");
};

const resolvers = {
  Query: {
    async words() {
      const collection = await getCollection();
      return collection.find().toArray();
    },
  },
};

export default resolvers;
