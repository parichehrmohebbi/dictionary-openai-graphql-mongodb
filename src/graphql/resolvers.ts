import { Resolvers, Word } from "./types";
import { connect } from "../dao";
import { WordDbObject } from "../dao/types";

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  console.log("worrrrrds", db.collection<WordDbObject>("words"));
  return db.collection<WordDbObject>("words");
};

const fromDbObject = (dbObject: WordDbObject): Word => ({
  wordId: dbObject._id.toHexString(),
  title: dbObject.title,
  description: dbObject.description,
  author: dbObject.author,
  relatedLinks: dbObject.relatedLinks,
  relatedTopics: dbObject.relatedTopics,
});

const resolvers: Resolvers = {
  Query: {
    allWords: async () => {
      const collection = await getCollection();
      return await collection.find().map(fromDbObject).toArray();
    },
    word: async (_: any, { wordId }) => {
      const collection = await getCollection();
      const dbObject = await collection.findOne(
        (x: WordDbObject) => x._id.toString() === wordId
      );
      return dbObject ? fromDbObject(dbObject) : null;
    },
  },
  Mutation: {
    createWord: async (
      _: any,
      { title, description, author, relatedLinks, relatedTopics }
    ) => {
      const data: Omit<WordDbObject, "_id"> = {
        title: title,
        description,
        author,
        relatedLinks,
        relatedTopics,
      };

      const collection = await getCollection();
      const document = await collection.insertOne(data as WordDbObject);
      return fromDbObject({
        ...data,
        _id: document.insertedId,
      });
    },
    // updateWord: async (_: any, { wordId, data }) => {
    //   const collection = await getCollection();
    //   const result = await collection.findOneAndUpdate(
    //     {
    //       _id: wordId,
    //     },
    //     { $set: data },
    //     {
    //       returnOriginal: false,
    //     }
    //   );

    //   return fromDbObject(result.value);
    // },
  },
};

export default resolvers;
