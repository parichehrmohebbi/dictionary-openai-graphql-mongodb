import { connect } from "@src/dao";
import { Word } from "@src/dao/types";

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  return db.collection<Word>("words");
};

const resolvers = {
  Query: {
    async words() {
      const collection = await getCollection();
      return collection.find().toArray();
    },
    async wordsByTitle(parent: any, args: any) {
      const { searchedText } = args;
      if (!searchedText || searchedText === "") return [];
      const collection = await getCollection();
      return await collection
        .find({
          title: new RegExp(`.*${searchedText}.*`, "i"),
          // title: {
          //   $regex: new RegExp(`.*${searchedText}.*`, "i"),
          // },
        })
        .toArray();
    },
  },
};

export default resolvers;
