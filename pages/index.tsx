import apolloClient from "@src/apollo/client";
import { gql } from "@apollo/client";
import WordRow from "@components/wordRow";
import Word from "@src/graphql/schema.graphql";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query Words {
        words {
          title
          relatedTopics
          relatedLinks {
            url
            title
          }
          description
          author
          _id
        }
      }
    `,
  });
  //todo: error handling
  return data.words;
};

const Index = () => {
  const { data, error } = useSWR("words", fetcher);

  if (!data) return <p>loading...</p>;

  if (error) return <p>error: {error.message}</p>;

  const wordElements = data?.map((word, i) => {
    return <WordRow word={word} key={word._id} />;
  });

  return data && data.length > 0 ? (
    <table>
      <tbody>{wordElements}</tbody>
    </table>
  ) : (
    <div>No Words!</div>
  );
};

export default Index;
