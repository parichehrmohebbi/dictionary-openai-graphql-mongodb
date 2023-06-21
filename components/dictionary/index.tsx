import React, { useContext, useEffect, useState } from "react";
import Search from "@components/word/search";
import WordList from "@components/word/wordList";
import StatusText from "@components/word/statusText";
import { useQuery } from "@apollo/client";
import { GET_WORDS_BY_TITLE } from "@src/graphql/queries";
import WordContext from "@src/context/wordContext";
import WordDetail from "@components/word/wordDetail";
import { usePathname } from "next/navigation";
import AskChatGPT from "@components/chatGPTBox/askChatGPT";

type ContainerProps = {
  children?: React.ReactNode;
};

const Dictionary: React.FC<ContainerProps> = (props: ContainerProps) => {
  const [searchedText, setSearchedText] = useState("");
  const { word, setWord } = useContext(WordContext);

  const path = usePathname();

  useEffect(() => {
    const wordTitle = decodeURI(path?.substring(1));
    if (wordTitle) setSearchedText(wordTitle);
    if (word) setSearchedText(word?.title.toString());
  }, [word, path]);

  const { loading, error, data } = useQuery(GET_WORDS_BY_TITLE, {
    variables: { searchedText: searchedText },
  });

  const foundWords = data?.wordsByTitle;

  const searchChanged = async (e: any) => {
    setWord(null);
    setSearchedText(e.target.value);
  };

  return (
    <div>
      <Search
        onChange={searchChanged}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      ></Search>

      {((!data && !error) || loading) && (
        <StatusText message={"loading..."}></StatusText>
      )}
      {error && <StatusText message={"error..."}></StatusText>}
      {!word && <WordList words={foundWords}></WordList>}
      {word && <WordDetail word={word}></WordDetail>}
      {searchedText && !word && foundWords?.length == 0 && (
        <AskChatGPT wordToSearch={searchedText}></AskChatGPT>
      )}
    </div>
  );
};

export default Dictionary;
