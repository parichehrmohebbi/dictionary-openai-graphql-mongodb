import WordDetail from "@components/word/wordDetail";
import { WordFinder } from "@src/chatGPT/wordFinder";
import { Maybe, Word } from "@src/dao/types";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useTheme } from "next-themes";

interface AskChatGPTProps {
  wordToSearch: string;
}

const AskChatGPT: React.FC<AskChatGPTProps> = ({
  wordToSearch,
}: AskChatGPTProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [word, setword] = useState<Maybe<Word>>(null);
  const { theme, setTheme } = useTheme();

  const submitQuestion = async () => {
    const wordfinder = new WordFinder(wordToSearch);
    try {
      setLoading(true);
      const foundWord: Maybe<Word> = await wordfinder.findWordAsync();

      setword(foundWord);
      console.log("suggested by chat box", foundWord);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading..."
      styles={{
        overlay: (base: any) => ({
          ...base,
          background: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
        }),
        spinner: (base: any) => ({
          ...base,
          "& svg circle": {
            stroke: theme == "light" ? "black" : "white",
          },
        }),
      }}
    >
      {!word && (
        <div>
          <p className=" text-grey-300 ">Lets give chatGPT a try </p>
          <button
            className="mt-5 border rounded-lg px-10 py-2 text-grey-800 dark:text-grey-200 hover:text-purple-400 dark:hover:text-purple-400"
            onClick={submitQuestion}
          >
            Ask ChatGPT
          </button>
        </div>
      )}

      {word && (
        <div>
          <h4>ChatGPT Suggestion:</h4>
          <WordDetail word={word}></WordDetail>
        </div>
      )}
    </LoadingOverlay>
  );
};

export default AskChatGPT;
