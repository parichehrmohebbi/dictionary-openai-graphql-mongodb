import { gql } from "@apollo/client";

export const GET_WORDS_BY_TITLE = gql`
  query WordsByTitle($searchedText: String) {
    wordsByTitle(searchedText: $searchedText) {
      title
      relatedTopics
      relatedLinks {
        url
        title
      }
      definition
      author
      _id
    }
  }
`;
