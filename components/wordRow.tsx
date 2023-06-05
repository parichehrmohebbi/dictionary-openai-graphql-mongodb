import { gql } from "@apollo/client";

interface Props {
  wordId: string;
}

const WordRow = (props: Props) => {
  const { word } = props;

  const { title, description, author, relatedLinks, relatedTopics } = word;

  return (
    <tr>
      <>
        <td>{title}</td>
        <td>{description}</td>
      </>
    </tr>
  );
};

export default WordRow;
