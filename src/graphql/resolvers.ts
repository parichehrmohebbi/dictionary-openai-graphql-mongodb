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
    async wordsByTitle(parent, { searchedText }, contextValue, info) {
      console.log("searchedText", searchedText);
      if (!searchedText || searchedText === "") return [];
      const collection = await getCollection();
      return await collection
        .find({
          title: {
            $regex: new RegExp(`.*${searchedText}.*`, "i"),
          },
        })
        .toArray();
    },
  },
};

export default resolvers;
