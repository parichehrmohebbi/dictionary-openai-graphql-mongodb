import WordRow from "@components/word/wordRow";
import StatusText from "@components/word/statusText";
import { Word } from "@src/dao/types";
import { Maybe } from "graphql/jsutils/Maybe";

interface WordListProps {
  words: Maybe<Word[]>;
}

const WordList = ({ words }: WordListProps) => {
  return (
    <>
      {words?.map((w: Word) => {
        return <WordRow word={w} key={w._id} onC />;
      })}
      {words?.length === 0 && (
        <StatusText message={"Nothing found!"}></StatusText>
      )}
    </>
  );
};

export default WordList;
