import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    words: [Word]
    wordsByTitle(searchedText: String): [Word]
  }

  type Link {
    title: String
    url: String
  }

  type Word {
    _id: String
    title: String
    definition: String
    author: String
    relatedLinks: [Link]
    relatedTopics: [String]
  }
`;

export default typeDefs;
