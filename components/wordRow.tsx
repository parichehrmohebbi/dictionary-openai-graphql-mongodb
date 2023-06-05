import { gql } from "@apollo/client";
import { useWordQuery } from "../src/graphql/types";

interface Props {
  wordId: string;
}

gql`
  query word($wordId: ID!) {
    word(wordId: $wordId) {
      title
      description
      author
      relatedLinks
      relatedTopics
    }
  }
`;

const WordRow = (props: Props) => {
  const { wordId } = props;
  const { loading, data } = useWordQuery({
    variables: {
      wordId,
    },
  });
  let content = <td colSpan={2}>Loading ...</td>;
  if (!loading && data) {
    const { title, description, author, relatedLinks, relatedTopics } =
      data.word;
    content = (
      <>
        <td>{title}</td>
        <td>{description}</td>
      </>
    );
  }
  return <tr>{content}</tr>;
};

export default WordRow;
