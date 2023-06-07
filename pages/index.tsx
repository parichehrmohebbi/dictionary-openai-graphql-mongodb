import apolloClient from "@src/apollo/client";
import { gql } from "@apollo/client";
import WordRow from "@components/word/wordRow";
import Word from "@src/graphql/schema.graphql";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Search from "@components/word/search";
import WordList from "@components/word/wordList";
import StatusText from "@components/word/statusText";

const fetchWordsByName = async ({ url, searchedtxt }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query WordsByTitle($searchedText: String) {
        wordsByTitle(searchedText: $searchedText) {
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
    variables: { searchedText: searchedtxt },
  });
  //todo: error handling
  return data.wordsByTitle;
};

const Index = () => {
  const [listVisible, setListVisible] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const { data, error } = useSWR(
    { url: "/api/wordsByTitle", searchedtxt: searchedText },
    (args) => fetchWordsByName(args)
  );

  const searchChanged = (e: any) => {
    setListVisible(true);
    setSearchedText(e.target.value);
  };

  return (
    <div className="lg:px-96 md:px-16 sm:px-5 py-20 w-screen">
      <Search
        onChange={searchChanged}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      ></Search>
      {!data && !error && <StatusText message={"loading..."}></StatusText>}
      {error && <StatusText message={"error..."}></StatusText>}
      {listVisible && <WordList words={data}></WordList>}
    </div>
  );
};

export default Index;
