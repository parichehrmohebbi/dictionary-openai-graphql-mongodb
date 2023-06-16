import WordRow from "@components/word/wordRow";
import StatusText from "@components/word/statusText";
import { Word } from "@src/dao/types";
import { Maybe } from "graphql/jsutils/Maybe";
import { Key } from "react";
import { useRouter } from "next/router";

interface WordListProps {
  words: Maybe<Word[]>;
}

const WordList = ({ words }: WordListProps) => {
  const router = useRouter();

  return (
    <>
      {words?.map((w: Word) => {
        return (
          <WordRow
            wordInput={w}
            key={w._id as Key}
            onClick={() => {
              router.push(w.title.toString(), undefined, { shallow: false });
            }}
          />
        );
      })}
      {words?.length === 0 && (
        <StatusText message={"Nothing found!"}></StatusText>
      )}
    </>
  );
};

export default WordList;
